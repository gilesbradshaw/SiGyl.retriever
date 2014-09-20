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
		linq:"linqjs-amd"
		sinon:"sinon-1.10.3"
		sinonie:"sinon-ie-1.10.3"
		Q:"q"
		jquery:"jquery-2.1.1"
		sigr: "jquery.signalR-2.1.2"
		breeze:"breeze.debug"
		knockout:"knockout-3.2.0.debug"
		"knockout.mapping":"knockout.mapping-latest"
		"knockout.punches":"knockout.punches"
		observableExtensions:"app/observableExtensions/observableExtensions"
		configurationMetaData:"Tests/metadata/configuration"
		runtimeMetaData:"Tests/metadata/runtime"
		historyMetaData:"Tests/metadata/history"
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

require ["Q"], (Q)->

	listenTokenStubber=
		#retrieveRequestMerge:->
		#collectionRetrieveRequestMerge:->
		#processMetaData:->
		#cancelIdUnlisten:->
		#cancelCollectionUnlisten:->
		#compare:->
		#extend:->
		getDataMerge:->
		#getProcessMetaData:->
		getRetrieveRequest:->
		modifyRetrieveRequest:->
		#getCollectionRetrieveRequest:->
		#modifyCollectionRetrieveRequest:->

	define "listenToken",[],()->
		getMe:->(retriever,data)->
			listenTokenStubber.retriever=retriever
			listenTokenStubber.data=data
			listenTokenStubber

		initMe:->Q()

	retrieverStubber={}
	define "retriever",[],()->
		getMe:->retrieverStubber
		initMe:->Q()

	listenerStubber=
		listen:->
		cycle:->
	define "listener",[],()->
		getMe:->listenerStubber
		initMe:->Q()

	require [
		"linq"
		"knockout"
		"observableExtensions"
		"configurationMetaData"
		"runtimeMetaData"
		"historyMetaData"
		"utils"
		"sinon"
		"sinonie"
	
	], (linq,ko,observableExtensions,configurationMetaData,runtimeMetaData,historyMetaData,utils)->

		QUnit.asyncTest "check linq", (assert)->
			sandbox=sinon.sandbox.create()
			#sandbox.stub listenTokenStubber, "getDataMerge", ->
			sandbox.stub listenTokenStubber, "getRetrieveRequest", ->
			sandbox.stub listenTokenStubber, "modifyRetrieveRequest", ->

			model = utils.getMe().processModel runtimeMetaData.getMe().schema
			observableExtensions.initMe().done ()->
				observableExtensions.getMe().create('RuntimeContext', model).done ()->
					tested = observableExtensions.getMe().modelExtensions.RuntimeContext

					data=
						Id:ko.observable 1
					entityType = model.entityTypes.RuntimeEnterprise

					singleObservable = tested.singleObservable data, "Application", entityType 
					disposer = singleObservable.subscribe ->
					assert.ok listenTokenStubber.getDataMerge.calledOnce, "getDataMerge"
					assert.ok listenTokenStubber.getRetrieveRequest.calledOnce, "getRetrieveRequest"
					assert.ok listenTokenStubber.modifyRetrieveRequest.calledOnce, "modifyRetrieveRequest"
					sandbox.restore()
					QUnit.start()