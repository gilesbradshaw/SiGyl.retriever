
define [
	"knockout"
	"b64"
	"linq"
	"observableExtensions"
],(ko,b64,linq,observableExtensionsMain) ->




	process=(object, func)->
		if object 
			if object.length isnt undefined
				for o in object
					func o
			else
				func object
	collectionType=(conceptualModel,entityType,collection)->
		collectionNavigationProperty = linq.From(entityType.navigationProperties).SingleOrDefault((x)->x.Key==collection).Value
		association=conceptualModel.associations[collectionNavigationProperty.relationship.split('.')[1]]
		toEnd= linq.From(association.end).Single((e)->e.role is collectionNavigationProperty.toRole)
		conceptualModel.entityTypes[toEnd.type.split('.')[2]]
	updateEntity=(entityType, from, _to)->
		process entityType.property, (property)=>
			if (property.name of from)
				if ko.isObservable _to[property.name]
					_to[property.name] ko.utils.unwrapObservable from[property.name]
				else
					_to[property.name] = from[property.name]
		_to

	getKey = (entityType,from)->
		#assuming only one key!
		ko.utils.unwrapObservable from[entityType.key.propertyRef.name]



	newEntity=(from, model,entityType,modelExtensions)->

		ret = {}
		for property in entityType.property
			ret[property.name] = from[property.name]
			
		#if entityType.flexibleRelations
		process entityType.flexibleRelations, (flexibleRelation)->
			ret[flexibleRelation.name] = modelExtensions[model.entityContainer.name].flexibleRelationObservable ret, flexibleRelation.name, entityType
		process entityType.interModelRelations, (interModelRelation)->
			ret[interModelRelation.name] = modelExtensions[model.entityContainer.name].interModelRelationObservable ret, interModelRelation.name, entityType
		process entityType.navigationProperty, (navigationProperty)->
			association=model.associations[navigationProperty.relationship.split('.')[1]]
			toEnd= linq.From(association.end).Single((e)->e.role is navigationProperty.toRole)
			if toEnd.multiplicity is "*"
				ret[navigationProperty.name] = modelExtensions[model.entityContainer.name].manyObservable ret, entityType.name, navigationProperty.name, entityType
				ret[navigationProperty.name]._navigationProperty  = ((p)->()->p)(navigationProperty)
			else
				ret[navigationProperty.name] = modelExtensions[model.entityContainer.name].singleObservable ret, navigationProperty.name, entityType
		#this is a bit of a frig
		if entityType.histories
			ret._histories ={}
			for history in entityType.histories
				ret._histories[history.name] = modelExtensions.history.rootObservable getKey(entityType,from), history.name, true
		#so is this
		if entityType.Of
			ret._runtime = modelExtensions.runtime.rootObservable from.RuntimeId, entityType.Of, true
		ret.__conceptualModel=->model
		ret.__entityType=->entityType
		ret

	class Store

		constructor:(conceptualModel)->
			modelExtensions=observableExtensionsMain.getMe().modelExtensions
			conceptualModel.entityTypes={}
			process conceptualModel.entityType, (entityType)->
				entityType.model = conceptualModel
				entityType.data = {}
				conceptualModel.entityTypes[entityType.name]= entityType
				entityType.navigationProperties={}
				process entityType.navigationProperty, (navigationProperty)->
					entityType.navigationProperties[navigationProperty.name] = navigationProperty

			conceptualModel.associations={}
			process conceptualModel.association, (association)->
				conceptualModel.associations[association.name] = association
				


			@mergeData=(type,data)=>
				
				entityType = conceptualModel.entityTypes[type]
				mergeKey = getKey entityType, data
				currentValue = entityType.data[mergeKey] || (entityType.data[mergeKey] = newEntity(data,conceptualModel,entityType, modelExtensions))
				return currentValue
				
				for type in data
					entity = conceptualModel.entities[type.Type]
					if entity
						for id in type.Ids
							#?why would there be more than one parameter groups?  same data twice
							for parameterGroup in id.ParameterGroups
								if typeof(parameterGroup.Value) isnt 'string'
									result=[]
									for value in parameterGroup.Value
										key = getKey entity, value
										currentValue = entity.data[key] || (entity.data[key] = newEntity(value,conceptualModel,entity,@modelExtensions))
										if !b64.compare value.Timestamp, currentValue.Timestamp()
											updateEntity entity, value, currentValue
											result.push currentValue
									parameterGroup.Value = result
						for collection in type.Collections
							collectionEntityName = $.Enumerable.From(entity.navigationProperties).Single((x)->x.name==collection.Collection).to.type
							collectionEntity = conceptualModel.entities[collectionEntityName]
							for id in collection.Ids
								for parameterGroup in id.ParameterGroups
									result=[]
									for value in parameterGroup.Collection.data
										key = getKey collectionEntity, value
										currentValue = collectionEntity.data[key] || (collectionEntity.data[key] = newEntity(value,conceptualModel,collectionEntity,@modelExtensions))
										if !b64.compare value.Timestamp, currentValue.Timestamp()
											updateEntity collectionEntity, value, currentValue
										result.push currentValue
									parameterGroup.Collection.data = result
				data
			@changeData=(id,type,value)=>
				
				entityType = conceptualModel.entityTypes[type.split('.')[0]]
				if entityType
					if type.split('.').length is 2
						entityType = collectionType conceptualModel, entityType, type.split('.')[1]
					key = getKey entityType, value
					currentValue = entityType.data[key] || (entityType.data[key] = newEntity(value,conceptualModel,entityType,modelExtensions))
					if !b64.compare ko.utils.unwrapObservable(value.Timestamp), ko.utils.unwrapObservable(currentValue.Timestamp)
						updateEntity entityType, value, currentValue
					id:id
					type:type
					value:currentValue
					
				

			@deleteData=(id,type,value)->

				entityType = conceptualModel.entityTypes[type.split('.')[0]]
				if entityType
					if type.split('.').length is 2
						entityType = collectionType conceptualModel, entityType, type.split('.')[1]
						
					
					key = getKey entityType, value
					currentValue = entityType.data[key] 
					delete entityType.data[key]

					id:id
					type:type
					value:currentValue
					
				