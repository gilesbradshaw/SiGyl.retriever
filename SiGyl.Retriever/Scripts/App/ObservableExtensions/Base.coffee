
define [
	"jquery"
	"knockout"
	"listenToken"
	"observableExtensions.extender"
	"linq"
],($,ko,ListenToken,ext,linq) ->


	#base is the start of any extension chain.  
	#It provides a base listenToken which allows the observable to listen and unlisten on subscription and unsubscription
	ko.extenders.base=(target, options)->
		target.base= target.any=(name, initialiser)->
			myListenToken= undefined
			myFilterSubscription = undefined
			doMyFilterSubscribe=()->
			
			#stops subscription on creation
			myFilter = undefined
			_filter=undefined
			myTrigger= ko.observable 0
			ret = ko.pureComputed(
				deferEvaluation: true
				read:-> 
					if myTrigger()
						if myListenToken
							myListenToken.data()
			)
			myPagerInfo=undefined
			ret._addPagerInfo=(filter)->
				myPagerInfo = ext.getMyPagerInfo ret,"base","filter", filter
				_filter=filter
				if filter
					myFilter=ko.observable filter.peek()
					doMyFilterSubscribe = (()->
						if !myFilterSubscription
							myFilterSubscription = filter.subscribe (x)->
								myFilter x
								options.listen myListenToken
						)
					doMyFilterSubscribe()
				else
					myFilter=ko.observable()

				delete ret._addPagerInfo
			ret._addPagerInfo.source="base"
			ret.__getListenToken = options.getListenToken
			if initialiser
				initialiser target

			myListenExtension=
				listener:
					subscribeActions:->
						myInitialSubscribe=undefined
						onSubscribe:->
							#ret._addPagerInfo()
							name=name
							myListenToken= ret.__getListenToken()
							myInitialSubscribe = myListenToken.data.subscribe (x)->
								
								myTrigger myTrigger()+1
								if myInitialSubscribe
									myInitialSubscribe.dispose()
									myInitialSubscribe=undefined
							
							(myListenToken.listen=()->options.listen myListenToken)()
							myListenToken.cycle=options.cycle

							if myListenToken.data.peek() && myListenToken.data.peek().length
								myTrigger myTrigger()+1
							doMyFilterSubscribe()
						disposePing:->
						subscribePing:->
						onDispose:->
							if myFilterSubscription
								name=name
								myFilterSubscription.dispose()
								myFilterSubscription=undefined
							options.unlisten myListenToken
							if ret._onDisposed
								ret._onDisposed()
							if myInitialSubscribe
								myInitialSubscribe.dispose()
								myInitialSubscribe=undefined
							myListenToken=undefined
							
							
			tokenToExtend= ret.__getListenToken
			#myPagerInfo = ext.getMyPagerInfo ret,"base","filter", myFilter
			ret._extendListenToken = (extender)->
				tokenToExtend= ret.__getListenToken = extender tokenToExtend
							
			ret.extend $.extend myListenExtension, options.extend()
			->
				ret
		target


	ko.extenders.extendListenToken=(target,options)->
		target.extendListenToken=(extender)->
			target._extendListenToken (extended)-> extender extended
			->
				target
		target



