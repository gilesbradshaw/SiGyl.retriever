
define [
	"q"
	"linq"
],(Q,linq) ->
	rindex=0;
	class Retriever
		constructor:(source, store, listener)->
			@retrieve=(tokens)->
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
				i = source.invoke( 
					"join"
					myRindex++
					joins
					collectionJoins
				)
				i.catch (error)-> 
					deferred.reject(error)
				i.done (x)->
					deferred.resolve(store.mergeData x)
				
				
				deferred.promise
			@unlisten=(unlistens, collectionUnlistens)->
				deferred = Q.defer()
				i = source.invoke( 
					"leave"
					unlistens
					collectionUnlistens
				)
				i.done (x)->deferred.resolve(x)
				i.catch (error)-> deferred.reject(error)
				i.finally ()->
				deferred.promise
			rtDesc=0
			source.on "change", (id,type,data)=>
				if changed = store.changeData id,type,data
					listener.addData @, changed
					listener.cycle()

			source.on "delete", (id,type,data)=>
				todelete = store.deleteData id,type,data
				if todelete 
					listener.deleteData @, todelete
					listener.cycle()

			