# CoffeeScript

define [
	"knockout"
	"Q"
	"linq"
	"utils"
	"rx"
	"knockout.rx"
	"observableExtensions.listener"
],(ko,Q,linq,utils,rx) ->


	ko.extenders.retrieve=(target, options)->
		target.retrieve= (name)->
			options.retrieve()
			retrieved:()->target
		target

	ko.extenders.order=(target, options)->
		target.order=(name)->
			ko.utils.unwrapObservable name
			options.makeQuery (param)->"#{param} from order #{ko.utils.unwrapObservable name}"
			target
		target

	ko.extenders.base=(target, options)->
		target.base= target.any=(name)->
			ko.utils.unwrapObservable name
			options.clearQuery()
			options.makeQuery (query)-> query.where "Name", "startsWith", "N"
			target
		target




	genericObservable=(data, subscriptionDefinition, changeDataProcessor, baseQuery,typeManager)->
		_queryFuncs=[]
		_mergeFuncs=[]
		
		observable= rx.Observable.create (observer)->
			disposer=undefined
			myQuery = _queryFuncs.reduce ((q,fn)->fn q), baseQuery()
			retriever.subscriber(subscriptionDefinition()).then (sub)->
				preChanged=[]
				preDeleted=[]
				filterFunction = myQuery._toFilterFunction typeManager.breezeEntityType
				qex= typeManager.executeQuery(myQuery)
				qex.then (retrievedData)->
					data = changeDataProcessor observer, data, retrievedData.storedResults, preChanged, preDeleted
					preChanged = undefined
					preDeleted=undefined
				qex.fail (err)->alert err
				disposer = sub().subscribe (x)->
					deleted = x.deleted
					if x.changed
						if !filterFunction x.changed
							deleted=x.changed
						else
							if preChanged
								preChanged.push x.changed
							else
								data = changeDataProcessor observer, data,undefined,[x.changed]
					if deleted
						if preDeleted
							preDeleted.push deleted
						else
							data = changeDataProcessor observer, data, undefined, undefined,[deleted]
			
			()->
				if disposer
					disposer.dispose()

		
		data:observable.toKoObservable data
		clearQuery:()->
			_queryFuncs=[]
			
		makeQuery:(queryFunc)->
			_queryFuncs.push queryFunc
		makeMergeFunc:(mergeFunc)->
			_mergeFuncs.push mergeFunc
		retrieve:()->
			


		

	observableExtensions= 
		testManyObservable:(subscriptionDefinition, type)->
			()->
				observable= genericObservable(
					ko.observableArray
					()->subscriptionDefinition
					(data,items,changeItems,deleteItems)->
						for item in items
							data.push item
						if changeItems
							for item in changeItems
								data.push item
					()->"initialQuery"
					entityManager.getType type
				)
				root:observable.data.extend
					base:
						makeQuery:observable.makeQuery
						clearQuery:observable.clearQuery
						
					order:
						makeQuery:observable.makeQuery
					retrieve:
						retrieve:observable.retrieve
		rootObservable:(id,type)->
			()->
				typeManager = entityManager.getType type
				observable= genericObservable(
					undefined
					()->"#{type}:.:#{id}"
					(observer, data,items,changeItems,deleteItems)->
						oldItem= data
						if items && items.length
							item= items[items.length-1]
						if changeItems && changeItems.length
							item= changeItems[changeItems.length-1]
						if item isnt oldItem
							observer.onNext item
						item
					()->
						query = typeManager.query()
						query=query.where "Id", "==", id
						query
					typeManager
				)
				root:observable.data.extend
					retrieve:
						retrieve:observable.retrieve
		manyObservable:(item,type,collection)->
			()->
				typeManager = (entityManager.getType type).collectionManager collection
				observable= genericObservable(
					[]
					()->typeManager.subscriptionDefinition item
					(observer, data,items, changeItems, deleteItems)->
						changed=false
						if items
							data = items
							changed= true
						if changeItems
							for i in linq.From(changeItems).Where((ci)->data.indexOf(ci) <0).ToArray()
								data.push i
								changed= true
						if deleteItems
							deleteItems.map (d)->
								if (di = data.indexOf(d))>=0
									data.splice data.indexOf(i), 1
									changed=true
						if changed
							observer.onNext data
						data
					()->query = typeManager.query item.Id()
					typeManager
				)
				root:observable.data.extend
					retrieve:
						retrieve:observable.retrieve
					base:
						makeQuery:observable.makeQuery
						clearQuery:observable.clearQuery
						
					order:
						makeQuery:observable.makeQuery
		singleObservable:(item,property,entityType)->
			()->
				typeManager = (entityManager.getType entityType.name).singleManager property
				observable= genericObservable(
					undefined
					()->typeManager.subscriptionDefinition item
					(observer, data,items, changeItems, deleteItems)->
						oldItem= data
						if items && items.length
							i= items[items.length-1]
						if changeItems && changeItems.length
							i = changeItems[changeItems.length-1]
						if oldItem isnt i
							observer.onNext i
						i
					()->
						query = typeManager.query item
					typeManager
				)
				root:observable.data.extend
					retrieve:
						retrieve:observable.retrieve

	retriever=undefined
	entityManager=undefined
	getMe:->observableExtensions
	initMe:->
		deferred=Q.defer()
		require ["breezeEntityManagers"], (br)->
			br.getMe().then (em)->
				entityManager=em
				retriever=em
				deferred.resolve()
		#ObservableExtensions.modelExtensions={}
		deferred.promise


	

