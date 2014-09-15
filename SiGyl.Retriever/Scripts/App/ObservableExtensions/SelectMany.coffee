
define [
	"jquery"
	"knockout"
	"listenToken"
	"observableExtensions.extender"
	"linq"
],($,ko,ListenToken,ext,linq) ->


	ko.extenders.selectMany=(target, options)->
		target.selectMany=(collection, initialiser)->

			listenToken=undefined
			targetSubscription =undefined
			
			myType = options.entityType().name
			
			target._addPagerInfo.source="SelectMany"
			if collection.split('.')[0] is '_histories'
				foreignKey="RuntimeId"
				historyType = collection.split('.')[1]
				if !$.Enumerable.From(options.entityType().histories).Any((h)->h.name is historyType)
					throw "selectMany did not find a history of type #{historyType} for #{myType}"
				ret = options.observableExtensions.observableExtensions.history.rootObservable(0,historyType)
			else
				foreignKey = $.Enumerable.From(options.entityType().navigationProperties).Single((np)->np.name is collection).to.referentialConstraints[0].to[0]
				ret =options.manyObservable(
					Id:()->0
					options.entityType().name
					collection
					options.entityType()
				).base("selectMany:" + collection)()
			oldOnDisposed = ret._onDisposed
			ret._onDisposed=->
				if oldOnDisposed
					oldOnDisposed()
				if targetSubscription
					targetSubscription.dispose()
					targetSubscription=undefined
			if initialiser
				initialiser target
			ret._extendListenToken(
				(extended)->
					->
						firstSubscription = true
						if !targetSubscription
							targetSubscription = target.subscribe (x)->
								if targetSubscription
									listenToken.recycling=firstSubscription
									listenToken.recycling=true
									listenToken.relistening=true
									firstSubscription=false
									options.listener.listen listenToken
									options.listener.cycle()
						listenToken= extended()
						oldcmod = listenToken._modifyCollectionRetrieveRequest
						oldmod = listenToken._modifyRetrieveRequest

						modParameters=(old)->
							(parameters)->
								if old
									old parameters
								ret = $.Enumerable.From(parameters).Single((p)->p.Name=='id').Values= $.Enumerable.From(target()).Select((x)->
									Name:'id'
									Value:x.Id()
								).ToArray()
								ret


						listenToken._modifyCollectionRetrieveRequest = modParameters oldcmod
						listenToken._modifyRetrieveRequest = modParameters oldmod
							
						#oldCanAddData = listenToken.canAddData
						listenToken.canAddData = (addData, completeData)->
							#no chain this starts a new base
							#if oldCanAddData addData, completeData
							if addData.type is "#{myType}.#{collection}"
								parameters =[]
								listenToken._modifyCollectionRetrieveRequest parameters
								ret = $.Enumerable.From($.Enumerable.From(parameters).Single((p)->p.Name=='id').Values).Any((v)=>v.Name is 'id' and v.Value is addData.value[foreignKey]())
								ret
						listenToken

			)()
			-> ret
				
		target