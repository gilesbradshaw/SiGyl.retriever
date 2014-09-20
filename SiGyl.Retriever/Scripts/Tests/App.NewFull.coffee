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
	"knockout"
	"linq"
	"breezeEntityManagers"
	"Q"
	"observableExtensions"
	"rx"
	"rx.joinpatterns"
	"knockout.rx"
	"sinonie"
	"knockout.punches"

	
	
], (ko,linq,Retriever,Q,observableExtensions,rx)->

	ko.punches.enableAll()
	QUnit.asyncTest "fetch and subscribe to data", (assert)->
		sandbox= sinon.sandbox.create()
		Retriever.initMe( [
			"http://localhost:41374/breeze/configuration"
			"http://localhost:41374/breeze/runtime"
			"http://localhost:41374/breeze/history"
		]).done ()->
			observableExtensions.initMe().then ()->
				ro = observableExtensions.getMe().rootObservable(1, "Enterprise")
				roo= ro().root.retrieve().retrieved()
				roo.subscribe (value)->
					assert.ok value.Id()==1
					ko.applyBindings value
					QUnit.start()
					return
					koSites=value.Sites.any()() #an observablearray of sites
					koApplication = value.Application #observable of application

					sites = koSites.toObservableWithReplyLatest().where((x)->x)
					application = koApplication.toObservableWithReplyLatest().where((x)->x)
					both = rx.Observable.when (sites.and application).then (site, application)->
						site:site,
						application:application
					both.subscribe (xx)->
						sandbox.restore()
						QUnit.start()
						

	QUnit.asyncTest "bind to dom", (assert)->
		sandbox= sinon.sandbox.create()
		Retriever.initMe( [
			"http://localhost:41374/breeze/configuration"
			"http://localhost:41374/breeze/runtime"
			"http://localhost:41374/breeze/history"
		]).done ()->


			observableExtensions.initMe().then ()->
				ro = observableExtensions.getMe().rootObservable(384, "Folder")
				roo= ro()
				ko.applyBindings
					value:roo
					hide:ko.observable false