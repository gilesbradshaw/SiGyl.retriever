
define [
	"jquery"
	"knockout"
	"listenToken"
	"observableExtensions.extender"
	"linq"
],($,ko,ListenToken,ext,linq) ->


	updatePagerInfo=(myPagerInfo,name,_propertyName,_isDescending)->
		isd = _isDescending() or (ext.getMyFilterValue myPagerInfo, "order", name, "isDescending") or false
		if isd=="false"
			isd=false
		myPagerInfo.currentProperty _propertyName() or (ext.getMyFilterValue myPagerInfo, "order", name, "propertyName") or 'Id'
		myPagerInfo.currentIsDescending isd
		Name:"order"
		Id:name
		Values:[
			Name:'propertyName'
			Value:myPagerInfo.currentProperty()
		,
			Name:'isDescending'
			Value:myPagerInfo.currentIsDescending()
		]

	ko.extenders.order=(target, options)->
		target.order=(name, initialiser)->
			myPagerInfo=undefined
			lt=undefined
			oldAddPagerInfo=target._addPagerInfo
			target._addPagerInfo=(filter)->
				if oldAddPagerInfo
					oldAddPagerInfo(filter)
				myPagerInfo = ext.getMyPagerInfo target,"order",name
				if myPagerInfo.filter
					myPagerInfo.set=()->
						filter @
						lt.listen()
						lt.cycle()
					myPagerInfo.isVisible = ko.pureComputed ()-> isVisible
					myPagerInfo.properties = $.Enumerable.From(entityType.properties).Where((x)->x.Values is null).Select((x)->x.name).ToArray()
					myPagerInfo.property=ko.observable (ext.getMyFilterValue myPagerInfo, "order", name, "propertyName")
					myPagerInfo.currentProperty= ko.observable (ext.getMyFilterValue myPagerInfo, "order", name, "propertyName")
					myPagerInfo.currentIsDescending= ko.observable (ext.getMyFilterValue myPagerInfo, "order", name, "isDescending") is "true"

					myPagerInfo.isDescending= ko.observable (ext.getMyFilterValue myPagerInfo, "order", name, "isDescending") is "true"
					myPagerInfo.url = ko.pureComputed( 
						-> ext.getMyFilterUrl(myPagerInfo.filter,'order',name,
							propertyName:myPagerInfo.property()
							isDescending:myPagerInfo.isDescending()
						)
					)
					delete target.addPagerInfo
			_propertyName=ko.observable()
			_isDescending=ko.observable()
			isVisible=true
			entityType=options.entityType()
			
			convert=(type,value)->
				if value and type is 'DateTime'
					getDate value
				else
					value
			if initialiser
				initialiser target
			target._extendListenToken (extended)-> 
				->
					lt= extended()

					oldCanAddData = lt.canAddData
					lt.canAddData = (addData, completeData)->
						if oldCanAddData addData, completeData
							if myPagerInfo.property()

								type = $.Enumerable.From(entityType.properties).Single((x)->x.name is myPagerInfo.property()).clrType
								

								completeData.sort (a,b)->

									if convert a[myPagerInfo.property()]() is convert b[myPagerInfo.property()]()
										return 0
									if convert a[myPagerInfo.property()]() > convert(b[myPagerInfo.property()]()) and myPagerInfo.isDescending()
										return 1
								
									if convert a[myPagerInfo.property()]() < convert(b[myPagerInfo.property()]()) and !myPagerInfo.isDescending()
										return 1
									else
										return -1
							completeData


					oldmod = lt._modifyCollectionRetrieveRequest
					lt._modifyCollectionRetrieveRequest = (parameters)->
						if oldmod
							oldmod parameters
						parameters.push updatePagerInfo myPagerInfo,name,_propertyName,_isDescending
					lt
			(propertyName,isDescending)->
				isVisible=!_propertyName
				_propertyName propertyName
				_isDescending isDescending
				target
		target


	ko.extenders.idPush=(target, options)->
		target.idPush=(id)->
			target._extendListenToken (extended)-> 
				->
					lt= extended()
					oldmod = lt._modifyCollectionRetrieveRequest
					lt._modifyCollectionRetrieveRequest = (parameters)->
						if oldmod
							oldmod parameters
						$.Enumerable.From(parameters).Single((x)->x.Name is 'id').Values.push
							Name:'id'
							Value:id
					lt
			()->
				target
		target