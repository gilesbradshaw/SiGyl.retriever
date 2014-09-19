# CoffeeScript

define [
	"knockout"
	"Q"
	"linq"
	"observableExtensions.listener"
],(ko,Q,linq) ->


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

	observableExtensions= 
		manyObservable:(subscriptionDefinition)->
			()->
				subscribedDeferred= Q.defer()
				subscribedPromise = subscribedDeferred.promise
				_queryFuncs=[]
				_mergeFuncs=[]
				preObtained= undefined
				retrieve=()->
					preObtained=[]
					subscribedPromise.then ()->
						myQuery = _queryFuncs.reduce ((q,fn)->fn q), "initialQuery"
						retriever.retrieve(myQuery).then (retrievedData)->
							data retrievedData
							for preob in preObtained
								data.push preob
							preObtained = undefined
				clearQuery=()->
					_queryFuncs=[]
				makeQuery=(queryFunc)->
					_queryFuncs.push queryFunc
				makeMergeFunc=(mergeFunc)->
					_mergeFuncs.push mergeFunc
				retrieverPromise = Q.defer()
				data=ko.observableArray().extend
						listener:
							subscribeActions:->
								disposer = undefined
								onSubscribe:->
									myQuery = _queryFuncs.reduce ((q,fn)->fn q), "initialQuery"
									retriever.subscriber(subscriptionDefinition).then (sub)->
										subscribedDeferred.resolve()
										disposer = sub.subscribe (x)->
											if preObtained
												preObtained.push x
											else
												data.push x
								onDispose:->
									if disposer
										disposer.dispose()
						base:
							makeQuery:makeQuery
							clearQuery:clearQuery
						order:
							makeQuery:makeQuery
						retrieve:
							retrieve:retrieve
						
				root:data

	retriever=undefined
	getMe:->observableExtensions
	initMe:->
		deferred=Q.defer()
		require ["retriever"], (r)->
			retriever=r.getMe()
			deferred.resolve()
		#ObservableExtensions.modelExtensions={}
		deferred.promise


	

