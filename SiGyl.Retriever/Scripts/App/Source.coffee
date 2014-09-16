# CoffeeScript
define [
	"jquery"
	"sigr"
],($) ->


	crossConnection = $.hubConnection "http://localhost:41374/"
	crossProxy =  crossConnection.createHubProxy "superBatch"
	hubStart = crossConnection.start()

	source=
		invoke:(method,rindex,joins,collectionJoins)->
			hubStart.then ()->
				crossProxy.invoke method,rindex,joins,collectionJoins
		"on":(event,callback)->crossProxy.on event,callback
	getMe:->source
	initMe:->