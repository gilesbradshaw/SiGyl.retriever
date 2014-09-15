
define [
	"jquery"
	"knockout"
	"listenToken"
	"observableExtensions.extender"
	"linq"
],($,ko,ListenToken,ext,linq) ->

	getDate= (x)->
		if !x 
			new Date(Date.parse('1/1/2200'))
		else
			if typeof x is 'string'
				new Date(Date.parse(x.split('.')[0]))
			else
				x
	updatePagerInfo=(myPagerInfo,name,_operator,_property,_value)->
		myPagerInfo.currentOperator _operator() or ext.getMyFilterValue myPagerInfo, "filter", name, "operator"
		myPagerInfo.currentProperty _property() or ext.getMyFilterValue myPagerInfo, "filter", name, "property"
		myPagerInfo.currentValue _value() or ext.getMyFilterValue myPagerInfo, "filter", name, "value"

		Name:"filter"
		Id:name
		Values:[
			Name:'property'
			Value:myPagerInfo.currentProperty()
		,
			Name:'operator'
			Value:myPagerInfo.currentOperator()
		,
			Name:'value'
			Value:myPagerInfo.currentValue()

		]

	ko.extenders.filter=(target, options)->
		target.filter=(name, initialiser)->
			_property=ko.observable()
			_operator=ko.observable()
			_value=ko.observable()
			entityType=options.entityType()
			lt=undefined

			myPagerInfo=undefined
			oldAddPagerInfo=target._addPagerInfo
			target._addPagerInfo=(filter)->
				if oldAddPagerInfo
					oldAddPagerInfo(filter)
			

				myPagerInfo = ext.getMyPagerInfo target,"filter",name
				myPagerInfo.operator=ko.observable()
				myPagerInfo.currentOperator=ko.observable()
				myPagerInfo.property=ko.observable()
				myPagerInfo.currentProperty=ko.observable()
				myPagerInfo.value=ko.observable()
				myPagerInfo.currentValue=ko.observable()

				myPagerInfo.properties = $.Enumerable.From(entityType.properties).Select((x)->x.name).ToArray()
				if myPagerInfo.filter
					myPagerInfo.set=()->
							filter @
							lt.listen()
							lt.cycle()
					myPagerInfo.operator (ext.getMyFilterValue myPagerInfo, "filter", name, "operator")
					myPagerInfo.currentOperator (ext.getMyFilterValue myPagerInfo, "filter", name, "operator")
					myPagerInfo.property (ext.getMyFilterValue myPagerInfo, "filter", name, "property")
					myPagerInfo.currentProperty (ext.getMyFilterValue myPagerInfo, "filter", name, "property")
					myPagerInfo.value (ext.getMyFilterValue myPagerInfo, "filter", name, "value")
					myPagerInfo.currentValue (ext.getMyFilterValue myPagerInfo, "filter", name, "value")
					myPagerInfo.values=ko.pureComputed ()->
						if myPagerInfo.property()
							thisProperty= $.Enumerable.From(entityType.properties).Single (x)->x.name is myPagerInfo.property()
							thisProperty.Values
					myPagerInfo.operators = ko.pureComputed ()->
			
						if myPagerInfo.values()
							[
								'=='
								'!='
							]
						else
							[
								'>'
								'>='
								'=='
								'<='
								'<'
								'!='
							]

					myPagerInfo.url = ko.pureComputed( 
						-> ext.getMyFilterUrl(myPagerInfo.filter,'filter',name,
							property:myPagerInfo.property()
							operator:myPagerInfo.operator()
							value:myPagerInfo.value()
						)
					)
				myPagerInfo.isVisible !_property()
			target._addPagerInfo.source="filter"

			valueSubscriber=undefined
			oldOnDisposed = target._onDisposed
			target._onDisposed = ()->
				if oldOnDisposed
					oldOnDisposed()
				if valueSubscriber
					valueSubscriber.dispose()


			lt=undefined
			if initialiser
				initialiser target
			target._extendListenToken (extended)-> 
				->
					lt= extended()
					oldCanAddData = lt.canAddData
					lt.canAddData = (addData, completeData)->
						if oldCanAddData addData, completeData
							property = _property() || ext.getMyFilterValue myPagerInfo, "filter", name, "property"
							operator = _operator() || ext.getMyFilterValue myPagerInfo, "filter", name, "operator"
							value = _value() || ext.getMyFilterValue myPagerInfo, "filter", name, "value"
							if property
								type = $.Enumerable.From(entityType.properties).Single((x)->x.name is property).clrType
								if type is 'DateTime'
									if addData.value[property]()
										propertyValue= getDate addData.value[property]()
									if value
										value=getDate value
								else
									propertyValue=addData.value[property]()

								if typeof(propertyValue) is "number"
									value = Number value
								if typeof(propertyValue) is "boolean"
									value = value is true or value is "true"
								if value is null
									value=undefined
								if propertyValue is null
									propertyValue=undefined
								if !((!value && type is 'DateTime' && (operator is "<=" or operator is "<")) or  switch operator
									when '>' then propertyValue > value
									when '>=' then propertyValue >= value
									when '==' then propertyValue == value
									when '<=' then propertyValue <= value
									when '<' then propertyValue < value
									when '!=' then propertyValue != value)
										completeData.splice completeData.indexOf(addData.value),1
										return false
							return true
								

					oldmod = lt._modifyRetrieveRequest
					#DRY!
					lt._modifyRetrieveRequest = (parameters)->
						if oldmod
							oldmod parameters
						
						parameters.push updatePagerInfo myPagerInfo,name,_operator,_property,_value
					oldcmod = lt._modifyCollectionRetrieveRequest
					lt._modifyCollectionRetrieveRequest = (parameters)->
						if oldcmod
							oldcmod parameters
						parameters.push updatePagerInfo myPagerInfo,name,_operator,_property,_value
					lt
			
			(property,operator,value)->
				_property ko.utils.unwrapObservable property
				_operator ko.utils.unwrapObservable operator
				_value ko.utils.unwrapObservable value
				if ko.isObservable value
					valueSubscriber = value.subscribe (x)->
						_value x
						if lt
							lt.listen()
				
				target
		target