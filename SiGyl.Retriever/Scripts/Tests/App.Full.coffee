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
		rx:"rx"
		"rx.joinpatterns":"rx.joinpatterns"
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
		observableExtensions:"app/observableExtensions/observableExtensions"
		configurationMetaData:"Tests/metaData/configuration"
		runtimeMetaData:"Tests/metaData/runtime"
		historyMetaData:"Tests/metaData/history"
		utils:"App/utils"

		"observableExtensions.listener": "App/ObservableExtensions/listener"
		"observableExtensions.base": "App/ObservableExtensions/base"
		"observableExtensions.order": "App/ObservableExtensions/order"
		"observableExtensions.filter": "App/ObservableExtensions/filter"
		"observableExtensions.page": "App/ObservableExtensions/page"
		"observableExtensions.title": "App/ObservableExtensions/title"
		"observableExtensions.selectMany": "App/ObservableExtensions/selectMany"
		"observableExtensions.selectSingle": "App/ObservableExtensions/selectSingle"
		"observableExtensions.select": "App/ObservableExtensions/select"
		"observableExtensions.mixinTo": "App/ObservableExtensions/mixinTo"
		"observableExtensions.extender": "App/ObservableExtensions/extender"


require [
	"knockout"
	"linq"
	"retriever"
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
		expect 0
		Retriever.initMe( [
			"http://localhost:41374/breeze/configuration"
			"http://localhost:41374/breeze/runtime"
			"http://localhost:41374/breeze/history"
		]).done ()->

			ro = observableExtensions.getMe().modelExtensions.ConfigurationContext.rootObservable 1, "Enterprise", true

			ro.subscribe (value)->

				koSites=value.Sites.any()() #an observablearray of sites
				koApplication = value.Application #observable of application

				sites = koSites.toObservableWithReplyLatest().where((x)->x)
				application = koApplication.toObservableWithReplyLatest().where((x)->x)
				both = rx.Observable.when (sites.and application).thenDo (site, application)->
					site:site,
					application:application
				both.subscribe (xx)->
					sandbox.restore()
					ko.applyBindings value
					QUnit.start()
						

