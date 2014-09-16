(function() {
  var observableExtensionsStubber;

  requirejs.config({
    baseUrl: '../scripts',
    map: {
      '*': {
        ko: 'knockout'
      }
    },
    shim: {
      breeze: ['Q', 'jquery', 'knockout']
    },
    paths: {
      linq: "linqjs-amd",
      sinon: "sinon-1.9.1",
      knockout: "knockout-3.2.0.debug",
      store: "App/store",
      b64: "App/b64",
      configurationMetaData: "tests/metaData/configuration",
      runtimeMetaData: "tests/metaData/runtime",
      historyMetaData: "tests/metaData/history",
      utils: "App/utils"
    }
  });

  observableExtensionsStubber = {
    getMe: function() {}
  };

  define("observableExtensions", [], function() {
    return observableExtensionsStubber;
  });

  require(["store", "configurationMetaData", "runtimeMetaData", "historyMetaData", "sinon"], function(store, configurationMetaData, runtimeMetaData, historyMetaData) {
    QUnit.test("check sinon", function(assert) {
      return assert.ok(sinon, 'sinon installed');
    });
    QUnit.test("check store", function(assert) {
      return assert.ok(store, 'store installed');
    });
    QUnit.test("store merge data enterprise", sinon.test(function(assert) {
      var md, observableExtensionsStub, ret, tested;
      observableExtensionsStub = {
        modelExtensions: {
          ConfigurationContext: {
            interModelRelationObservable: this.stub().returns("interModelRelationObservable"),
            manyObservable: this.stub().returns("manyObservable"),
            singleObservable: this.stub().returns("singleObservable")
          }
        }
      };
      this.stub(observableExtensionsStubber, "getMe", function() {
        return observableExtensionsStub;
      });
      md = configurationMetaData.getMe();
      tested = new (store.getMe())(md.schema);
      ret = tested.mergeData('Enterprise', {
        Id: 1,
        Name: 'enterprise',
        Description: 'desc'
      });
      assert.ok(ret.RuntimeEnterprise === "interModelRelationObservable", "intermodel");
      assert.ok(ret.Application === "singleObservable", "single");
      assert.ok(ret.Sites === "manyObservable", "many sites");
      return assert.ok(ret.Products === "manyObservable", "many products");
    }));
    QUnit.test("store merge data runtime command instance", sinon.test(function(assert) {
      var md, observableExtensionsStub, ret, tested;
      observableExtensionsStub = {
        modelExtensions: {
          history: {
            rootObservable: this.stub().returns("historyObservable")
          },
          RuntimeContext: {
            interModelRelationObservable: this.stub().returns("interModelRelationObservable"),
            manyObservable: this.stub().returns("manyObservable"),
            flexibleRelationObservable: this.stub().returns("flexibleObservable"),
            singleObservable: this.stub().returns("singleObservable")
          }
        }
      };
      this.stub(observableExtensionsStubber, "getMe", function() {
        return observableExtensionsStub;
      });
      md = runtimeMetaData.getMe();
      tested = new (store.getMe())(md.schema);
      ret = tested.mergeData('RuntimeCommandInstance', {
        Id: 1,
        Name: 'rci',
        Description: 'desc'
      });
      assert.ok(ret.Parent === "flexibleObservable", "flexibleObservable");
      return assert.ok(ret._histories.HistoryCommandInstance === "historyObservable");
    }));
    QUnit.test("store merge data history alarm", sinon.test(function(assert) {
      var md, observableExtensionsStub, ret, tested;
      observableExtensionsStub = {
        modelExtensions: {
          runtime: {
            rootObservable: this.stub().returns("runtimeRootObservable")
          },
          HistoryContext: {
            interModelRelationObservable: this.stub().returns("interModelRelationObservable"),
            manyObservable: this.stub().returns("manyObservable"),
            flexibleRelationObservable: this.stub().returns("flexibleObservable"),
            singleObservable: this.stub().returns("singleObservable")
          }
        }
      };
      this.stub(observableExtensionsStubber, "getMe", function() {
        return observableExtensionsStub;
      });
      md = historyMetaData.getMe();
      tested = new (store.getMe())(md.schema);
      ret = tested.mergeData('HistoryAlarm', {
        Id: 1,
        RuntimeId: 22,
        Name: 'h alarm',
        Description: 'desc'
      });
      return assert.ok(ret._runtime === "runtimeRootObservable");
    }));
    QUnit.test("store new data enterprise", sinon.test(function(assert) {
      var md, observableExtensionsStub, ret, tested;
      observableExtensionsStub = {
        modelExtensions: {
          ConfigurationContext: {
            interModelRelationObservable: this.stub().returns("interModelRelationObservable"),
            manyObservable: this.stub().returns("manyObservable"),
            singleObservable: this.stub().returns("singleObservable")
          }
        }
      };
      this.stub(observableExtensionsStubber, "getMe", function() {
        return observableExtensionsStub;
      });
      md = configurationMetaData.getMe();
      tested = new (store.getMe())(md.schema);
      ret = tested.changeData(1, 'Enterprise', {
        Id: 1,
        Name: 'enterprise',
        Description: 'desc',
        Timestamp: "AAAAAAAGgBo="
      });
      assert.ok(ret.id === 1, "return id");
      assert.ok(ret.type === "Enterprise", "return type");
      assert.ok(ret.value.Name === 'enterprise', "return value");
      return assert.ok(ret.Application = "singleObservable", "return value processed");
    }));
    QUnit.test("change data enterprise same timestamp", sinon.test(function(assert) {
      var md, observableExtensionsStub, ret, tested;
      observableExtensionsStub = {
        modelExtensions: {
          ConfigurationContext: {
            interModelRelationObservable: this.stub().returns("interModelRelationObservable"),
            manyObservable: this.stub().returns("manyObservable"),
            singleObservable: this.stub().returns("singleObservable")
          }
        }
      };
      this.stub(observableExtensionsStubber, "getMe", function() {
        return observableExtensionsStub;
      });
      md = configurationMetaData.getMe();
      tested = new (store.getMe())(md.schema);
      ret = tested.changeData(1, 'Enterprise', {
        Id: 1,
        Name: 'enterprise',
        Description: 'desc',
        Timestamp: "AAAAAAAGgBo="
      });
      ret = tested.changeData(1, 'Enterprise', {
        Id: 1,
        Name: 'enterprise1',
        Description: 'desc',
        Timestamp: "AAAAAAAGgBo="
      });
      return assert.ok(ret.value.Name === 'enterprise', "return value not changed");
    }));
    QUnit.test("change data enterprise new timestamp", sinon.test(function(assert) {
      var md, observableExtensionsStub, ret, tested;
      observableExtensionsStub = {
        modelExtensions: {
          ConfigurationContext: {
            interModelRelationObservable: this.stub().returns("interModelRelationObservable"),
            manyObservable: this.stub().returns("manyObservable"),
            singleObservable: this.stub().returns("singleObservable")
          }
        }
      };
      this.stub(observableExtensionsStubber, "getMe", function() {
        return observableExtensionsStub;
      });
      md = configurationMetaData.getMe();
      tested = new (store.getMe())(md.schema);
      ret = tested.changeData(1, 'Enterprise', {
        Id: 1,
        Name: 'enterprise',
        Description: 'desc',
        Timestamp: "AAAAAAAGgBo="
      });
      ret = tested.changeData(1, 'Enterprise', {
        Id: 1,
        Name: 'enterprise1',
        Description: 'desc',
        Timestamp: "AAAAAAAGj7E="
      });
      return assert.ok(ret.value.Name === 'enterprise1', "return value not changed");
    }));
    QUnit.test("change application enterprises new data", sinon.test(function(assert) {
      var md, observableExtensionsStub, ret, tested;
      observableExtensionsStub = {
        modelExtensions: {
          ConfigurationContext: {
            interModelRelationObservable: this.stub().returns("interModelRelationObservable"),
            manyObservable: this.stub().returns("manyObservable"),
            singleObservable: this.stub().returns("singleObservable")
          }
        }
      };
      this.stub(observableExtensionsStubber, "getMe", function() {
        return observableExtensionsStub;
      });
      md = configurationMetaData.getMe();
      tested = new (store.getMe())(md.schema);
      ret = tested.changeData(1, 'Application.Enterprises', {
        Id: 22,
        Name: 'enterprise',
        Description: 'desc',
        Timestamp: "AAAAAAAGgBo="
      });
      assert.ok(ret.id === 1, "return id");
      assert.ok(ret.type === "Application.Enterprises", "return type");
      assert.ok(ret.value.Name === 'enterprise', "return value");
      return assert.ok(ret.Application = "singleObservable", "return value processed");
    }));
    return QUnit.test("delete enterprise", sinon.test(function(assert) {
      var md, observableExtensionsStub, ret, tested;
      observableExtensionsStub = {
        modelExtensions: {
          ConfigurationContext: {
            interModelRelationObservable: this.stub().returns("interModelRelationObservable"),
            manyObservable: this.stub().returns("manyObservable"),
            singleObservable: this.stub().returns("singleObservable")
          }
        }
      };
      this.stub(observableExtensionsStubber, "getMe", function() {
        return observableExtensionsStub;
      });
      md = configurationMetaData.getMe();
      tested = new (store.getMe())(md.schema);
      ret = tested.changeData(1, 'Application.Enterprises', {
        Id: 22,
        Name: 'enterprise',
        Description: 'desc',
        Timestamp: "AAAAAAAGgBo="
      });
      ret = tested.deleteData(1, 'Application.Enterprises', {
        Id: 22,
        Name: 'enterprise',
        Description: 'desc',
        Timestamp: "AAAAAAAGgBo="
      });
      assert.ok(ret.id === 1, "return id");
      assert.ok(ret.type === "Application.Enterprises", "return type");
      return assert.ok(ret.value.Name === 'enterprise', "return value");
    }));
  });

}).call(this);
