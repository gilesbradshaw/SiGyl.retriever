
define [
	"jquery"
	"knockout"
	"listenToken"
	"observableExtensions.extender"
	"linq"
],($,ko,ListenToken,ext,linq) ->


	ko.extenders.select=(target, options)->
		target.select=(collection, initialiser)->

			listenToken=undefined
			targetSubscription =undefined
			
			myType = options.entityType().name
			
			if collection.split('.')[0] is '_histories'
				foreignKey="RuntimeId"
				historyType = collection.split('.')[1]
				if !$.Enumerable.From(options.entityType().histories).Any((h)->h.name is historyType)
					throw "select did not find a history of type #{historyType} for #{myType}"
				ret = new options.observableExtensions.observableExtensions.history.rootObservable(0,historyType)
			else
				foreignKey = $.Enumerable.From(options.entityType().navigationProperties).Single((np)->np.name is collection).to.referentialConstraints[0].to[0]
				ret =new options.manyObservable(
					Id:()->0
					options.entityType().name
					collection
					options.entityType()
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
								#setTimeout( ()->
								if targetSubscription
									listenToken.recycling=firstSubscription
									listenToken.relistening=true
									firstSubscription=false
									options.listener.listen listenToken
									options.listener.cycle()
								#,
								#	1)
						listenToken= extended()
						oldcmod = listenToken._modifyCollectionRetrieveRequest
						listenToken._modifyCollectionRetrieveRequest = (parameters)->
							if oldcmod
								oldcmod parameters
							if target()
								ret = $.Enumerable.From(parameters).Single((p)->p.Name=='id').Values=[
									Name:'id'
									Value:target().Id()
								]
							ret
						oldmod = listenToken._modifyRetrieveRequest
						listenToken._modifyRetrieveRequest = (parameters)->
							if oldmod
								oldmod parameters
							if target()
								ret = $.Enumerable.From(parameters).Single((p)->p.Name=='id').Values=[
									Name:'id'
									Value:target().Id()
								]							
							ret
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