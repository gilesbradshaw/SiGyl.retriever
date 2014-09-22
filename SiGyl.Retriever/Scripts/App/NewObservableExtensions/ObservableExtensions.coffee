# CoffeeScript

define [
	"knockout"
	"Q"
	"linq"
	"utils"
	"rx"
	"breeze"
	"knockout.rx"
	"observableExtensions.listener"
],(ko,Q,linq,utils,rx,breeze) ->


	get=(baseObservable, initialData)->
		get:()->
			#baseObservable.buildQuery()
			got:baseObservable.observable.toKoObservable initialData
	where=(baseObservable)=>
		where:(property,operator,value)->
			baseObservable.makeQuery (query)-> query.where property, operator, value
			@
	orderBy=(baseObservable)=>
		orderBy:(field)->
			baseObservable.makeQuery (query)-> query.orderBy "#{ko.utils.unwrapObservable field} desc"
			@
	skip=(baseObservable)=>
		skip:(count)->
			baseObservable.makeQuery (query)-> query.skip ko.utils.unwrapObservable count
			@
	take=(baseObservable)=>
		take:(count)->
			baseObservable.makeQuery (query)-> query.take ko.utils.unwrapObservable count
			@
	selectMany=(baseObservable)=>
		selectMany:(collection)->
			baseObservable.buildQuery()
			observable = baseObservable.observable.selectMany (x)->
				rx.Observable.create (observer)->
					observer.onNext observableExtensions.manyObservable(x, baseObservable.typeManager.entityType.name, collection)()
					
				#.observable
				
			got:observable.toKoObservable()
			
			



	createBaseObservable=(data, subscriptionDefinition, changeDataProcessor, baseQuery,typeManager)->
		_queryFuncs=[]
		_mergeFuncs=[]
		myQuery=undefined
		observable= rx.Observable.create (observer)->
			disposer=undefined
			baseObservable.buildQuery()
			filterFunction = myQuery._toFilterFunction typeManager.breezeEntityType
			toOrderByComparer=myQuery._toOrderByComparer typeManager.breezeEntityType
			entityManager.subscriber(subscriptionDefinition()).then (subs)->
				preChanged=[]
				preDeleted=[]
				execute= ()->
					qex= typeManager.executeQuery(myQuery)
					qex.then (gotData)->
						changeResult = changeDataProcessor data, gotData.storedResults, preChanged, preDeleted
						data=changeResult.data
						observer.onNext data
						preChanged = undefined
						preDeleted=undefined
					qex.fail (err)->alert err
				execute()
				disposer = rx.Observable.merge(subs.map (sub)->sub()).subscribe (x)->
					deleted = x.deleted
					if x.changed
						if !filterFunction x.changed
							deleted=x.changed
						else
							if preChanged
								preChanged.push x.changed
							else
								changeResult = changeDataProcessor data,undefined,[x.changed]
								data = changeResult.data
					if deleted
						if preDeleted
							preDeleted.push deleted
						else
							changeResult = changeDataProcessor  data, undefined, undefined,[deleted]
							data = changeResult.data
					if changeResult
						if data instanceof Array
							for index in [0..data.length-2]
								if data.length>1 && toOrderByComparer && toOrderByComparer(data[index], data[index+1])>0
									needsSorting=true
									data.sort toOrderByComparer
									index=data.length-2
							if myQuery.skipCount and data.indexOf(x.changed) ==0 
								execute()
								return
							else
								if myQuery.takeCount
									if data.length>  myQuery.takeCount
										data.splice data.length-1,1

					if changeResult.changed or needsSorting
						observer.onNext data
			
			()->
				if disposer
					disposer.dispose()
		baseObservable=
			typeManager:typeManager
			observable:observable
			buildQuery:()->
				myQuery = _queryFuncs.reduce ((q,fn)->fn q), baseQuery()
				_queryFuncs=[]
			makeQuery:(queryFunc)->
				_queryFuncs.push queryFunc
			makeMergeFunc:(mergeFunc)->
				_mergeFuncs.push mergeFunc

		

	observableExtensions= 
		testManyObservable:(subscriptionDefinition, type)->
			()->
				observable= createBaseObservable(
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
					get:
						get:observable.get
		rootObservable:(id,type)->
			()->
				typeManager = entityManager.getType type
				baseObservable= createBaseObservable(
					undefined
					()->["#{type}:.:#{id}"]
					(data,items,changeItems,deleteItems)->
						oldItem= data
						if items && items.length
							item= items[items.length-1]
						if changeItems && changeItems.length
							item= changeItems[changeItems.length-1]
						if item isnt oldItem
							changed:true
							data:item
						else
							changed:false
							data:item
					()->
						
						query=typeManager.query.where "Id", "==", id
						query
					typeManager
				)
				$.extend {}, get baseObservable
		manyObservable:(items,type,collection)->
			()->
				typeManager = (entityManager.getType type).collectionManager collection
				baseObservable= createBaseObservable(
					[]
					()->items.map (i)->typeManager.subscriptionDefinition i
					(data,newData, changeItems, deleteItems)->
						changed=false
						if newData
							data = newData
							changed= true
						if changeItems
							for i in linq.From(changeItems).Where((ci)->data.indexOf(ci) <0).ToArray()
								data.push i
								changed= true
						if deleteItems
							deleteItems.map (d)->
								if (di = linq.From(data).SingleOrDefault(undefined, (dd)->dd.Id()==d.Id()))
									data.splice data.indexOf(di), 1
									changed=true
						
						changed:changed
						data:data
					()->query = typeManager.query.where breeze.Predicate.or items.map (i)-> typeManager.predicate i
					typeManager
				)
				$.extend(
					{
						observable:baseObservable.observable
					}
					
					get baseObservable,[]
					orderBy baseObservable
					skip baseObservable
					take baseObservable
					where baseObservable
					selectMany baseObservable
				)
		singleObservable:(item,property,entityType)->
			()->
				typeManager = (entityManager.getType entityType.name).singleManager property
				baseObservable= createBaseObservable(
					undefined
					()->[typeManager.subscriptionDefinition item]
					(data,items, changeItems, deleteItems)->
						oldItem= data
						if items && items.length
							i= items[items.length-1]
						if changeItems && changeItems.length
							i = changeItems[changeItems.length-1]
						if oldItem isnt i
							changed:true
							data:i
						else
							changed:false
							data:i
					()->
						query = typeManager.query.where typeManager.predicate item
					typeManager
				)
				$.extend {}, get baseObservable

	entityManager=undefined
	getMe:->observableExtensions
	initMe:->
		deferred=Q.defer()
		require ["breezeEntityManagers"], (br)->
			br.getMe().then (em)->
				entityManager=em
				deferred.resolve()
		#ObservableExtensions.modelExtensions={}
		deferred.promise


	

