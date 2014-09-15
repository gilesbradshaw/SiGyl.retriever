
define [
	"jquery"
	"knockout"
	"listenToken"
	"observableExtensions.extender"
	"linq"
],($,ko,ListenToken,ext,linq) ->


	ko.extenders.selectSingle=(target, options)->
		target.selectSingle=(collection, initialiser)->

			listenToken=undefined
			targetSubscription =undefined
			
			myType = options.entityType().name
			
			target._addPagerInfo.source="SelectSingle"
			if collection.split('.')[0] is '_histories'
				historyType = collection.split('.')[1]
				if !$.Enumerable.From(options.entityType().histories).Any((h)->h.name is historyType)
					throw "selectMany did not find a history of type #{historyType} for #{myType}"
				ret = options.observableExtensions.observableExtensions.history.rootObservable(0,historyType)
			else
				foreignKey = $.Enumerable.From(options.entityType().navigationProperties).Single((np)->np.name is collection).to.referentialConstraints[0].to[0]
				ret =options.manySingleObservable(
					options.conceptualModel.entities[$.Enumerable.From(options.entityType().navigationProperties).Single((x)->x.name is collection).to.type]
				).base()()
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
						oldmod = listenToken._modifyRetrieveRequest

						modParameters=(old)->
							(parameters)->
								if old
									old parameters
								ret = $.Enumerable.From(parameters).Single((p)->p.Name=='id').Values= $.Enumerable.From(target()).Select((x)->
									Name:'id'
									Value:x[foreignKey]()
								).ToArray()
								ret
						listenToken._modifyRetrieveRequest = modParameters oldmod
						if target._mixinTo
							listenToken._mixinTo = (data)->
								$.extend {}, data, target._mixinTo $.Enumerable.From(target()).SingleOrDefault(undefined,(x)->x[foreignKey]() == data.Id())
								
						listenToken

			)()
			-> ret
				
		target