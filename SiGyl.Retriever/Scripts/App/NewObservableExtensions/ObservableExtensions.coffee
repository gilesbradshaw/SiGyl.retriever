# CoffeeScript

define [
	"knockout"
	"Q"
	"linq"
	"utils"
	"rx"
	"knockout.rx"
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




	genericObservable=(observableType, subscriptionDefinition, changeDataProcessor, baseQuery,typeManager)->
		_queryFuncs=[]
		_mergeFuncs=[]
		preChanged= undefined
		preDeleted= undefined
		disposer = undefined
		retrieverPromise = Q.defer()
		data=observableType().extend
				listener:
					subscribeActions:->
						
						onSubscribe:->
							
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
			myQuery = _queryFuncs.reduce ((q,fn)->fn q), baseQuery()
			if disposer
				disposer.dispose()
				disposer=undefined
			retriever.subscriber(subscriptionDefinition()).then (sub)->
				disposer = sub().subscribe (x)->
					if x.changed
						if preChanged
							preChanged.push x.changed
						else
							changeDataProcessor data,undefined,[x.changed]
					if x.deleted
						if preDeleted
							preDeleted.push x.deleted
						else
							changeDataProcessor data, undefined, undefined,[x.deleted]
			
				preChanged=[]
				preDeleted=[]
				qex= typeManager.executeQuery(myQuery)
				qex.then (retrievedData)->
					changeDataProcessor data, retrievedData.storedResults, preObtained, preDeleted
					preChanged = undefined
					preDeleted=undefined
				qex.fail (err)->alert err


		

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
					ko.observable
					()->"#{type}:.:#{id}"
					(data,items,changeItems,deleteItems)->
						oldItem= data()
						if items && items.length
							item= items[items.length-1]
						if changeItems && changeItems.length
							item= changeItems[changeItems.length-1]
						if item isnt oldItem
							data item
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
					ko.observableArray
					()->typeManager.subscriptionDefinition item
					(data,items, changeItems, deleteItems)->
						if items
							data items
						if changeItems
							for i in linq.From(changeItems).Where((ci)->data().indexOf(ci) <0).ToArray()
								data.push i
						if deleteItems
							for i in linq.From(deleteItems).Where((ci)->data().indexOf(ci) >=0).ToArray()
								data.remove i
					()->query = typeManager.query item.Id()
					typeManager
				)
				root:observable.data.extend
					retrieve:
						retrieve:observable.retrieve
		singleObservable:(item,property,entityType)->
			()->
				typeManager = (entityManager.getType entityType.name).singleManager property
				observable= genericObservable(
					ko.observable
					()->typeManager.subscriptionDefinition item
					(data,items, changeItems, deleteItems)->
						oldItem= data()
						if items && items.length
							i= items[items.length-1]
						if changeItems && changeItems.length
							i = changeItems[changeItems.length-1]
						if oldItem isnt i
							data i
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


	

