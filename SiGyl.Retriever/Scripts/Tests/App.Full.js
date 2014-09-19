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
      rx: "rx/rx",
      "rx.joinpatterns": "rx/rx.joinpatterns",
      "knockout.rx": "knockout.rx",
      linq: "linqjs-amd",
      sinon: "sinon-1.10.3",
      sinonie: "sinon-ie-1.10.3",
      Q: "q",
      jquery: "jquery-2.1.1",
      sigr: "jquery.signalR-2.1.2",
      retriever: "app/retriever",
      breeze: "breeze.debug",
      knockout: "knockout-3.2.0.debug",
      "knockout.mapping": "knockout.mapping-latest",
      "knockout.punches": "knockout.punches",
      breezeretriever: "App/BreezeRetriever",
      breezeEntityManagers: "App/BreezeEntityManagers",
      store: "App/store",
      b64: "App/b64",
      listener: "App/Listener",
      listenToken: "App/listenToken",
      source: "App/Source",
      observableExtensions: "app/observableExtensions/observableExtensions",
      configurationMetaData: "Tests/metaData/configuration",
      runtimeMetaData: "Tests/metaData/runtime",
      historyMetaData: "Tests/metaData/history",
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

  require(["knockout", "linq", "retriever", "Q", "observableExtensions", "rx", "rx.joinpatterns", "knockout.rx", "sinonie", "knockout.punches"], function(ko, linq, Retriever, Q, observableExtensions, rx) {
    ko.punches.enableAll();
    return QUnit.asyncTest("fetch and subscribe to data", function(assert) {
      var sandbox;
      sandbox = sinon.sandbox.create();
      expect(0);
      return Retriever.initMe(["http://localhost:41374/breeze/configuration", "http://localhost:41374/breeze/runtime", "http://localhost:41374/breeze/history"]).done(function() {
        var ro;
        ro = observableExtensions.getMe().modelExtensions.ConfigurationContext.rootObservable(1, "Enterprise", true);
        return ro.subscribe(function(value) {
          var application, both, koApplication, koSites, sites;
          koSites = value.Sites.any()();
          koApplication = value.Application;
          sites = koSites.toObservableWithReplyLatest().where(function(x) {
            return x;
          });
          application = koApplication.toObservableWithReplyLatest().where(function(x) {
            return x;
          });
          both = rx.Observable.when((sites.and(application)).then(function(site, application) {
            return {
              site: site,
              application: application
            };
          }));
          return both.subscribe(function(xx) {
            sandbox.restore();
            ko.applyBindings(value);
            return QUnit.start();
          });
        });
      });
    });
  });

}).call(this);
