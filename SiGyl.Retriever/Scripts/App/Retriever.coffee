
define [
	"Q"
	"linq"
	"breezeretriever"
	"listener"
	"source"
	"observableExtensions"
],(Q,linq,breezeRetriever, listener,source,ObservableExtensions) ->

	
	rindex=0

	retriever=	
		retrieve:(tokens)->
			myRindex=rindex++
			deferred = Q.defer()
			joins=linq.From(tokens).Aggregate([],(a,b) -> 
					if b.retrieveRequestMerge
						b.retrieveRequestMerge(a)
					else
						a
				)||[]
			collectionJoins=linq.From(tokens).Aggregate([],(a,b) -> 
					if b.collectionRetrieveRequestMerge
						b.collectionRetrieveRequestMerge(a)
					else
						a
				)||[]
			i = source.getMe().invoke( 
				"join"
				myRindex++
				joins
				collectionJoins
			)
			i.fail (error)-> 
				deferred.reject(error)
			i.done (x)->
				doBreeze= Q.all [
					breezeRetriever.getMe().get joins
					breezeRetriever.getMe().getCollection collectionJoins
				]
				doBreeze.catch (error) ->
					deferred.rejectError
				doBreeze.done (res)->
					results=[]
					for r in res[0]
						r1= linq.From(res[1]).SingleOrDefault(undefined,(rr)->rr.Type==r.Type)
						if r1
							r.Ids= r.Ids||r1.Ids
							r.Collections=r.Collections||r1.Collections
						results.push r
					for r in res[1]
						if !linq.From(res[0]).Any((rr)->rr.Type == r.Type)
							results.push r
					deferred.resolve results
			deferred.promise
		unlisten:(unlistens, collectionUnlistens)->
			deferred = Q.defer()
			i = source.getMe().invoke( 
				"leave"
				unlistens
				collectionUnlistens
			)
			i.done (x)->deferred.resolve(x)
			i.catch (error)-> deferred.reject(error)
			i.finally ()->
			deferred.promise
	getMe:->
		retriever
	initMe:(urls)->
		breezeRetriever.initMe urls

		rindex=0
		source.initMe()
		source.getMe().on "change", (id,type,data)->
			breezeRetriever.getMe().changeData(id,type,data).done (changed)->
				if changed
					listener.getMe().addData retriever, changed
					listener.getMe().cycle()

		source.getMe().on "delete", (id,type,data)->
			breezeRetriever.getMe().deleteData(id,type,data).done (toDelete)->
				if toDelete
					listener.getMe().deleteData retriever, changed
				listener.getMe().cycle()
		
			