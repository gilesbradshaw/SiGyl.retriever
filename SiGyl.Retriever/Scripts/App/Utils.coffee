# CoffeeScript
define ["linq","Q"],(linq,Q)->
	utils=
		process:(object, func)->
			if object 
				if object.length isnt undefined
					for o in object
						func o
				else
					func object
		processModel:(conceptualModel)->
			conceptualModel.entityTypes={}
			utils.process conceptualModel.entityType, (entityType)->
				entityType.model = conceptualModel
				entityType.data = {}
				conceptualModel.entityTypes[entityType.name]= entityType
				entityType.navigationProperties={}
				utils.process entityType.navigationProperty, (navigationProperty)->
					entityType.navigationProperties[navigationProperty.name] = navigationProperty

			conceptualModel.associations={}
			utils.process conceptualModel.association, (association)->
				conceptualModel.associations[association.name] = association
			conceptualModel
		getPrincipal:(entityType, property)->
			navigationProperty= entityType.navigationProperties[property]
			relationship = navigationProperty.relationship.split('.')[1]
			association=entityType.model.associations[relationship]
			referentialConstraint= association.referentialConstraint.principal
			ret=
				id:()->referentialConstraint.propertyRef.name
				end:()->linq.From(association.end).Single((e)->e.role == referentialConstraint.role)
				type:()->ret.end().type.split('.')[2]
				entityType:()->entityType.model.entityTypes[ret.type()]

		getDependent:(entityType, property)->
			navigationProperty= entityType.navigationProperties[property]
			relationship = navigationProperty.relationship.split('.')[1]
			association=entityType.model.associations[relationship]
			referentialConstraint= association.referentialConstraint.dependent
			ret=
				id:()->referentialConstraint.propertyRef.name
				end:()->linq.From(association.end).Single((e)->e.role == referentialConstraint.role)
				type:()->ret.end().type.split('.')[2]
				entityType:()->entityType.model.entityTypes[ret.type()]
	initMe:->Q()
	getMe:->utils
				