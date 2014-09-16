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
		knockout:"knockout-3.2.0.debug"
		"knockout.mapping":"knockout.mapping-latest"
		store:"App/store"
		b64:"App/b64"
		configurationMetaData:"tests/metaData/configuration"
		runtimeMetaData:"tests/metaData/runtime"
		historyMetaData:"tests/metaData/history"
		utils:"App/utils"
		
observableExtensionsStubber=
	getMe:->
define "observableExtensions", [], ()->observableExtensionsStubber


require [
	"store"
	"configurationMetaData"
	"runtimeMetaData"
	"historyMetaData"
	"sinon"
], (store,configurationMetaData,runtimeMetaData,historyMetaData)->

	QUnit.test "check sinon", (assert)->
		assert.ok sinon, 'sinon installed'
	QUnit.test "check store", (assert)->
		assert.ok store, 'store installed'
	QUnit.test "store merge data enterprise" , sinon.test (assert)->


		observableExtensionsStub=
			modelExtensions:
				ConfigurationContext:
					interModelRelationObservable:@stub().returns "interModelRelationObservable"
					manyObservable:@stub().returns "manyObservable"
					singleObservable:@stub().returns "singleObservable"
		@stub observableExtensionsStubber, "getMe", ->observableExtensionsStub
		
		md = configurationMetaData.getMe()
		tested = new (store.getMe()) md.schema
		
		ret = tested.mergeData 'Enterprise', 
			Id:1
			Name:'enterprise'
			Description :'desc'

		assert.ok ret.RuntimeEnterprise is "interModelRelationObservable", "intermodel"
		assert.ok ret.Application is "singleObservable", "single"
		assert.ok ret.Sites is "manyObservable", "many sites"
		assert.ok ret.Products is "manyObservable", "many products"
		

	QUnit.test "store merge data runtime command instance" , sinon.test (assert)->


		observableExtensionsStub=
			modelExtensions:
				history:
					rootObservable:@stub().returns "historyObservable"
				RuntimeContext:
					interModelRelationObservable:@stub().returns "interModelRelationObservable"
					manyObservable:@stub().returns "manyObservable"
					flexibleRelationObservable:@stub().returns "flexibleObservable"
					singleObservable:@stub().returns "singleObservable"
		@stub observableExtensionsStubber, "getMe", ->observableExtensionsStub
		
		md = runtimeMetaData.getMe()
		tested = new (store.getMe()) md.schema
		
		ret = tested.mergeData 'RuntimeCommandInstance', 
			Id:1
			Name:'rci'
			Description :'desc'
		assert.ok ret.Parent is "flexibleObservable", "flexibleObservable"
		assert.ok ret._histories.HistoryCommandInstance is "historyObservable"

		
	QUnit.test "store merge data history alarm" , sinon.test (assert)->


		observableExtensionsStub=
			modelExtensions:
				runtime:
					rootObservable:@stub().returns "runtimeRootObservable"
				HistoryContext:
					interModelRelationObservable:@stub().returns "interModelRelationObservable"
					manyObservable:@stub().returns "manyObservable"
					flexibleRelationObservable:@stub().returns "flexibleObservable"
					singleObservable:@stub().returns "singleObservable"
		@stub observableExtensionsStubber, "getMe", ->observableExtensionsStub
		
		md = historyMetaData.getMe()
		tested = new (store.getMe()) md.schema
		
		ret = tested.mergeData 'HistoryAlarm', 
			Id:1
			RuntimeId:22
			Name:'h alarm'
			Description :'desc'

		assert.ok ret._runtime is "runtimeRootObservable"
		

	QUnit.test "store new data enterprise" , sinon.test (assert)->


		observableExtensionsStub=
			modelExtensions:
				ConfigurationContext:
					interModelRelationObservable:@stub().returns "interModelRelationObservable"
					manyObservable:@stub().returns "manyObservable"
					singleObservable:@stub().returns "singleObservable"
		@stub observableExtensionsStubber, "getMe", ->observableExtensionsStub
		
		md = configurationMetaData.getMe()
		tested = new (store.getMe()) md.schema
		
		ret = tested.changeData 1, 'Enterprise', 
			Id:1
			Name:'enterprise'
			Description :'desc'
			Timestamp:"AAAAAAAGgBo="

		assert.ok ret.id==1, "return id"
		assert.ok ret.type=="Enterprise", "return type"
		assert.ok ret.value.Name is 'enterprise', "return value"
		assert.ok ret.Application = "singleObservable", "return value processed"

		
	QUnit.test "change data enterprise same timestamp" , sinon.test (assert)->


		observableExtensionsStub=
			modelExtensions:
				ConfigurationContext:
					interModelRelationObservable:@stub().returns "interModelRelationObservable"
					manyObservable:@stub().returns "manyObservable"
					singleObservable:@stub().returns "singleObservable"
		@stub observableExtensionsStubber, "getMe", ->observableExtensionsStub
		
		md = configurationMetaData.getMe()
		tested = new (store.getMe()) md.schema
		
		ret = tested.changeData 1, 'Enterprise', 
			Id:1
			Name:'enterprise'
			Description :'desc'
			Timestamp:"AAAAAAAGgBo="


		ret = tested.changeData 1, 'Enterprise', 
			Id:1
			Name:'enterprise1'
			Description :'desc'
			Timestamp:"AAAAAAAGgBo="

		assert.ok ret.value.Name is 'enterprise', "return value not changed"
		
	QUnit.test "change data enterprise new timestamp" , sinon.test (assert)->


		observableExtensionsStub=
			modelExtensions:
				ConfigurationContext:
					interModelRelationObservable:@stub().returns "interModelRelationObservable"
					manyObservable:@stub().returns "manyObservable"
					singleObservable:@stub().returns "singleObservable"
		@stub observableExtensionsStubber, "getMe", ->observableExtensionsStub
		
		md = configurationMetaData.getMe()
		tested = new (store.getMe()) md.schema
		
		ret = tested.changeData 1, 'Enterprise', 
			Id:1
			Name:'enterprise'
			Description :'desc'
			Timestamp:"AAAAAAAGgBo="


		ret = tested.changeData 1, 'Enterprise', 
			Id:1
			Name:'enterprise1'
			Description :'desc'
			Timestamp:"AAAAAAAGj7E="

		assert.ok ret.value.Name is 'enterprise1', "return value not changed"

	QUnit.test "change application enterprises new data" , sinon.test (assert)->


		observableExtensionsStub=
			modelExtensions:
				ConfigurationContext:
					interModelRelationObservable:@stub().returns "interModelRelationObservable"
					manyObservable:@stub().returns "manyObservable"
					singleObservable:@stub().returns "singleObservable"
		@stub observableExtensionsStubber, "getMe", ->observableExtensionsStub
		
		md = configurationMetaData.getMe()
		tested = new (store.getMe()) md.schema
		
		ret = tested.changeData 1, 'Application.Enterprises', 
			Id:22
			Name:'enterprise'
			Description :'desc'
			Timestamp:"AAAAAAAGgBo="


		assert.ok ret.id==1, "return id"
		assert.ok ret.type=="Application.Enterprises", "return type"
		assert.ok ret.value.Name is 'enterprise', "return value"
		assert.ok ret.Application = "singleObservable", "return value processed"

	QUnit.test "delete enterprise" , sinon.test (assert)->


		observableExtensionsStub=
			modelExtensions:
				ConfigurationContext:
					interModelRelationObservable:@stub().returns "interModelRelationObservable"
					manyObservable:@stub().returns "manyObservable"
					singleObservable:@stub().returns "singleObservable"
		@stub observableExtensionsStubber, "getMe", ->observableExtensionsStub
		
		md = configurationMetaData.getMe()
		tested = new (store.getMe()) md.schema
		
		ret = tested.changeData 1, 'Application.Enterprises', 
			Id:22
			Name:'enterprise'
			Description :'desc'
			Timestamp:"AAAAAAAGgBo="
		
		ret = tested.deleteData 1, 'Application.Enterprises', 
			Id:22
			Name:'enterprise'
			Description :'desc'
			Timestamp:"AAAAAAAGgBo="

		assert.ok ret.id==1, "return id"
		assert.ok ret.type=="Application.Enterprises", "return type"
		assert.ok ret.value.Name is 'enterprise', "return value"
		
		