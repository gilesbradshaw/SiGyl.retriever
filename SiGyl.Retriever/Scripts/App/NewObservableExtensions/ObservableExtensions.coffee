# CoffeeScript

define [
	"knockout"
	"Q"
	"linq"
	"utils"
	"observableExtensions.listener"
],(ko,Q,linq,utils) ->


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
			options.makeQuery (param)->"#{param} from base #{ko.utils.unwrapObservable name}"
			target
		target




	genericObservable=(observableType, subscriptionDefinition, dataProcessor, baseQuery,typeManager)->
		subscribedDeferred= Q.defer()
		subscribedPromise = subscribedDeferred.promise
		_queryFuncs=[]
		_mergeFuncs=[]
		preObtained= undefined
		
		retrieverPromise = Q.defer()
		data=observableType().extend
				listener:
					subscribeActions:->
						disposer = undefined
						onSubscribe:->
							myQuery = _queryFuncs.reduce ((q,fn)->fn q), "initialQuery"
							retriever.subscriber(subscriptionDefinition()).then (sub)->
								subscribedDeferred.resolve()
								disposer = sub().subscribe (x)->
									if preObtained
										preObtained.push x
									else
										dataProcessor data,[x]
						onDispose:->
							if disposer
								disposer.dispose()
		data:data
		clearQuery:()->
			_queryFuncs=[]
			
		makeQuery:(queryFunc)->
			_queryFuncs.push queryFunc
		makeMergeFunc:(mergeFunc)->
			_mergeFuncs.push mergeFunc
		retrieve:()->
			preObtained=[]
			subscribedPromise.then ()->
				myQuery = _queryFuncs.reduce ((q,fn)->fn q), baseQuery()
				qex= typeManager.executeQuery(myQuery)
				qex.then (retrievedData)->
					dataProcessor data, retrievedData.results, preObtained
					preObtained = undefined
				qex.fail (err)->alert err


		

	observableExtensions= 
		testManyObservable:(subscriptionDefinition, type)->
			()->
				observable= genericObservable(
					ko.observableArray
					()->subscriptionDefinition
					(data,items,preItems)->
						for item in items
							data.push item
						if preItems
							for item in preItems
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
					ko.observable
					()->"#{type}:.:#{id}"
					(data,items, preItems)->
						if items && items.length
							item= typeManager.store.mergeData type, items[items.length-1]
						if preItems && preItems.length
							item= typeManager.store.mergeData type, preItems[items.length-1]
						data item
					()->
						query = typeManager.query
						query=query.where "Id", "==", id
						query
					typeManager
				)
				root:observable.data.extend
					retrieve:
						retrieve:observable.retrieve
		manyObservable:(item,type,collection)->
			()->
				typeManager = entityManager.getType type
				collectionManager= typeManager.collectionManager collection
				observable= genericObservable(
					ko.observable
					()->"#{type}:.#{collection}:#{item.Id()}"
					(data,items, preItems)->
						data items.map (i)-> typeManager.store.mergeData collectionManager.entityType.name, i
						
					()->
						query = collectionManager.query item.Id()
					typeManager
				)
				root:observable.data.extend
					retrieve:
						retrieve:observable.retrieve
		singleObservable:(item,property,entityType)->
			()->
				typeManager = entityManager.getType entityType.name
				singleManager= typeManager.singleManager property
				observable= genericObservable(
					ko.observable
					()->"#{singleManager.entityType.name}:.:#{item.Id()}"
					(data,items, preItems)->
						if items && items.length
							item= typeManager.store.mergeData singleManager.entityType.name, items[items.length-1]
						if preItems && preItems.length
							item= typeManager.store.mergeData singleManager.entityType.name, preItems[items.length-1]
						data item
					()->
						query = singleManager.query item
					typeManager
				)
				root:observable.data.extend
					retrieve:
						retrieve:observable.retrieve
		manyObservable1:(id,type,collection)->
			()->
				root:ko.observableArray [
					Name:'ok'
				,
					Name:'ahhh'
				]
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


	

