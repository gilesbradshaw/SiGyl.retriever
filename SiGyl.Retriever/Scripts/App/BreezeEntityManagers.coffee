# CoffeeScript
define [
	"Q"
	"linq"
	"breeze"
],(Q,linq,breeze) ->

	getMetaData=(conceptualModelName)->
		getMetaDataDeferred= Q.defer()
		serviceName = "http://localhost:41374/breeze/#{conceptualModelName}"
		manager = new breeze.EntityManager serviceName
		metaDataFetch = manager.fetchMetadata()
		metaDataFetch.done (metaData)->
			getMetaDataDeferred.resolve
				manager:manager
				metaData:metaData
		metaDataFetch.catch ()->
			getMetaDataDeferred.reject()
		getMetaDataDeferred.promise

	deferred = Q.defer()
	entityManagers = Q.all [
		getMetaData "configuration"
		getMetaData "runtime"
		getMetaData "history"
	]

	entityManagers.done (managers)->
		deferred.resolve
			getType:(type)->
				manager = linq.From(managers).Single((m)-> linq.From(m.metaData.schema.entityContainer.entitySet).SingleOrDefault(undefined,(eset)-> eset.entityType is "Self.#{type}"))
				entityContainer= linq.From(manager.metaData.schema.entityContainer.entitySet).Single((eset)-> eset.entityType is "Self.#{type}").name
				entityContainer:entityContainer
				query:breeze.EntityQuery.from entityContainer
				manager:manager.manager
			getCollectionType:(type)->
				manager = linq.From(managers).Single((m)-> linq.From(m.metaData.schema.entityContainer.entitySet).SingleOrDefault(undefined,(eset)-> eset.entityType is "Self.#{type}"))
				entityType = linq.From(manager.metaData.schema.entityType).Single((et)->et.name==type)
				manager:manager.manager
				entityType:entityType
				collectionManager:(collection)->
					navigationProperty= linq.From(entityType.navigationProperty).Single((np)->np.name is collection)
					relationship = navigationProperty.relationship.split('.')[1]
					association=linq.From(manager.metaData.schema.association).Single((a)->a.name== relationship)
					dependentReferentialConstraint= association.referentialConstraint.dependent
					dependentId = dependentReferentialConstraint.propertyRef.name
					dependentEnd= linq.From(association.end).Single((e)->e.role == dependentReferentialConstraint.role)
					collectionEntityContainer = linq.From(manager.metaData.schema.entityContainer.entitySet).Single((eset)-> eset.entityType.split('.')[1] is dependentEnd.type.split('.')[2]).name
					query:(id)->breeze.EntityQuery.from(collectionEntityContainer).inlineCount().where dependentId, '==', id

	entityManagers.catch ()->
		deferred.reject()
			
	deferred.promise
		
