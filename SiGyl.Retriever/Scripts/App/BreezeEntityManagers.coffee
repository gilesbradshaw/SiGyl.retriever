# CoffeeScript
define [
	"Q"
	"linq"
	"breeze"
	"store"
	"utils"
	"source"
	"rx.binding"
],(Q,linq,breeze,Store,utils, source,rx) ->


	getMetaData=(url)->
		getMetaDataDeferred= Q.defer()
		manager = new breeze.EntityManager url
		metaDataFetch = manager.fetchMetadata()
		metaDataFetch.done (metaData)->
			getMetaDataDeferred.resolve
				key:metaData.schema.entityContainer.name
				manager:manager
				metaData:metaData
		metaDataFetch.catch ()->
			getMetaDataDeferred.reject()
		getMetaDataDeferred.promise

	deferred =undefined

	retrieveSubjects=undefined
	initMe:(metaDataUrls)->
		retrieveSubjects={}
		entityManagers = Q.all linq.From(metaDataUrls).Select((url)->getMetaData url).ToArray() 
		deferred = 	entityManagers.then (managers)->
			creates=[]
			for manager in managers
				manager.store = new (Store.getMe()) utils.getMe().processModel manager.metaData.schema
				#creates.push ObservableExtensions.getMe().create manager.metaData.schema.entityContainer.name, manager.metaData.schema
				
			Q.all(creates).then ()->
				source.initMe().then ()->
					source.getMe().on "change", (id,type,data)->
						changed = breezeRetriever.getStore(type.split('.')[0]).changeData(id,type,data).done 
						if changed && retrieveSubjects["#{type}:.:#{id}"]
							retrieveSubjects["#{type}:.:#{id}"].observer.onNext changed.value
					source.getMe().on "delete", (id,type,data)->
						toDelete = breezeRetriever.getStore(type.split('.')[0]).deleteData id,type,data
						
					getManager=(type)->
						linq.From(managers).Single((m)-> linq.From(m.metaData.schema.entityContainer.entitySet).SingleOrDefault(undefined,(eset)-> eset.entityType is "Self.#{type}"))
					breezeRetriever=
						subscriber:(subscriptionDefinition)->
							if !retrieveSubjects[subscriptionDefinition]
								subject=rx.Observable.create (observer)->
									retrieveSubjects[subscriptionDefinition].observer = observer
									()-> 
										delete retrieveSubjects[subscriptionDefinition]
										source.getMe().invoke( 
											"NewLeave"
											subscriptionDefinition
										)
				
								retrieveSubjects[subscriptionDefinition] = 
									subject:subject
									share: subject.share()
									subscriptionDeferred: Q.defer()
								source.getMe().invoke( 
									"NewJoin"
									subscriptionDefinition
								).done(()->
									if retrieveSubjects[subscriptionDefinition]
										retrieveSubjects[subscriptionDefinition].subscriptionDeferred.resolve ()->retrieveSubjects[subscriptionDefinition].share
								).fail (err)->
									if retrieveSubjects[subscriptionDefinition]
										retrieveSubjects[subscriptionDefinition].subscriptionDeferred.reject err
				
							retrieveSubjects[subscriptionDefinition].subscriptionDeferred.promise
						getStore:(type)->
							getManager(type).store
						getType:(type)->
							
							manager = getManager type
							entityType=linq.From(manager.metaData.schema.entityType).Single((et)->et.name==type)
							entityContainer= linq.From(manager.metaData.schema.entityContainer.entitySet).Single((eset)-> eset.entityType is "Self.#{type}").name
							entityContainer:entityContainer
							query:breeze.EntityQuery.from entityContainer
							executeQuery:(query)->manager.manager.executeQuery(query)
							manager:manager.manager
							store:manager.store
							entityType:entityType
							collectionManager:(collection)->
								dependent= utils.getMe().getDependent entityType, collection
								collectionEntityContainer= linq.From(manager.metaData.schema.entityContainer.entitySet).Single((eset)-> eset.entityType.split('.')[1] is dependent.type())
								entityType:entityType.model.entityTypes[collectionEntityContainer.entityType.split('.')[1]]
								entityContainer:collectionEntityContainer.name
								query:(id)->breeze.EntityQuery.from(collectionEntityContainer.name).inlineCount().where dependent.id(), '==', id
							singleManager:(single)->
								principal= utils.getMe().getPrincipal entityType, single
								singleEntityContainer= linq.From(manager.metaData.schema.entityContainer.entitySet).Single((eset)-> eset.entityType.split('.')[1] is principal.type())
								entityType:entityType.model.entityTypes[singleEntityContainer.entityType.split('.')[1]]
								entityContainer:singleEntityContainer.name
								query:(item)->breeze.EntityQuery.from(singleEntityContainer.name).inlineCount().where "Id", '==', item[principal.id()]()
						getCollectionType:(type)->
							manager = getManager type
							entityType = linq.From(manager.metaData.schema.entityType).Single((et)->et.name==type)
							manager:manager.manager
							entityType:entityType
							collectionManager:(collection)->
								dependent= utils.getMe().getDependent entityType, collection
								collectionEntityContainer = linq.From(manager.metaData.schema.entityContainer.entitySet).Single((eset)-> eset.entityType.split('.')[1] is dependent.type()).name
								query:(id)->breeze.EntityQuery.from(collectionEntityContainer).inlineCount().where dependent.id(), '==', id
				
		
	getMe:->
		deferred
		
