
define [
	"jquery"
	"knockout"
	"listenToken"
	"linq"
],($,ko,ListenToken,ex,linqt) ->


	#listener allows methods to be added when an observable is subscribed and unsubscribed
	ko.extenders.listener=(target, options)->
		if options.subscribeActions
			subscribeActions = options.subscribeActions target
		oldSubscribe = target.subscribe.bind target
		subscriptions=[]
		
		target.subscribe = (callback, callbackTarget,event) =>
			ret= oldSubscribe callback, callbackTarget,event
			if subscribeActions and subscribeActions.subscribePing
				subscribeActions.subscribePing ret
			if subscribeActions and !subscriptions.length and subscribeActions.onSubscribe
				subscribeActions.onSubscribe()
			
			subscriptions.push ret
			oldDispose = ret.dispose
			ret.dispose = () ->
				if subscribeActions and subscribeActions.disposePing
					subscribeActions.disposePing ret
				subscriptions.splice subscriptions.indexOf(ret), 1
				oldDispose.bind(this)()
				
				if subscribeActions and !subscriptions.length and subscribeActions.onDispose
					subscribeActions.onDispose()
			
			ret
		target