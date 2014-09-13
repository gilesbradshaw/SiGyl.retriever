requirejs.config
	baseUrl: '../scripts'
	map:
		'*':
			ko:'knockout'
	shim:
		breeze:['Q','jquery', 'knockout']
	paths:
		linq:"linqjs-amd"
		sinon:"sinon-1.9.1"
		Q:"q"
		jquery:"jquery-2.1.1"
		retriever:"app/retriever"
		breeze:"breeze.debug"
		knockout:"knockout-3.2.0"
		breezeretriever:"App/BreezeRetriever"


require [
	"linq"
	"retriever"
	"Q"
	"breeze"
	"breezeretriever"
	"sinon"
	
], (linq,Retriever,Q,breeze,breezeRetriever)->

	QUnit.test "check linq", (assert)->
		assert.ok linq, 'linq installed'
	QUnit.test "check sinon", (assert)->
		assert.ok sinon, 'sinon installed'
	QUnit.test "handles change and delete data callbacks from source", sinon.test (assert)->
		source=
			"on":sinon.spy()
		store=
			changeData:sinon.stub().returns "stored data"
			deleteData:sinon.stub().returns "deleted data"
		listener=
			addData:sinon.spy()
			deleteData:sinon.spy()
			cycle:sinon.spy()
		r = new Retriever source, store, listener
		assert.ok source["on"].calledTwice, "source on change and delete"

		linq.From(source["on"].args).Single((a)->a[0]=="change")[1] "id", "type", "data"

		assert.ok store.changeData.calledOnce, "store change data called"
		assert.ok store.changeData.args[0][0] is "id" and store.changeData.args[0][1] is "type" and store.changeData.args[0][2] is "data", "correct data stored"
		assert.ok listener.addData.calledOnce, "listener add data"
		assert.ok listener.addData.args[0][0] is r
		assert.ok listener.addData.args[0][1] is "stored data"
		assert.ok listener.cycle.calledOnce

		linq.From(source["on"].args).Single((a)->a[0]=="delete")[1] "id", "type", "data"

		assert.ok store.deleteData.calledOnce, "store delete data called"
		assert.ok store.deleteData.args[0][0] is "id" and store.deleteData.args[0][1] is "type" and store.deleteData.args[0][2] is "data", "correct data delete"
		assert.ok listener.deleteData.calledOnce, "listener delete data"
		assert.ok listener.deleteData.args[0][0] is r
		assert.ok listener.deleteData.args[0][1] is "deleted data"
		assert.ok listener.cycle.calledTwice


	QUnit.asyncTest "if no tokens require fetching source join is not called", sinon.test (assert)->
		promise =
			done:@spy()
			"catch":@spy()
			finally:@spy()
		source=
			"on":->
			invoke:sinon.stub().returns promise
		store=
			mergeData:sinon.stub().returns "ok!!"
		
		r = new Retriever source, store, "listener"

		pr = r.retrieve [
				"token"
				"token"
			]
		

		assert.ok source.invoke.calledOnce, "source invoke not called"
		assert.equal source.invoke.args[0][0], "join", "source  join"
		assert.equal source.invoke.args[0][2].length, 0, "no joins"
		assert.equal source.invoke.args[0][3].length, 0, "no collection joins"

		promise.done.args[0][0] "result!"
		pr.done (x)->
			assert.equal store.mergeData.args[0][0], "result!", "data merged"
			assert.equal x, 'ok!!'
			QUnit.start()
		

		
		
	QUnit.asyncTest "source join fails result", sinon.test (assert)->
		@clock.restore()
		promise = 
			done:@spy()
			"catch":@spy()
		source=
			"on":->
			invoke:sinon.stub().returns promise
		store=
			mergeData:sinon.stub().returns "ok!!"
		r = new Retriever source, store, "listener"
		pr= r.retrieve []
		pr.catch ()->
			assert.ok !store.mergeData.called, "no data merged"
			QUnit.start()
	
		setTimeout(()->
			promise["catch"].args[0][0] "failed"
		100)


	QUnit.test "joins called", sinon.test (assert)->
		promise = 
			done:@spy()
			"catch":@spy()
		source=
			"on":->
			invoke:sinon.stub().returns promise
		r = new Retriever source, "store", "listener"

		pr = r.retrieve [
				retrieveRequestMerge:()->"join1:"
				collectionRetrieveRequestMerge:()->"collectionjoin1:"
			,
				retrieveRequestMerge:(x)->x+ "join2"
				collectionRetrieveRequestMerge:(x)->x+"collectionjoin2"
			]
		

		assert.ok source.invoke.calledOnce, "source invoke not called"
		assert.equal source.invoke.args[0][0], "join", "source  join"
		assert.equal source.invoke.args[0][2], "join1:join2", "joins"
		assert.equal source.invoke.args[0][3], "collectionjoin1:collectionjoin2", "collection joins"


	QUnit.asyncTest "unlistens called", sinon.test (assert)->
		promise = 
			done:@spy()
			"catch":@spy()
			finally:@spy()
		source=
			"on":->
			invoke:sinon.stub().returns promise
		r = new Retriever source, "store", "listener"

		pr = r.unlisten "unlistens", "collectionUnlistens"
		

		assert.ok source.invoke.calledOnce, "source invoke not called"
		assert.equal source.invoke.args[0][0], "leave", "source  leave"
		assert.equal source.invoke.args[0][1], "unlistens", "unlistens"
		assert.equal source.invoke.args[0][2], "collectionUnlistens", "collectionUnlistens"
		
		promise["done"].args[0][0] "ok"

		pr.done (x)->
			assert.equal x, "ok"
			QUnit.start()

	QUnit.asyncTest "unlistens called with fail", sinon.test (assert)->
		promise = 
			done:@spy()
			"catch":@spy()
			finally:@spy()
		source=
			"on":->
			invoke:sinon.stub().returns promise
		r = new Retriever source, "store", "listener"

		pr = r.unlisten "unlistens", "collectionUnlistens"
		

		promise["catch"].args[0][0] "nok"

		pr["catch"] (x)->
			assert.equal x, "nok"
			QUnit.start()
	QUnit.asyncTest "breezeRetrieve get",sinon.test (assert)->
		@server.restore()
		promise = breezeRetriever("configuration").get [
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
		promise.done (data)->
			assert.ok data[0].Type is "Application", "application returned"
			assert.ok data.length is 1 
			assert.ok data[0].Ids[0].Key is 1
			assert.ok data[0].Ids.length is 1
			assert.ok data[0].Ids[0].ParameterGroups.length is 1
			assert.ok data[0].Ids[0].ParameterGroups[0].Name is "Root:Application:0"
			assert.ok data[0].Ids[0].ParameterGroups[0].Value.length is 1
			assert.ok data[0].Ids[0].ParameterGroups[0].Value[0].Id() is 1
			assert.ok data[0].Ids[0].ParameterGroups[0].Value[0].Timestamp() is "AAAAAAAGgBo="


			QUnit.start()
		promise.catch ()->
			assert.ok false, "retrieve failed"
			QUnit.start()
	QUnit.asyncTest "breezeRetrieve get collection",sinon.test (assert)->
		@server.restore()
		promise = breezeRetriever("history").getCollection [
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
		promise.done (data)->
			assert.ok true
			#assert.ok data[0].Type is "Application", "application returned"
			#assert.ok data.length is 1 
			#assert.ok data[0].Ids[0].Key is 1
			#assert.ok data[0].Ids.length is 1
			#assert.ok data[0].Ids[0].ParameterGroups.length is 1
			#assert.ok data[0].Ids[0].ParameterGroups[0].Name is "Root:Application:0"
			#assert.ok data[0].Ids[0].ParameterGroups[0].Value.length is 1
			#assert.ok data[0].Ids[0].ParameterGroups[0].Value[0].Id() is 1
			#assert.ok data[0].Ids[0].ParameterGroups[0].Value[0].Timestamp() is "AAAAAAAGgBo="


			QUnit.start()
		promise.catch ()->
			assert.ok false, "retrieve failed"
			QUnit.start()
	QUnit.asyncTest "breezeRetrieve get collection int",sinon.test (assert)->
		@server.restore()
		@clock.restore()
		col= [
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
		r= breezeRetriever("history")
		setInterval(()->
			promise = r.getCollection col
		1000)
		

	QUnit.test "joins called1", sinon.test (assert)->
		promise = 
			done:@spy()
			"catch":@spy()
		source=
			"on":->
			invoke:sinon.stub().returns promise
		r = new Retriever source, "store", "listener"

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
		

		assert.ok source.invoke.calledOnce, "source invoke not called"
		assert.equal source.invoke.args[0][0], "join", "source  join"
		assert.equal source.invoke.args[0][2], joins, "joins"


	QUnit.asyncTest "a little breeze",  (assert)->
		serviceName = "http://localhost:41374/breeze/configuration"
		manager = new breeze.EntityManager serviceName
		query= breeze.EntityQuery.from("Applications")
		eq= manager.executeQuery(query)
		eq.done (data)->
			assert.ok 'passed'
			QUnit.start()
		eq.catch ()->
			assert.ok false
			QUnit.start()

	QUnit.test "colelction joins called1", sinon.test (assert)->
		promise = 
			done:@spy()
			"catch":@spy()
		source=
			"on":->
			invoke:sinon.stub().returns promise
		r = new Retriever source, "store", "listener"

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
		

		assert.ok source.invoke.calledOnce, "source invoke not called"
		assert.equal source.invoke.args[0][0], "join", "source  join"
		assert.equal source.invoke.args[0][3], collectionJoins, "collectionJoins"

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


		
		