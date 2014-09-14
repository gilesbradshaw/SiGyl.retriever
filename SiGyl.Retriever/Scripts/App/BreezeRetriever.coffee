
define [
	"Q"
	"linq"
	"breeze"
	"knockout"
	"breezeEntityManagers"
],(Q,linq,breeze,ko,breezeEntityManagers) ->

	

	get:(joins)->
		deferred = Q.defer()
		breezeEntityManagers.done (managers)->
			retrieves = Q.all linq.From(joins).Select( (join)->
				retrieveDeferred = Q.defer()
				entityManager=managers.getType join.type
				query= entityManager.query
				conditions = linq.From(join.ids).Select((id)->breeze.Predicate.create("Id", "==", id.Id)).ToArray()
				query= query.where breeze.Predicate.or conditions
				eq=entityManager.manager.executeQuery query

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
		breezeEntityManagers.done (managers)->
			retrieves = Q.all linq.From(collections).Select( (type)->
				retrieveDeferred = Q.defer()
				entityManager=managers.getCollectionType type.type
				collectionFetches = Q.all linq.From(type.collections).Select((collection)->
					collectionDeferred = Q.defer()
					collectionManager=entityManager.collectionManager collection.collection
					collectionFetchIds= Q.all linq.From(collection.ids).Select((collectionFetchId)->
						collectionFetchIdDeferred= Q.defer()
						query= collectionManager.query collectionFetchId.Id
						parameterGroups= Q.all linq.From(collectionFetchId.ParameterGroups).Select((parameterGroup)->
							parameterGroupDeferred = Q.defer()
								
								
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
							entityManager.manager.executeQuery(query).catch(()->parameterGroupDeferred.reject()).done (x)->
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
		
	