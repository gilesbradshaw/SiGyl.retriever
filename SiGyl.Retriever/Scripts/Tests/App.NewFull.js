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
      "rx.binding": "rx/rx.binding",
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
      observableExtensions: "app/NewobservableExtensions/observableExtensions",
      configurationMetaData: "Tests/metadata/configuration",
      runtimeMetaData: "Tests/metadata/runtime",
      historyMetaData: "Tests/metadata/history",
      utils: "App/utils",
      "observableExtensions.listener": "App/ObservableExtensions/listener"
    }
  });

  require(["knockout", "linq", "breezeEntityManagers", "Q", "observableExtensions", "rx", "rx.joinpatterns", "knockout.rx", "sinonie", "knockout.punches"], function(ko, linq, Retriever, Q, observableExtensions, rx) {
    ko.punches.enableAll();
    QUnit.asyncTest("fetch and subscribe to data", function(assert) {
      var sandbox;
      sandbox = sinon.sandbox.create();
      return Retriever.initMe(["http://localhost:41374/breeze/configuration", "http://localhost:41374/breeze/runtime", "http://localhost:41374/breeze/history"]).done(function() {
        return observableExtensions.initMe().then(function() {
          var ro, roo;
          ro = observableExtensions.getMe().rootObservable(1, "Enterprise");
          roo = ro().root.retrieve().retrieved();
          return roo.subscribe(function(value) {
            var application, both, koApplication, koSites, sites;
            assert.ok(value.Id() === 1);
            ko.applyBindings(value);
            QUnit.start();
            return;
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
              return QUnit.start();
            });
          });
        });
      });
    });
    return QUnit.asyncTest("bind to dom", function(assert) {
      var sandbox;
      sandbox = sinon.sandbox.create();
      return Retriever.initMe(["http://localhost:41374/breeze/configuration", "http://localhost:41374/breeze/runtime", "http://localhost:41374/breeze/history"]).done(function() {
        return observableExtensions.initMe().then(function() {
          var ro, roo;
          ro = observableExtensions.getMe().rootObservable(384, "Folder");
          roo = ro();
          return ko.applyBindings({
            value: roo,
            hide: ko.observable(false)
          });
        });
      });
    });
  });

}).call(this);
