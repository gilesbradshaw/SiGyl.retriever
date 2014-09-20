requirejs.config
	baseUrl: '../scripts'
	map:
		'*':
			ko:'knockout'
	shim:
		breeze:['Q','jquery', 'knockout']
		sinonie:['sinon']
		sigr: ["jquery"]
	paths:
		rx:"rx/rx"
		"rx.joinpatterns":"rx/rx.joinpatterns"
		"rx.binding":"rx/rx.binding"
		"knockout.rx":"knockout.rx"
		linq:"linqjs-amd"
		sinon:"sinon-1.10.3"
		sinonie:"sinon-ie-1.10.3"
		Q:"q"
		jquery:"jquery-2.1.1"
		sigr: "jquery.signalR-2.1.2"
		retriever:"app/retriever"
		breeze:"breeze.debug"
		knockout:"knockout-3.2.0.debug"
		"knockout.mapping":"knockout.mapping-latest"
		"knockout.punches":"knockout.punches"
		breezeretriever:"App/BreezeRetriever"
		breezeEntityManagers:"App/BreezeEntityManagers"
		store:"App/store"
		b64:"App/b64"
		listener:"App/Listener"
		listenToken:"App/listenToken"
		source:"App/Source"
		observableExtensions:"app/NewobservableExtensions/observableExtensions"
		configurationMetaData:"Tests/metadata/configuration"
		runtimeMetaData:"Tests/metadata/runtime"
		historyMetaData:"Tests/metadata/history"
		utils:"App/utils"

		"observableExtensions.listener": "App/ObservableExtensions/listener"
		



	



require [
	"rx.binding"
	"Q"
	"linq"
	"knockout"
	"observableExtensions"
	"retriever"
	"breezeEntityManagers"
	"knockout.punches"
	"sinon"
	"sinonie"
	
		
	
], (rx,Q,linq,ko,observableExtensions,_retriever, breezeEntityManagers)->


	retrieveSubjects={}
	retriever=
		subscriber:(subscriptionDefinition)->
			if !retrieveSubjects[subscriptionDefinition]
				subject=rx.Observable.create (observer)->
					retrieveSubjects[subscriptionDefinition].observer = observer
					()-> delete retrieveSubjects[subscriptionDefinition]
				
				retrieveSubjects[subscriptionDefinition] = 
					subject:subject
					share: subject.share()
					subscriptionDeferred: Q.defer()
				setTimeout(
					()->
						if retrieveSubjects[subscriptionDefinition]
							retrieveSubjects[subscriptionDefinition].subscriptionDeferred.resolve ()->retrieveSubjects[subscriptionDefinition].share
					1)
			retrieveSubjects[subscriptionDefinition].subscriptionDeferred.promise
			



			



	sinon.stub _retriever, "initMe", ->Q()
	sinon.stub _retriever, "getMe", ->retriever

	sinon.stub breezeEntityManagers, "getMe", ->
		Q
			getType:()->
				executeQuery:brGetType.executeQuery
	brGetType=
		executeQuery:(query)->
			deferred = Q.defer()
			setTimeout(
				()->
					deferred.resolve
						results:["retrieve returns data for #{query}"]
				10
			)
			deferred.promise

	ko.punches.enableAll()
	QUnit.asyncTest "subscribe and fetch", (assert)->
		sandbox=sinon.sandbox.create()
		clock = sandbox.useFakeTimers()
		received1 = []
		received2=0
			
		sandbox.spy retriever, "subscriber"
		sandbox.spy brGetType, "executeQuery"


		observableExtensions.initMe().then ()->


			subscription = observableExtensions.getMe().testManyObservable("rsub")().root.base("base!!!").order("order!!!!!!!!").retrieve().retrieved().subscribe (data)->
				received1 = data
				
			assert.ok received1.length==0 , "no data received yet"
			
			assert.ok retriever.subscriber.calledOnce, "we have subscribed to the retriever"
			assert.equal retriever.subscriber.args[0][0], "rsub", "we've subscribed to the rsub definition"
			assert.ok !brGetType.executeQuery.called, "we have not yet retrieved from the retriever"
			clock.tick 1
			#not sure why promise won't fire without real time???
			clock.restore()
			setTimeout( ()->
				clock= sandbox.useFakeTimers()
				assert.ok brGetType.executeQuery.calledOnce, "we have called retrieve on the retriever"
				assert.equal brGetType.executeQuery.args[0][0], "initialQuery from base base!!! from order order!!!!!!!!", "query passed to retriever"
				assert.ok received1.length==0, "still no data"
				clock.tick 20
				retrieveSubjects.rsub.observer.onNext "yabba 1"
				retrieveSubjects.rsub.observer.onNext "yabba 2"

					
				clock.restore()
				setTimeout(
					()->
						clock= sandbox.useFakeTimers()
						assert.ok received1.length==3, "data"
						assert.ok received1[0] is "retrieve returns data for initialQuery from base base!!! from order order!!!!!!!!", "received data applied"
						assert.ok received1[1] is "yabba 1", "published data applied"
						assert.ok received1[2] is "yabba 2", "published data applied"
						sandbox.restore()
						QUnit.start()
				20)
					
			1)
				
				
			return


			setTimeout(()->
				retrieveSubjects.rsub.observer.onNext 'yabadabadaba'
				subscription2.dispose()
				
				retrieveSubjects.rsub.observer.onNext 'yabfevadabadaba'
				subscription.dispose()
				
				assert.ok received1 is 3
				assert.ok received2 is 2

				assert.ok retrieveSubjects.rsub is undefined
				QUnit.start()


			1000)
		#allow requirejs to get retriever not sue why 4 ms ticks needed
		clock.tick 4

			
	QUnit.asyncTest "bind to dom", (assert)->
		observableExtensions.initMe().then ()->
			x=0
			setInterval(()->
				if retrieveSubjects.rsub and retrieveSubjects.rsub.observer
					retrieveSubjects.rsub.observer.onNext "yabadabadaba #{x++}"
			1000)

			ko.applyBindings
				base1:ko.observable 'base1'
				base2:ko.observable 'base2'
				order1:ko.observable 'order1'
				order2:ko.observable 'order2'
				sub1:observableExtensions.getMe().testManyObservable("rsub")
				sub2:observableExtensions.getMe().testManyObservable("rsub")
	