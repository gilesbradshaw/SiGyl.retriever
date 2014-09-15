﻿# CoffeeScript
define [
	"Q"
	"linq"
	"breeze"
	"store"
	"observableExtensions"
],(Q,linq,breeze,Store,ObservableExtensions) ->


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
				manager.store = new Store manager.metaData.schema
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
							navigationProperty= entityType.navigationProperties[collection]
							relationship = navigationProperty.relationship.split('.')[1]
							association=linq.From(manager.metaData.schema.association).Single((a)->a.name== relationship)
							dependentReferentialConstraint= association.referentialConstraint.dependent
							dependentId = dependentReferentialConstraint.propertyRef.name
							dependentEnd= linq.From(association.end).Single((e)->e.role == dependentReferentialConstraint.role)
							collectionEntityContainer = linq.From(manager.metaData.schema.entityContainer.entitySet).Single((eset)-> eset.entityType.split('.')[1] is dependentEnd.type.split('.')[2]).name
							query:(id)->breeze.EntityQuery.from(collectionEntityContainer).inlineCount().where dependentId, '==', id

		entityManagers.catch ()->
			deferred.reject()
	getMe:->
		deferred.promise
		
