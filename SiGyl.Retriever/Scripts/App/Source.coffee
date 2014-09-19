# CoffeeScript
define [
	"jquery"
	"Q"
	"sigr"
],($,Q) ->


	crossConnection = $.hubConnection "http://localhost:41374/"
	crossProxy =  crossConnection.createHubProxy "superBatch"
	

	source=
		
		invoke:(method,spec)->
			#hubStart.then ()->
			crossProxy.invoke method,spec
		"on":(event,callback)->crossProxy.on event,callback
	getMe:->source
	initMe:->
		crossConnection.start()
