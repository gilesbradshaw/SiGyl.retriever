# CoffeeScript
define [
	"jquery"
	"knockout"
	"Q"
	"b64"
	"linq"
	"breeze"
	"store"
	"utils"
	"source"
	"rx.binding"
],($,ko,Q,b64,linq,breeze,Store,utils, source,rx) ->


	getMetaData=(url)->
		getMetaDataDeferred= Q.defer()
		manager = new breeze.EntityManager url
		metadataFetch = manager.fetchMetadata()
		metadataFetch.done (metadata)->
			getMetaDataDeferred.resolve
				key:metadata.schema.entityContainer.name
				manager:manager
				metadata:metadata
		metadataFetch.catch ()->
			getMetaDataDeferred.reject()
		getMetaDataDeferred.promise

	deferred =undefined

	retrieveSubjects=undefined
	initMe:(metadataUrls)->
		retrieveSubjects={}
		entityManagers = Q.all linq.From(metadataUrls).Select((url)->getMetaData url).ToArray() 
		deferred = 	entityManagers.then (managers)->
			creates=[]
			for manager in managers
				manager.store = new (Store.getMe()) utils.getMe().processModel manager.metadata.schema
				manager.executingQueries={}
			Q.all(creates).then ()->
				source.initMe().then ()->
					source.getMe().on "change", (id,type,data)->
						typeManager = breezeRetriever.getType type.split('.')[0]
						if type.split('.').length>1
							typeManager= typeManager.collectionManager type.split('.')[1]
						if typeManager.entityType.data[data.Id]
							if b64.compare ko.utils.unwrapObservable(data.Timestamp), ko.utils.unwrapObservable(typeManager.entityType.data[data.Id].Timestamp)
								return
						entType = typeManager.breezeEntityType
						newData = entType.createEntity data
						attachedEntity = typeManager.manager.attachEntity newData, breeze.EntityState.Unchanged,breeze.MergeStrategy.OverwriteChanges
						changed = breezeRetriever.getStore(type.split('.')[0]).changeData(id,type,newData)
						if changed
							if type.split('.').length==2
								subject = "#{type.split('.')[0]}:.#{type.split('.')[1]}:#{id}"
							else
								subject ="#{type}:.:#{id}"
							if retrieveSubjects[subject]
								retrieveSubjects[subject].observer.onNext 
									changed:changed.value
					source.getMe().on "delete", (id,type,data)->
						toDelete = breezeRetriever.getStore(type.split('.')[0]).deleteData id,type,data
						
					getManager=(type)->
						linq.From(managers).Single((m)-> linq.From(m.metadata.schema.entityContainer.entitySet).SingleOrDefault(undefined,(eset)-> eset.entityType is "Self.#{type}"))
					getTypeManager=(manager,entityType,query,entityContainer)->
						breezeEntityType:manager.manager.metadataStore.getEntityType entityType.name
						manager:manager.manager
						namespace:manager.metadata.schema.namespace
						entityContainer:entityContainer
						query:query
						executeQuery:(query)->
							queryUri=  query._toUri manager.manager.metadataStore
							manager.executingQueries[queryUri] or = manager.manager.executeQuery(query).then (retrievedData)->
								delete manager.executingQueries[queryUri]
								$.extend retrievedData,
									storedResults:retrievedData.results.map (r)-> manager.store.mergeData entityType.name, r
						entityType:entityType
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
							entityType=linq.From(manager.metadata.schema.entityType).Single((et)->et.name==type)
							entityContainer= linq.From(manager.metadata.schema.entityContainer.entitySet).Single((eset)-> eset.entityType is "Self.#{type}").name
							$.extend getTypeManager(manager,entityType,(()->breeze.EntityQuery.from(entityContainer)),entityContainer),
								subscriptionDefinition:(item)->"#{entityType.name}:.:#{item.Id()}"
								collectionManager:(collection)->
									dependent= utils.getMe().getDependent entityType, collection
									collectionEntityContainer= linq.From(manager.metadata.schema.entityContainer.entitySet).Single((eset)-> eset.entityType.split('.')[1] is dependent.type())
									collectionEntityType = entityType.model.entityTypes[collectionEntityContainer.entityType.split('.')[1]]
									query=(id)->
										q= breeze.EntityQuery.from(collectionEntityContainer.name).inlineCount().where dependent.id(), '==', id
										q=q.where dependent.id(), '==', id
										q
									$.extend getTypeManager(manager,collectionEntityType,query,collectionEntityContainer),
										subscriptionDefinition:(item)->"#{entityType.name}:.#{collection}:#{item.Id()}"
									
								singleManager:(single)->
									principal= utils.getMe().getPrincipal entityType, single
									dependent= utils.getMe().getDependent entityType, single
									singleEntityContainer= linq.From(manager.metadata.schema.entityContainer.entitySet).Single((eset)-> eset.entityType.split('.')[1] is principal.type())
									entityType=entityType.model.entityTypes[singleEntityContainer.entityType.split('.')[1]]
									query=(item)->breeze.EntityQuery.from(singleEntityContainer.name).inlineCount().where "Id", '==', item[dependent.id()]()
									$.extend getTypeManager(manager,entityType,query,singleEntityContainer),
										subscriptionDefinition:(item)->"#{entityType.name}:.:#{item[dependent.id()]()}"

						#getCollectionType:(type)->
						#	manager = getManager type
						
						#	entityType = linq.From(manager.metadata.schema.entityType).Single((et)->et.name==type)
						#	manager:manager.manager
						#	entityType:entityType
						#	collectionManager:(collection)->
						#		dependent= utils.getMe().getDependent entityType, collection
						#		collectionEntityContainer = linq.From(manager.metadata.schema.entityContainer.entitySet).Single((eset)-> eset.entityType.split('.')[1] is dependent.type()).name
						#		query:(id)->breeze.EntityQuery.from(collectionEntityContainer).inlineCount().where dependent.id(), '==', id
				
		
	getMe:->
		deferred
		
