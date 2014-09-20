define [
	"jquery"
	"knockout"
	"Q"
	"listenToken"
	"utils"
	"breeze"
	"linq"
	"observableExtensions.listener"
	"observableExtensions.base"
	"observableExtensions.order"
	"observableExtensions.filter"
	"observableExtensions.page"
	"observableExtensions.title"
	"observableExtensions.selectMany"
	"observableExtensions.selectSingle"
	"observableExtensions.select"
	"observableExtensions.mixinTo"
],($,ko,Q,ListenToken,utils,breeze, linq) ->

	ObservableExtensions=
		class ObservableExtensions
			constructor:(conceptualModel, retriever, listener)->
				parameterGroupId=0
				baseObservable=()=>
					_getListenToken=undefined
					_entityType=undefined
					ret =
						getListenToken:(getListenToken)=>
							oldGetListenToken = _getListenToken
							_getListenToken=(observable)->
								if oldGetListenToken
									getListenToken oldGetListenToken observable
								else
									getListenToken observable
							ret
						entityType:(entityType)->
							_entityType=entityType
							ret
						extend:()=>
							_entityType
							ko.observable().extend
								listener:
									subscribeActions:->
										onSubscribe:->
											throw "Illegal attempt to subscribe to unextended observable"
								base:
									getListenToken:(observable)=>
										_getListenToken observable
									listen:(token)->
										listener.listen token
									cycle:()->
										listener.cycle()
									unlisten:(token)->
										listener.unlisten token
									extend:=>
										mixin:{}
										mixinTo:{}
										page:
											listener:listener
										order:
											entityType:_entityType
										filter:
											entityType:_entityType
										title:{}
										idPush:{}
										extendListenToken:{}
										selectMany:
											listener:listener
											observableExtensions:ObservableExtensions
											manyObservable:@manyObservable
											entityType:_entityType
										selectSingle:
											listener:listener
											observableExtensions:ObservableExtensions
											manySingleObservable:@manySingleObservable
											conceptualModel:conceptualModel
											entityType:_entityType
				
			
				@manyObservable = (data, type, collection, entityType) =>
					baseObservable()
					.entityType(utils.getMe().getDependent(entityType, collection).entityType)
					.getListenToken((observable)->
						#this uniquely identifies this retrieval
						myKey="Collection:#{type}:#{collection}:#{parameterGroupId++}"
						listenToken = new (ListenToken.getMe()) retriever, observable or ko.observableArray()
						listenToken.type ="#{type}.#{collection}"
						listenToken.key=myKey
						listenToken.canAddData= (addData, completeData)=>
							if addData.value
								if addData.type is "#{type}.#{collection}"
									if data.Id() is addData.value[utils.getMe().getDependent(entityType, collection).id()]() 
										return true
								
						listenToken.addData = (addData)=>
							alreadyIn = listenToken.data().indexOf(addData.value) isnt -1
							completeData = listenToken.data()
							if !alreadyIn
								completeData=completeData.concat [addData.value]
							if listenToken.canAddData addData, completeData
								if !alreadyIn
									if listenToken.mixin
										completeData[completeData.indexOf(addData.value)]= listenToken.mixin addData.value
									listenToken.data completeData
							else
								if alreadyIn
									if completeData.indexOf(addData.value)>-1
										completeData.splice completeData.indexOf(addData.value),1
									listenToken.data completeData
						listenToken.deleteData = (deleteData)=>
							if deleteData.value
								if deleteData.type is "#{type}.#{collection}"
									if data.Id() is deleteData.value[utils.getMe().getDependent(entityType, collection).id()]() 
										listenToken.data.remove deleteData.value
						listenToken.getProcessMetaData (metadata)->
							listenToken.metadata=metadata
						listenToken.getDataMerge (dataToMerge)->
							if _type = linq.From(dataToMerge).SingleOrDefault(undefined, (x)->x.Type is type)
								if _collection = linq.From(_type.Collections).SingleOrDefault(undefined, (x)->x.Collection is collection)
									if id = linq.From(_collection.Ids).SingleOrDefault(undefined, (x)->x.Key is data.Id())
										if parameterGroup = linq.From(id.ParameterGroups).SingleOrDefault(undefined, (x)->x.Name is x.Name is myKey)
											listenToken.data ko.utils.arrayMap parameterGroup.Collection.data, (data)->
												if listenToken.mixin 
													listenToken.mixin data
												else
													data
											listenToken.processMetaData parameterGroup.Collection.metadata

						listenToken.getCollectionRetrieveRequest (requests)->
							typeRequest = linq.From(requests).SingleOrDefault undefined, (x)->x.type is type
							if !typeRequest
								typeRequest = 
									collections:[]
									type:type
								requests.push typeRequest
							_collection = linq.From(typeRequest.collections).SingleOrDefault undefined, (x)->x.collection is collection
							if !_collection
								_collection = 
									collection:collection
									ids:[]
								typeRequest.collections.push _collection
							idRequest = linq.From(_collection.ids).SingleOrDefault undefined, (x)->x.Id is data.Id()
							if !idRequest
								idRequest = 
									Id:data.Id()
									IdProperty:'Id'
									ParameterGroups:[]
								_collection.ids.push idRequest
							parameterGroup = linq.From(idRequest.ParameterGroups).SingleOrDefault undefined, (x)->x.Name is myKey
							if !parameterGroup
								parameterGroup = 
									Name:myKey
									Parameters:[]
							idRequest.ParameterGroups.push parameterGroup
							parameterGroup.Parameters
						listenToken.modifyCollectionRetrieveRequest (parameters)->
							parameters.push
								Name:"id"
								Id:'id'
								Values:[
									Name:'id'
									Value:data.Id()
								]
					).extend()


				@manySingleObservable = (entityType) =>
					baseObservable()
					.entityType(()->entityType)
					.getListenToken((observable)->
						#this uniquely identifies this retrieval
						myKey="ManySingle:#{entityType.name}:#{parameterGroupId++}"
						listenToken = new (ListenToken.getMe()) retriever, observable or ko.observableArray()
						listenToken.type ="#{entityType.name}"
						listenToken.key=myKey
					
						#listenToken.getProcessMetaData (metadata)->
						#	listenToken.metadata=metadata
						#this will change
						listenToken.getDataMerge (dataToMerge)->
							if _type = linq.From(dataToMerge).SingleOrDefault(undefined, (x)->x.Type is entityType.name)
								if id = linq.From(_type.Ids).SingleOrDefault(undefined, (x)->x.Key is "0")
									if parameterGroup = linq.From(id.ParameterGroups).SingleOrDefault(undefined, (x)->x.Name is x.Name is myKey)
									
										listenToken.data ko.utils.arrayMap parameterGroup.Value, (data)->
											if listenToken._mixinTo
												listenToken._mixinTo data
											else
												data
										#listenToken.processMetaData parameterGroup.Collection.metadata
						listenToken.getRetrieveRequest (requests)->
							typeRequest = linq.From(requests).SingleOrDefault undefined, (x)->x.type is entityType.name
							if !typeRequest
								typeRequest = 
									ids:[]
									type:entityType.name
								requests.push typeRequest
							idRequest = linq.From(typeRequest.ids).SingleOrDefault undefined, (x)->
								x.Id is false #never == data.Id()
							if !idRequest
								idRequest = 
									Id:0
									IdProperty:'Id'
									ParameterGroups:[]
								typeRequest.ids.push idRequest
							parameterGroup = linq.From(idRequest.ParameterGroups).SingleOrDefault undefined, (x)->x.Name is myKey
							if !parameterGroup
								parameterGroup = 
									Name:myKey
									Parameters:[]
							idRequest.ParameterGroups.push parameterGroup
							parameterGroup.Parameters
						listenToken.modifyRetrieveRequest (parameters)->
							parameters.push
								Name:"id"
								Id:'id'
							
						#listenToken.modifyCollectionRetrieveRequest (parameters)->
						#	parameters.push
						#		Name:"id"
						#		Id:'id'
						#		Values:[
						#			Name:'id'
						#			Value:data.Id()
						#		]
					).extend()





				relationObserve=(retriever, idObservable, property, relatedType, entityType, entityTypeFunc, prefix)=>
					lastIdObservableValue=undefined
					ret = ko.observable().extend
						listener:
							subscribeActions:->
								onSubscribe:->
									throw "Illegal attempt to subscribe to unextended observable"
						base:
							#filter:=>ObservableExtensions.filter #the filter specification (last bit of url)
							cycle:()->
								listener.cycle()

							getListenToken:(observable)=>
								myKey="#{prefix}:#{entityType.name}:#{property}:#{parameterGroupId++}"
								idToUnlisten=undefined
								listenToken= new (ListenToken.getMe()) retriever, ko.observable().extend
									listener:
										subscribeActions:->
											subscriber = undefined
											subscribePing:()->
											disposePing:()->
											onSubscribe:->
												if idObservable.peek()
													idToUnlisten = idObservable.peek()
													#listener.listen listenToken


												subscribeFunc=(x)->
													if lastIdObservableValue and x isnt lastIdObservableValue
														idToUnlisten = lastIdObservableValue
														listener.unlisten $.extend {}, listenToken
													myKey="#{prefix}:#{entityType.name}:#{property}:#{parameterGroupId++}"
													listenToken.key=myKey
													listenToken.relistening=true

													if x
										
														listener.listen listenToken
													else
														listenToken.data undefined
									
													lastIdObservableValue = x
													listener.cycle()
												lastIdObservableValue = idObservable.peek()
												if lastIdObservableValue
													subscribeFunc lastIdObservableValue

												subscriber = idObservable.subscribe subscribeFunc
											onDispose:->
												subscriber.dispose()
												if idObservable.peek()
													listener.unlisten listenToken
													listener.cycle()
								#listenToken.key=myKey
								listenToken.getDataMerge (data)->
									if idObservable.peek()
										if type = linq.From(data).SingleOrDefault(undefined, (x)->x.Type is relatedType)
											if id = linq.From(type.Ids).SingleOrDefault(undefined, (x)->x.Key is idObservable.peek())
												if parameterGroup = linq.From(id.ParameterGroups).SingleOrDefault(undefined, (x)->x.Name is x.Name is myKey)
													listenToken.data linq.From(parameterGroup.Value).SingleOrDefault undefined

								listenToken.getRetrieveRequest (requests)->
									if idObservable.peek()
										typeRequest = linq.From(requests).SingleOrDefault undefined, (x)->x.type is relatedType
										if !typeRequest
											typeRequest = 
												ids:[]
												type:relatedType
											requests.push typeRequest
										idRequest = linq.From(typeRequest.ids).SingleOrDefault undefined, (x)->x.Id is idObservable.peek()
										if !idRequest
											idRequest = 
												Id:idObservable.peek()
												ParameterGroups:[]
											typeRequest.ids.push idRequest
										parameterGroup = linq.From(idRequest.ParameterGroups).SingleOrDefault undefined, (x)->x.Name is myKey
										if !parameterGroup
											parameterGroup = 
												Name:myKey
												Parameters:[]
										idRequest.ParameterGroups.push parameterGroup
										parameterGroup.Parameters
								listenToken.modifyRetrieveRequest (parameters)->
									if idObservable()
										parameters.push
											Name:"id"
											Id:'id'
											Values:[
												Name:'id'
												Value:idObservable.peek()
											]
								listenToken


							listen:(token)->
								listener.listen token
							unlisten:(token)->
								listener.unlisten token
							extend:=>
								title:{}
								extendListenToken:{}
								select:
									listener:listener
									observableExtensions:ObservableExtensions
									manyObservable:@manyObservable
									entityType:entityTypeFunc
					ret.base()()

				@selfObservable = (data, type) =>
				
					idObservable = data.Id

					entityTypeFunc = ->conceptualModel.entities[type]

					relationObserve retriever, idObservable, '.', type, conceptualModel.entities[type], entityTypeFunc, "Self"

				@singleObservable = (data, property, entityType) =>
					principal = utils.getMe().getPrincipal entityType, property
					idObservable = data[principal.id()]
					relationObserve retriever, idObservable, property, principal.type(), entityType, principal.entityType, "Single"

				@flexibleRelationObservable = (data, property, entityType) =>
					navigationProperty = linq.From(entityType.flexibleRelations).Single((x)->x.name is property)
					idObservable = data[navigationProperty.idProperty]
					relatedType = data[navigationProperty.relatedTypeProperty]()
					entityTypeFunc = ->conceptualModel.entities[navigationProperty.relatedTypeProperty]
					relationObserve retriever, idObservable, property, relatedType, entityType, entityTypeFunc, "Flexible"
				entityManagers={}
				@interModelRelationObservable = (data, property, entityType) =>
					navigationProperty = linq.From(entityType.interModelRelations).Single((x)->x.name is property)
					entityManagers[navigationProperty.model] or= new breeze.EntityManager "breeze/" + navigationProperty.model
					idObservable = ko.observable()
						.extend
							listener:
								subscribeActions:->
										onSubscribe:->
											if navigationProperty.foreignKey isnt "Id"
												query=breeze.EntityQuery.from(navigationProperty.collection).where(navigationProperty.foreignKey,"==",data[navigationProperty.key]()).select("Id")
												entityManagers[navigationProperty.model].executeQuery(query)
													.then (data)->
														idObservable data.results[0].Id
											else
												idObservable data[navigationProperty.key]()
										disposePing:-> 
										subscribePing:->
										onDispose:->
					
						
						

					

					relatedType=property
					entityTypeFunc = ->entityType.model.models[navigationProperty.model].entities[property]
				
					relationObserve retriever, idObservable, property, relatedType,entityType, entityTypeFunc, "InterModel"

			

				@rootObservable = (id, type, single) =>
					#myKey="Root:#{type}:#{parameterGroupId++}"


					ret = ko.observable().extend
						listener:
							subscribeActions:->
								onSubscribe:->
									throw "Illegal attempt to subscribe to unextended observable"
						base:
							filter:=>ObservableExtensions.filter #the filter specification (last bit of url)
							getListenToken:(observable)=>
								#this uniquely identifies this retrieval
								myKey="Root:#{type}:#{parameterGroupId++}"
								listenToken = new (ListenToken.getMe()) retriever, observable or ko.observableArray()
								listenToken.key=myKey
								listenToken.getDataMerge (data)->
									if _type = linq.From(data).SingleOrDefault(undefined, (x)->x.Type is type)
										if _id = linq.From(_type.Ids).SingleOrDefault(undefined, (x)->x.Key is id)
											if parameterGroup = linq.From(_id.ParameterGroups).SingleOrDefault(undefined, (x)->x.Name is x.Name is myKey)
												if typeof(parameterGroup.Value) isnt 'string'
													if !single
														listenToken.data ko.utils.arrayMap parameterGroup.Value, (data)->
															if listenToken.mixin
																listenToken.mixin data
															else
																data

													else
														data = linq.From(parameterGroup.Value).SingleOrDefault undefined
														if data and listenToken.mixin
															data = listenToken.mixin data
														listenToken.data data
												

								listenToken.getRetrieveRequest (requests)->
									typeRequest = linq.From(requests).SingleOrDefault undefined, (x)->x.type is type
									if !typeRequest
										typeRequest = 
											ids:[]
											type:type
										requests.push typeRequest
									idRequest = linq.From(typeRequest.ids).SingleOrDefault undefined, (x)->x.Id is id
									if !idRequest
										idRequest = 
											Id:id
											ParameterGroups:[]
										typeRequest.ids.push idRequest
									parameterGroup = linq.From(idRequest.ParameterGroups).SingleOrDefault undefined, (x)->x.Name is myKey
									if !parameterGroup
										parameterGroup = 
											Name:myKey
											Parameters:[]
									idRequest.ParameterGroups.push parameterGroup
									parameterGroup.Parameters
								listenToken.modifyRetrieveRequest (parameters)->
									parameters.push
										Name:"id"
										Id:'id'
										Values:[
											Name:'id'
											Value:id
										]
								listenToken
							listen:(token)->
								listener.listen token
							unlisten:(token)->
								listener.unlisten token
							extend:=>
								mixin:{}
								page:
									listener:listener
								order:
									entityType:->conceptualModel.entities[type]
								filter:
									entityType:->conceptualModel.entities[type]
								title:{}
								#idPush:{}
								extendListenToken:{}
								selectMany:
									listener:listener
									manyObservable:@manyObservable
									entityType:->conceptualModel.entities[type]
					ret.base()()

			@create=(key,model)=>
				deferred= Q.defer()
				
				require ["retriever","listener"], (retriever,listener)=>
					@modelExtensions[key]= new ObservableExtensions model, retriever.getMe(),listener.getMe()
					deferred.resolve()
				
				deferred.promise


	getMe:->ObservableExtensions
	initMe:->
		ObservableExtensions.modelExtensions={}
		Q()