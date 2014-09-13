
define [
	"Q"
	"linq"
	"breeze"
	"knockout"
],(Q,linq,breeze,ko) ->

		
	(conceptualModelName)->

		serviceName = "http://localhost:41374/breeze/#{conceptualModelName}"
		manager = new breeze.EntityManager serviceName
		metaDataFetch = manager.fetchMetadata()

		get:(joins)->
			deferred = Q.defer()

			metaDataFetch.done (metaData)->
				retrieves = Q.all linq.From(joins).Select( (join)->
					retrieveDeferred = Q.defer()
					entityContainer = linq.From(metaData.schema.entityContainer.entitySet).Single((eset)-> eset.entityType is "Self.#{join.type}").name
					query= breeze.EntityQuery.from entityContainer
					conditions = linq.From(join.ids).Select((id)->breeze.Predicate.create("Id", "==", id.Id)).ToArray()
					query= query.where breeze.Predicate.or conditions
					eq=manager.executeQuery query

					eq.done (d)->
						retrieveDeferred.resolve
							Type:join.type
							Ids:linq.From(d.results).Select((r)->
								Key:r.Id()
								ParameterGroups:linq.From(linq.From(join.ids).Single((id)->id.Id.toString()==r.Id().toString()).ParameterGroups).Select((pg)->
									Name:pg.Name
									Value:[r]
								).ToArray()
							).ToArray()
						
					eq.catch ()->
						retrieveDeferred.reject()

					retrieveDeferred.promise
				).ToArray()

				retrieves.done (data)->
					deferred.resolve data
				retrieves.catch ()->
					deferred.reject()
			deferred.promise
		getCollection:(collections)->
			deferred = Q.defer()
			metaDataFetch.done (metaData)->
				retrieves = Q.all linq.From(collections).Select( (type)->
					retrieveDeferred = Q.defer()
					entityType = linq.From(metaData.schema.entityType).Single((et)->et.name==type.type)
					collectionFetches = Q.all linq.From(type.collections).Select((collection)->
						collectionDeferred = Q.defer()
						navigationProperty= linq.From(entityType.navigationProperty).Single((np)->np.name is collection.collection)
						relationship = navigationProperty.relationship.split('.')[1]
						association=linq.From(metaData.schema.association).Single((a)->a.name== relationship)
						dependentReferentialConstraint= association.referentialConstraint.dependent
						dependentId = dependentReferentialConstraint.propertyRef.name
						dependentEnd= linq.From(association.end).Single((e)->e.role == dependentReferentialConstraint.role)
						collectionEntityContainer = linq.From(metaData.schema.entityContainer.entitySet).Single((eset)-> eset.entityType.split('.')[1] is dependentEnd.type.split('.')[2]).name
						collectionFetchIds= Q.all linq.From(collection.ids).Select((collectionFetchId)->
							collectionFetchIdDeferred= Q.defer()
							parameterGroups= Q.all linq.From(collectionFetchId.ParameterGroups).Select((parameterGroup)->
								parameterGroupDeferred = Q.defer()
								query= breeze.EntityQuery.from(collectionEntityContainer).inlineCount().where dependentId, '==', collectionFetchId.Id
								
								for parameter in linq.From(parameterGroup.Parameters).Where((p)->p.Name=='filter').ToArray()
									
									property = linq.From(parameter.Values).Single((pv)->pv.Name=='property').Value
									operator = linq.From(parameter.Values).Single((pv)->pv.Name=='operator').Value
									value = linq.From(parameter.Values).Single((pv)->pv.Name=='value').Value
									query=query.where property, operator, value
								for parameter in linq.From(parameterGroup.Parameters).Where((p)->p.Name=='order').ToArray()
									if linq.From(parameter.Values).Any((pv)->pv.Name=='isDescending' && pv.Value)
										orderName = "orderByDesc"
									else
										orderName= "orderBy"
									propertyName = linq.From(parameter.Values).Single((pv)->pv.Name=='propertyName').Value
									query=query[orderName] propertyName
								for parameter in linq.From(parameterGroup.Parameters).Where((p)->p.Name=='page').ToArray()
									page = linq.From(parameter.Values).Single((pv)->pv.Name=='page').Value
									query=query.skip(page*10).take 10
								manager.executeQuery(query).catch(()->parameterGroupDeferred.reject()).done (x)->
									parameterGroupDeferred.resolve
										Name:parameterGroup.Name
										Collection:
											data:x.results
											metaData:
												count:x.inlineCount

								parameterGroupDeferred.promise
							).ToArray()
							parameterGroups.catch(()->collectionFetchIdDeferred.reject()).done (x)->
								collectionFetchIdDeferred.resolve
									Key:collectionFetchId.Id
									ParameterGroups:x
							collectionFetchIdDeferred.promise
						).ToArray()
						collectionFetchIds.catch(()->collectionDeferred.reject()).done (x)->
							collectionDeferred.resolve
								Collection:collection.collection
								Ids:x
						collectionDeferred.promise
					).ToArray()
					collectionFetches.catch(()->retrieveDeferred.reject()).done (x)->
						retrieveDeferred.resolve 
							Type:type.type
							Collections:x
					retrieveDeferred.promise
				).ToArray()
				retrieves.done (data)->
					deferred.resolve data
				retrieves.catch ()->
					deferred.reject()
			deferred.promise
		
	