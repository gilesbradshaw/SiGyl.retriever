# CoffeeScript
define [
	"Q"
	"linq"
	"breeze"
	"store"
	"observableExtensions"
	"utils"
],(Q,linq,breeze,Store,ObservableExtensions,utils) ->


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
	
	initMe:(metaDataUrls)->
		ObservableExtensions.initMe()
		deferred= Q.defer()
		entityManagers = Q.all linq.From(metaDataUrls).Select((url)->getMetaData url).ToArray() 
		entityManagers.done (managers)->
			creates=[]
			for manager in managers
				manager.store = new (Store.getMe()) utils.getMe().processModel manager.metaData.schema
				creates.push ObservableExtensions.getMe().create manager.metaData.schema.entityContainer.name, manager.metaData.schema
			Q.all(creates).done ()->
				getManager=(type)->
					linq.From(managers).Single((m)-> linq.From(m.metaData.schema.entityContainer.entitySet).SingleOrDefault(undefined,(eset)-> eset.entityType is "Self.#{type}"))
				deferred.resolve
					getStore:(type)->
						getManager(type).store
					getType:(type)->
						manager = getManager type
						entityContainer= linq.From(manager.metaData.schema.entityContainer.entitySet).Single((eset)-> eset.entityType is "Self.#{type}").name
						entityContainer:entityContainer
						query:breeze.EntityQuery.from entityContainer
						manager:manager.manager
					getCollectionType:(type)->
						manager = getManager type
						entityType = linq.From(manager.metaData.schema.entityType).Single((et)->et.name==type)
						manager:manager.manager
						entityType:entityType
						collectionManager:(collection)->
							dependent= utils.getMe().getDependent entityType, collection
							collectionEntityContainer = linq.From(manager.metaData.schema.entityContainer.entitySet).Single((eset)-> eset.entityType.split('.')[1] is dependent.type()).name
							query:(id)->breeze.EntityQuery.from(collectionEntityContainer).inlineCount().where dependent.id(), '==', id

		entityManagers.catch ()->
			deferred.reject()
	getMe:->
		deferred.promise
		
