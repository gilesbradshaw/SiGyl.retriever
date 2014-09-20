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
      "knockout.rx": "sigyl.knockout.rx",
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

  require(["rx.binding", "Q", "linq", "knockout", "observableExtensions", "retriever", "breezeEntityManagers", "knockout.punches", "sinon", "sinonie"], function(rx, Q, linq, ko, observableExtensions, _retriever, breezeEntityManagers) {
    var brGetType, retrieveSubjects, retriever;
    retrieveSubjects = {};
    retriever = {
      subscriber: function(subscriptionDefinition) {
        var subject;
        if (!retrieveSubjects[subscriptionDefinition]) {
          subject = rx.Observable.create(function(observer) {
            retrieveSubjects[subscriptionDefinition].observer = observer;
            return function() {
              return delete retrieveSubjects[subscriptionDefinition];
            };
          });
          retrieveSubjects[subscriptionDefinition] = {
            subject: subject,
            share: subject.share(),
            subscriptionDeferred: Q.defer()
          };
          setTimeout(function() {
            if (retrieveSubjects[subscriptionDefinition]) {
              return retrieveSubjects[subscriptionDefinition].subscriptionDeferred.resolve(function() {
                return retrieveSubjects[subscriptionDefinition].share;
              });
            }
          }, 1);
        }
        return retrieveSubjects[subscriptionDefinition].subscriptionDeferred.promise;
      }
    };
    sinon.stub(_retriever, "initMe", function() {
      return Q();
    });
    sinon.stub(_retriever, "getMe", function() {
      return retriever;
    });
    sinon.stub(breezeEntityManagers, "getMe", function() {
      return Q({
        getType: function() {
          return {
            executeQuery: brGetType.executeQuery
          };
        }
      });
    });
    brGetType = {
      executeQuery: function(query) {
        var deferred;
        deferred = Q.defer();
        setTimeout(function() {
          return deferred.resolve({
            results: ["retrieve returns data for " + query]
          });
        }, 10);
        return deferred.promise;
      }
    };
    ko.punches.enableAll();
    QUnit.asyncTest("subscribe and fetch", function(assert) {
      var clock, received1, received2, sandbox;
      sandbox = sinon.sandbox.create();
      clock = sandbox.useFakeTimers();
      received1 = [];
      received2 = 0;
      sandbox.spy(retriever, "subscriber");
      sandbox.spy(brGetType, "executeQuery");
      observableExtensions.initMe().then(function() {
        var subscription;
        subscription = observableExtensions.getMe().testManyObservable("rsub")().root.base("base!!!").order("order!!!!!!!!").retrieve().retrieved().subscribe(function(data) {
          return received1 = data;
        });
        assert.ok(received1.length === 0, "no data received yet");
        assert.ok(retriever.subscriber.calledOnce, "we have subscribed to the retriever");
        assert.equal(retriever.subscriber.args[0][0], "rsub", "we've subscribed to the rsub definition");
        assert.ok(!brGetType.executeQuery.called, "we have not yet retrieved from the retriever");
        clock.tick(1);
        clock.restore();
        setTimeout(function() {
          clock = sandbox.useFakeTimers();
          assert.ok(brGetType.executeQuery.calledOnce, "we have called retrieve on the retriever");
          assert.equal(brGetType.executeQuery.args[0][0], "initialQuery from base base!!! from order order!!!!!!!!", "query passed to retriever");
          assert.ok(received1.length === 0, "still no data");
          clock.tick(20);
          retrieveSubjects.rsub.observer.onNext("yabba 1");
          retrieveSubjects.rsub.observer.onNext("yabba 2");
          clock.restore();
          return setTimeout(function() {
            clock = sandbox.useFakeTimers();
            assert.ok(received1.length === 3, "data");
            assert.ok(received1[0] === "retrieve returns data for initialQuery from base base!!! from order order!!!!!!!!", "received data applied");
            assert.ok(received1[1] === "yabba 1", "published data applied");
            assert.ok(received1[2] === "yabba 2", "published data applied");
            sandbox.restore();
            return QUnit.start();
          }, 20);
        }, 1);
        return;
        return setTimeout(function() {
          retrieveSubjects.rsub.observer.onNext('yabadabadaba');
          subscription2.dispose();
          retrieveSubjects.rsub.observer.onNext('yabfevadabadaba');
          subscription.dispose();
          assert.ok(received1 === 3);
          assert.ok(received2 === 2);
          assert.ok(retrieveSubjects.rsub === void 0);
          return QUnit.start();
        }, 1000);
      });
      return clock.tick(4);
    });
    return QUnit.asyncTest("bind to dom", function(assert) {
      return observableExtensions.initMe().then(function() {
        var x;
        x = 0;
        setInterval(function() {
          if (retrieveSubjects.rsub && retrieveSubjects.rsub.observer) {
            return retrieveSubjects.rsub.observer.onNext("yabadabadaba " + (x++));
          }
        }, 1000);
        return ko.applyBindings({
          base1: ko.observable('base1'),
          base2: ko.observable('base2'),
          order1: ko.observable('order1'),
          order2: ko.observable('order2'),
          sub1: observableExtensions.getMe().testManyObservable("rsub"),
          sub2: observableExtensions.getMe().testManyObservable("rsub")
        });
      });
    });
  });

}).call(this);
