requirejs.config
	baseUrl: '../scripts'
	map:
		'*':
			ko:'knockout'
	shim:
		breeze:['Q','jquery', 'knockout']
		sinonie:['sinon']
	paths:
		linq:"linqjs-amd"
		sinon:"sinon-1.10.3"
		sinonie:"sinon-ie-1.10.3"
		Q:"q"
		jquery:"jquery-2.1.1"
		retriever:"app/retriever"
		breeze:"breeze.debug"
		knockout:"knockout-3.2.0.debug"
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
	"linq"
	"retriever"
	"Q"
	"source"
	"sinonie"
	
	
], (linq,Retriever,Q,source)->

	QUnit.asyncTest "check linq", (assert)->
		sandbox= sinon.sandbox.create()
		
		Retriever.initMe [
			"http://localhost:41374/breeze/configuration"
			"http://localhost:41374/breeze/runtime"
			"http://localhost:41374/breeze/history"
		]


		s= source.getMe()
		sourceDefer = undefined
		sandbox.stub s, "invoke", ->
			sourceDefer = Q.defer()
			sourceDefer.promise 

		r= Retriever.getMe()

		pr = r.retrieve [
			retrieveRequestMerge:()->[
				"ids":[
					"Id":"1"
					"ParameterGroups":[
						"Name":"Root:Application:0"
						"Parameters":[
							"Name":"id"
							"Id":"id"
							"Values":[
								"Name":"id"
								"Value":"1"
							]
						]
					]
				]
				"type":"Application"
			]
		]

		pr.done (x)->
			hello = x[0].Ids[0].ParameterGroups[0].Value[0].Enterprises.any()()
			hello.subscribe (xx)->
				assert.ok true
				sandbox.restore()
				QUnit.start()
			sourceDefer.resolve()
		sourceDefer.resolve()
	