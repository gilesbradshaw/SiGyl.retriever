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
		source:"App/Source"
		observableExtensions:"app/observableExtensions"
		configurationMetaData:"tests/metaData/configuration"
		runtimeMetaData:"tests/metaData/runtime"
		historyMetaData:"tests/metaData/history"


listener=
	deleteData:->
	addData:->
	cycle:->
define "listener", [], ()->
	getMe:->listener

require [
	"linq"
	"retriever"
	"Q"
	"breezeretriever"
	"listener"
	"source"
	"configurationMetaData"
	"runtimeMetaData"
	"historyMetaData"
	"sinon"
	"sinonie"
	
], (linq,Retriever,Q,breezeRetriever,listener,source,configurationMetaData,runtimeMetaData,historyMetaData)->

	QUnit.test "check linq", (assert)->
		assert.ok linq, 'linq installed'
	QUnit.test "check sinon", (assert)->
		assert.ok sinon, 'sinon installed'

	QUnit.asyncTest "if no tokens require fetching source join is not called", sinon.test (assert)->
		promise =
			done:@spy()
			"catch":@spy()
			finally:@spy()
		sourceStub=
			"on":->
			invoke:sinon.stub().returns promise
		@stub source, "getMe", ->sourceStub
		breezeDeferreds=
			get:Q.defer()
			getCollection:Q.defer()
		stubbedBreezeRetriever=
			get:@stub().returns breezeDeferreds.get.promise
			getCollection:@stub().returns breezeDeferreds.getCollection.promise
		@stub breezeRetriever, "getMe", ()->stubbedBreezeRetriever
			
		
		r = Retriever.getMe()

		pr = r.retrieve [
				"token"
				"token"
			]
		
		

		assert.ok sourceStub.invoke.calledOnce, "source invoke called"
		assert.equal sourceStub.invoke.args[0][0], "join", "source  join"
		assert.equal sourceStub.invoke.args[0][2].length, 0, "no joins"
		assert.equal sourceStub.invoke.args[0][3].length, 0, "no collection joins"

		promise.done.args[0][0] "result!"
		assert.ok breezeRetriever.getMe().get.calledOnce, "breezeRetiever get called"
		assert.ok breezeRetriever.getMe().getCollection.calledOnce, "breezeRetiever getCollection called"
		
		pr.done (x)->
			assert.equal x.length, 0
			QUnit.start()
		
		breezeDeferreds.get.resolve []
		breezeDeferreds.getCollection.resolve []


	QUnit.asyncTest "source join fails result", sinon.test (assert)->
		@clock.restore()
		promise = 
			done:@spy()
			"catch":@spy()
			"yup":"!yup"
		sourceStub=
			"on":->
			invoke:sinon.stub().returns promise
		@stub source, "getMe", ->sourceStub
		r = Retriever.getMe()
		pr= r.retrieve []
		pr.catch ()->
			assert.ok true
			QUnit.start()
		setTimeout(()->
			promise["catch"].args[0][0] "failed"
		100)


	QUnit.test "joins called", sinon.test (assert)->
		promise = 
			done:@spy()
			"catch":@spy()
		sourceStub=
			"on":->
			invoke:sinon.stub().returns promise
		@stub source, "getMe", ->sourceStub
		r = Retriever.getMe()

		pr = r.retrieve [
			retrieveRequestMerge:()->"join1:"
			collectionRetrieveRequestMerge:()->"collectionjoin1:"
		,
			retrieveRequestMerge:(x)->x+ "join2"
			collectionRetrieveRequestMerge:(x)->x+"collectionjoin2"
		]
		

		assert.ok sourceStub.invoke.calledOnce, "source invoke not called"
		assert.equal sourceStub.invoke.args[0][0], "join", "source  join"
		assert.equal sourceStub.invoke.args[0][2], "join1:join2", "joins"
		assert.equal sourceStub.invoke.args[0][3], "collectionjoin1:collectionjoin2", "collection joins"


	QUnit.asyncTest "unlistens called", sinon.test (assert)->
		promise = 
			done:@spy()
			"catch":@spy()
			finally:@spy()
		sourceStub=
			"on":->
			invoke:sinon.stub().returns promise
		@stub source, "getMe", ->sourceStub
		r = Retriever.getMe()

		pr = r.unlisten "unlistens", "collectionUnlistens"
		

		assert.ok sourceStub.invoke.calledOnce, "source invoke not called"
		assert.equal sourceStub.invoke.args[0][0], "leave", "source  leave"
		assert.equal sourceStub.invoke.args[0][1], "unlistens", "unlistens"
		assert.equal sourceStub.invoke.args[0][2], "collectionUnlistens", "collectionUnlistens"
		
		promise["done"].args[0][0] "ok"

		pr.done (x)->
			assert.equal x, "ok"
			QUnit.start()

	QUnit.asyncTest "unlistens called with fail", sinon.test (assert)->
		promise = 
			done:@spy()
			"catch":@spy()
			finally:@spy()
		sourceStub=
			"on":->
			invoke:sinon.stub().returns promise
		@stub source, "getMe", ->sourceStub
		r = Retriever.getMe()

		pr = r.unlisten "unlistens", "collectionUnlistens"
		

		promise["catch"].args[0][0] "nok"

		pr["catch"] (x)->
			assert.equal x, "nok"
			QUnit.start()

	QUnit.test "joins called1", sinon.test (assert)->
		promise = 
			done:@spy()
			"catch":@spy()
		sourceStub=
			"on":->
			invoke:sinon.stub().returns promise
		@stub source, "getMe", ->sourceStub
		r = Retriever.getMe()
		joins = [
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
		pr = r.retrieve [
				retrieveRequestMerge:()-> joins
			]
		

		assert.ok sourceStub.invoke.calledOnce, "source invoke not called"
		assert.equal sourceStub.invoke.args[0][0], "join", "source  join"
		assert.equal sourceStub.invoke.args[0][2], joins, "joins"



	QUnit.test "collection joins called1", sinon.test (assert)->
		promise = 
			done:@spy()
			"catch":@spy()
		sourceStub=
			"on":->
			invoke:sinon.stub().returns promise
		@stub source, "getMe", ->sourceStub
		r = Retriever.getMe()

		collectionJoins = [
			"collections":[
				"collection":"Batches"
				"ids":[
					"Id":1
					"IdProperty":"Id"
					"ParameterGroups":[
						"Name":"Collection:HistoryZone:Batches:12"
						"Parameters":[
							"Name":"id"
							"Id":"id"
							"Values":[
								"Name":"id"
								"Value":1
							]
						,
							"Name":"order"
							"Id":"order"
							"Values":[
								"Name":"propertyName"
								"Value":"Id"
							,
								"Name":"isDescending"
								"Value":false
							]
						,
							"Name":"filter"
							"Id":"filter"
							"Values":[
								"Name":"property"
								"Value":"Id"
							,
								"Name":"operator"
								"Value":"<"
							,
								"Name":"value"
								"Value":"22"
							]
						,
							"Name":"page"
							"Id":"page",
							"Values":[
								"Name":"page"
								"Value":"2"
							]
						]
					]
				]
			]
			"type":"HistoryZone"
		]
		pr = r.retrieve [
				collectionRetrieveRequestMerge:()-> collectionJoins
			]
		

		assert.ok sourceStub.invoke.calledOnce, "source invoke not called"
		assert.equal sourceStub.invoke.args[0][0], "join", "source  join"
		assert.equal sourceStub.invoke.args[0][3], collectionJoins, "collectionJoins"

		ret = [
			"Type":"HistoryZone"
			"Ids":[]
			"Collections":[
				"Collection":"Batches"
				"Ids":[
					

					"Key":"1"
					"ParameterGroups":[
						"Name":"Collection:HistoryZone:Batches:12"
						"Collection":
							"data":[
								"ZoneId":1
								"Zone":null
								"FormulaId":1
								"FormulaPath":"Self Check.DRY_SC10:1.0.DRY_SC10:1.0"
								"UnitProcedures":null
								"States":null
								"MyParentId":1
								"Commands":null
								"RuntimeId":1
								"Comment":null
								"ConfigurationParentType"
								null,"ConfigurationParentId":1
								"MyCommandId":null
								"MyCommand":null
								"Name":"newbatch"
								"Description"
								"Self Check Drying....bbb"
								"Timestamp":"AAAAAAACmRQ="
								"CreatedOn":"2014-03-04T01:40:26.88"
								"ModifiedOn":"2014-07-25T01:50:49.75"
								"UserIdCreated":null
								"Exceptions":[]
								"Id":1
							]
							"metaData":
								"count":21

					]

				]
			]
		]


		
		