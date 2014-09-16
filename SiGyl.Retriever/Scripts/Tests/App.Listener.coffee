requirejs.config
	baseUrl: '../scripts'
	map:
		'*':
			ko:'knockout'
	shim:
		sinonie:['sinon']
	paths:
		linq:"linqjs-amd"
		sinon:"sinon-1.10.3"
		sinonie:"sinon-ie-1.10.3"
		Q:"q"
		jquery:"jquery-2.1.1"
		knockout:"knockout-3.2.0.debug"
		listener:"App/Listener"
		utils:"App/utils"

listenToken=
	getUnlistens:->
define "listenToken", [], ()->
	getMe:->listenToken
		

require [
	"linq"
	"Q"
	"listener"
	"sinon"
	"sinonie"
	
], (linq,Q,listener)->



	QUnit.asyncTest "listen to a token should retrieve it and merge it", sinon.test (assert)->
		@clock.restore()
		listener.initMe()
		tested= listener.getMe()

		tested.unlistening()[1]="unlisten"


		retrieveFunc=undefined
		
		listenToken = 
			key:1
			dataMerge:@spy()
			dataReceived:@stub().returns 1
			retriever:
				retrieve:@stub().returns (retrieve= Q.defer()).promise
					
					
					

		tested.listen listenToken

		assert.ok !(1 of tested.unlistening()) , "unlistening deleted"
		assert.ok !(1 of tested.listening()) , "no listening"
		assert.ok !(1 of tested.cycled()) , "no cycled"
		assert.ok !(1 of tested.completed()) , "no completed"
		assert.ok  tested.cycling()[1] is listenToken , "listening to listenToken"

		assert.ok listenToken.retriever.retrieve.args[0][0][0]== listenToken , "listen token passed to retriever"

		retrieve.resolve "retrieveData"
		## wait a tick
		setTimeout(()->
			assert.ok !(1 of tested.unlistening()) , "unlistening deleted"
			assert.ok !(1 of tested.listening()) , "no listening"
			assert.ok !(1 of tested.cycling()) , "no cycling"
			assert.ok !(1 of tested.completed()) , "no completed"
			assert.ok  tested.cycled()[1] is listenToken , "listentoken cycled"
			assert.ok listenToken.dataMerge.args[0][0] is "retrieveData"
			assert.ok listenToken.dataReceived.args[1][0] is 2, 'data received incremented'
			QUnit.start()
		100)
		
	QUnit.asyncTest "listen to multiple tokens should retrieve them and merge them", sinon.test (assert)->
		@clock.restore()
		listener.initMe()
		tested= listener.getMe()

		


		retrieveFunc=undefined
		retriever=
			retrieve:@stub().returns (retrieve= Q.defer()).promise
		retriever1=
			retrieve:@stub().returns (retrieve1= Q.defer()).promise
		listenToken = 
			key:1
			dataMerge:@spy()
			dataReceived:@stub().returns 1
			retriever:retriever
		listenToken1 = 
			key:2
			dataMerge:@spy()
			dataReceived:@stub().returns 2
			retriever:retriever1
					
					
		
		tested.listen listenToken

		
		assert.ok retriever.retrieve.args[0][0][0]== listenToken , "listen token passed to retriever"

		tested.listen listenToken1

		assert.ok retriever1.retrieve.args[0][0].length== 0 , "no second listen yet"

		retrieve.resolve "retrieveData"


		## wait a tick
		setTimeout(()->
			
			assert.ok listenToken.dataMerge.args[0][0] is "retrieveData"
			assert.ok listenToken.dataReceived.args[1][0] is 2, 'data received incremented'
			retrieve1.resolve "retrieveData1"
			setTimeout(()->
				assert.ok listenToken1.dataMerge.args[0][0] is "retrieveData1"
				assert.ok listenToken1.dataReceived.args[1][0] is 3, 'data received incremented'
				QUnit.start()
			100)
		100)
		

	