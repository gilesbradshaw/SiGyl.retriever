(function() {
  requirejs.config({
    baseUrl: '../scripts',
    map: {
      '*': {
        ko: 'knockout'
      }
    },
    shim: {
      breeze: ['Q', 'jquery', 'knockout'],
      sinonie: ['sinon'],
      sigr: ["jquery"]
    },
    paths: {
      linq: "linqjs-amd",
      sinon: "sinon-1.10.3",
      sinonie: "sinon-ie-1.10.3",
      Q: "q",
      jquery: "jquery-2.1.1",
      sigr: "jquery.signalR-2.1.2",
      breeze: "breeze.debug",
      knockout: "knockout-3.2.0.debug",
      "knockout.mapping": "knockout.mapping-latest",
      "knockout.punches": "knockout.punches",
      observableExtensions: "app/observableExtensions/observableExtensions",
      configurationMetaData: "Tests/metadata/configuration",
      runtimeMetaData: "Tests/metadata/runtime",
      historyMetaData: "Tests/metadata/history",
      utils: "App/utils",
      "observableExtensions.listener": "App/ObservableExtensions/listener",
      "observableExtensions.base": "App/ObservableExtensions/base",
      "observableExtensions.order": "App/ObservableExtensions/order",
      "observableExtensions.filter": "App/ObservableExtensions/filter",
      "observableExtensions.page": "App/ObservableExtensions/page",
      "observableExtensions.title": "App/ObservableExtensions/title",
      "observableExtensions.selectMany": "App/ObservableExtensions/selectMany",
      "observableExtensions.selectSingle": "App/ObservableExtensions/selectSingle",
      "observableExtensions.select": "App/ObservableExtensions/select",
      "observableExtensions.mixinTo": "App/ObservableExtensions/mixinTo",
      "observableExtensions.extender": "App/ObservableExtensions/extender"
    }
  });

  require(["Q"], function(Q) {
    var listenTokenStubber, listenerStubber, retrieverStubber;
    listenTokenStubber = {
      getDataMerge: function() {},
      getRetrieveRequest: function() {},
      modifyRetrieveRequest: function() {}
    };
    define("listenToken", [], function() {
      return {
        getMe: function() {
          return function(retriever, data) {
            listenTokenStubber.retriever = retriever;
            listenTokenStubber.data = data;
            return listenTokenStubber;
          };
        },
        initMe: function() {
          return Q();
        }
      };
    });
    retrieverStubber = {};
    define("retriever", [], function() {
      return {
        getMe: function() {
          return retrieverStubber;
        },
        initMe: function() {
          return Q();
        }
      };
    });
    listenerStubber = {
      listen: function() {},
      cycle: function() {}
    };
    define("listener", [], function() {
      return {
        getMe: function() {
          return listenerStubber;
        },
        initMe: function() {
          return Q();
        }
      };
    });
    return require(["linq", "knockout", "observableExtensions", "configurationMetaData", "runtimeMetaData", "historyMetaData", "utils", "sinon", "sinonie"], function(linq, ko, observableExtensions, configurationMetaData, runtimeMetaData, historyMetaData, utils) {
      return QUnit.asyncTest("check linq", function(assert) {
        var model, sandbox;
        sandbox = sinon.sandbox.create();
        sandbox.stub(listenTokenStubber, "getRetrieveRequest", function() {});
        sandbox.stub(listenTokenStubber, "modifyRetrieveRequest", function() {});
        model = utils.getMe().processModel(runtimeMetaData.getMe().schema);
        return observableExtensions.initMe().done(function() {
          return observableExtensions.getMe().create('RuntimeContext', model).done(function() {
            var data, disposer, entityType, singleObservable, tested;
            tested = observableExtensions.getMe().modelExtensions.RuntimeContext;
            data = {
              Id: ko.observable(1)
            };
            entityType = model.entityTypes.RuntimeEnterprise;
            singleObservable = tested.singleObservable(data, "Application", entityType);
            disposer = singleObservable.subscribe(function() {});
            assert.ok(listenTokenStubber.getDataMerge.calledOnce, "getDataMerge");
            assert.ok(listenTokenStubber.getRetrieveRequest.calledOnce, "getRetrieveRequest");
            assert.ok(listenTokenStubber.modifyRetrieveRequest.calledOnce, "modifyRetrieveRequest");
            sandbox.restore();
            return QUnit.start();
          });
        });
      });
    });
  });

}).call(this);
