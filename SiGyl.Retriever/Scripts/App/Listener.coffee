
define [
	"jquery"
	"knockout"
	"listenToken"
	"linq"
	"Q"
	

],($,ko,ListenToken,linq,Q) ->

	

	_unlistening={}
	_listening={}
	_cycled={}
	_completed={}
	_cycling={}
	cycling=false
	completing=false
	completeTimer=undefined


	completeTimeOut=5000
	cycle=->
		for key, listenToken of _listening
			delete _listening[listenToken.key]
			_cycling[listenToken.key]=listenToken
		x = linq.From(_cycling).GroupBy((x)->x.Value.retriever)
		retrievals = x.Where((xx)->xx.Key()).Select(
			(xx)->
				retrieveParams= linq.From(xx.source).Select((xxx)->xxx.Value).ToArray()
				retriever= xx.Key()

				pr = retriever.retrieve retrieveParams
				pr.then( (retrieveData)->
					if retrieveData
						for listener in xx.source
							listener.Value.dataMerge retrieveData
							if listener.Value.dataReceived
								listener.Value.dataReceived listener.Value.dataReceived()+1
						
				).fail (error) -> alert "retrieval error #{xx.Key()} " + error
			).ToArray()
		thisCycle = Q.all retrievals
		thisCycle.done (retrieveData)->
			for key, listenToken of _cycling
				delete _cycling[listenToken.key]
				_cycled[listenToken.key]=listenToken
			if Object.keys(_listening).length
				cycle()
			else
				cycling=false
				#complete()
				if completeTimer
					clearTimeout completeTimer
					if completeTimeOut>0
						completeTimeOut-=100
				completeTimer = setTimeout(()->
					if!Object.keys(_listening).length
						if!completing
							completeTimeOut=5000
							complete()
				,completeTimeOut)
		thisCycle.fail (error) -> alert error
	complete= =>
		completing=true
		for key, listenToken of _cycled
			delete _cycled[listenToken.key]
			_completed[listenToken.key]=listenToken

		#delete any unlistening that compares to a completed
		for key,value of _unlistening
			delete _completed[value.key]
			#for subscription in linq.From(value.data._subscriptions.change).ToArray()
			#	subscription.dispose()
			if linq.From(_completed).Any((x)->value.compare x.Value)
				delete _unlistening[key]
		unlisteners = linq.From(_unlistening).GroupBy(((x)->x.Value.retriever), (x)->x.Value)
		cancellers = linq.From(_completed).Where((x)->!_unlistening[x.Key]).GroupBy(((x)->x.Value.retriever), (x)->x.Value)
		___= cancellers.ToArray()

		if unlisteners.Any()
			_____ = unlisteners.ToArray()
			x=1

		unlistens = unlisteners.Select((u)->
			ret=
				retriever:u.Key()
				unlistens:ListenToken.getMe().getUnlistens u, cancellers.Where((c)-> c.Key()==u.Key()).SingleOrDefault(undefined, (x)->x.Key()==u.Key())
			ret
		).Select((u)->

			u.retriever.unlisten(
				
				linq.From(u.unlistens.ids).Select((uu)->
					type:uu.type
					ids:[
						Id:0
						ParameterGroups:[
							Name:''
							Parameters:[
								Name:'id'
								Id:'id'
								Values:linq.From(uu.ids).Select((i)->
									Name:'id'
									Value:i
								).ToArray()
							]
						]
					]
				).ToArray()
			,
				linq.From(u.unlistens.collections).Select((uu)->
					type:uu.type
					collections:linq.From(uu.ids).Select((uu)->
						collection:uu.collection
						ids:[
							Id:0
							ParameterGroups:[
								Name:''
								Parameters:[
									Name:'id'
									Id:'id'
									Values:linq.From(uu.ids).Select((i)->
										Name:'id'
										Value:i
									).ToArray()
								]
							]
						]
					).ToArray()
				).ToArray()
			)

		).ToArray()



		$.when.apply($,unlistens).done(=>
			for key, listenToken of _unlistening
				delete _unlistening[listenToken.key]
			completing=false
			if Object.keys(_listening).length
				listener.cycle()
		).fail (error)->alert ' ....' + error

	listener=
	#used during unit tests
		


		listening:->
			_listening
		cycled:->
			_cycled
		cycling:->
			_cycling
		unlistening:->
			_unlistening
		completed:->
			_completed

		listen:(listenToken)=>

			recycling = listenToken.recycling
			relistening = listenToken.relistening
			listenToken.recycling=false
			listenToken.relistening = false


			listenToken.cachedCollectionRetrieveRequests=undefined
			listenToken.cachedRetrieveRequests=undefined

			if _unlistening[listenToken.key]
				delete _unlistening[listenToken.key]

			if !_listening[listenToken.key] and (!_cycling[listenToken.key] or recycling)
				if _cycling[listenToken.key]
					delete _cycling[listenToken.key]
				for key,value of _completed
					#need to find why sometimes there is no data
					if !relistening
						if listenToken.compare value
							_completed[listenToken.key]=listenToken
							# this might change to a data merge?????
							cached = true
							if !listenToken.data()
								cached=false
							else
								if value.data().length != undefined
									if listenToken.data().length!=value.data().length or linq.From(listenToken.data()).Any((x)->!linq.From(value.data()).Any((v)->v.Id() is x.Id()))
										cached=false
								else
									if !listenToken.data().Id or listenToken.data().Id() != value.data().Id()
										cached=false
							if !cached
								listenToken.data value.data()
							return listener
				if _cycled[listenToken.key]
					delete _cycled[listenToken.key]
				_listening[listenToken.key]=listenToken
			listener.cycle()
			listener
		
		unlisten:(listenToken)->
			if _listening[listenToken.key]
				delete _listening[listenToken.key]
			_unlistening[listenToken.key]=listenToken
			listener.cycle()
			listener
		cycle:->
			if !cycling and !completing
				cycling=true
				cycle()
			listener
		
		deleteData:(retriever, data)->
			linq.From(_completed).Where((x)->x.Value.retriever is retriever and x.Value.type is data.type).Select((x)->x.Value.deleteData(data)).ToArray()
			linq.From(_cycled).Where((x)->x.Value.retriever is retriever and x.Value.type is data.type).Select((x)->x.Value.deleteData(data)).ToArray()
			linq.From(_cycling).Where((x)->x.Value.retriever is retriever and x.Value.type is data.type).Select((x)->x.Value.queueDeleteData(data)).ToArray()
		addData:(retriever,data)->
			linq.From(_completed).Where((x)->x.Value.retriever is retriever and x.Value.type is data.type).Select((x)->x.Value.addData(data)).ToArray()
			linq.From(_cycled).Where((x)->x.Value.retriever is retriever and x.Value.type is data.type).Select((x)->x.Value.addData(data)).ToArray()
			linq.From(_cycling).Where((x)->x.Value.retriever is retriever and x.Value.type is data.type).Select((x)->x.Value.queueAddData(data)).ToArray()


	getMe:->listener
	initMe:->
		_unlistening={}
		_listening={}
		_cycling={}
		_cycled={}
		_completed={}
		cycling=false
		completing=false
		if completeTimer
			clearTimeout completeTimer
		Q()