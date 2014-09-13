requirejs.config
	baseUrl: '../scripts'
	paths:
		linq:"linqjs-amd"
		sinon:"sinon-1.9.1"
		q:"q"
		retriever:"app/retriever"
		

require [
	"linq"
	"retriever"
	"q"
	"sinon"
	
], (linq,Retriever,Q)->

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
		assert.equal source.invoke.args[0][2], "join1:join2", "no joins"
		assert.equal source.invoke.args[0][3], "collectionjoin1:collectionjoin2", "no collection joins"


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