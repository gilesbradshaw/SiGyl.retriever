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
      "rx.binding": "rx/rx.binding",
      linq: "linqjs-amd",
      sinon: "sinon-1.10.3",
      sinonie: "sinon-ie-1.10.3",
      Q: "q",
      jquery: "jquery-2.1.1",
      breeze: "breeze.debug",
      knockout: "knockout-3.2.0.debug",
      "knockout.punches": "knockout.punches",
      observableExtensions: "app/newobservableExtensions/observableExtensions",
      "observableExtensions.listener": "App/ObservableExtensions/listener",
      "utils": "app/utils"
    }
  });

  require(["rx", "Q", "rx.binding"], function(rx, Q) {
    var breezeEntityManagers, retrieveSubjects, retriever;
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
      },
      retrieve: function(query) {
        var deferred;
        deferred = Q.defer();
        setTimeout(function() {
          return deferred.resolve(["retrieve returns data for " + query]);
        }, 10);
        return deferred.promise;
      }
    };
    define("retriever", [], function() {
      return {
        getMe: function() {
          return retriever;
        },
        initMe: function() {
          return Q();
        }
      };
    });
    breezeEntityManagers = {
      getStore: function(type) {},
      getType: function(type) {},
      getCollectionType: function(type) {}
    };
    define("breezeEntityManagers", [], function() {
      return {
        getMe: Q(breezeEntityManagers)
      };
    });
    return require(["linq", "knockout", "observableExtensions", "knockout.punches", "sinon", "sinonie", "retriever"], function(linq, ko, observableExtensions, configurationMetaData, runtimeMetaData, historyMetaData, utils) {
      ko.punches.enableAll();
      QUnit.asyncTest("check linq", function(assert) {
        var clock, received1, received2, sandbox;
        sandbox = sinon.sandbox.create();
        clock = sandbox.useFakeTimers();
        received1 = [];
        received2 = 0;
        sandbox.spy(retriever, "subscriber");
        sandbox.spy(retriever, "retrieve");
        observableExtensions.initMe().then(function() {
          var subscription;
          subscription = observableExtensions.getMe().testManyObservable("rsub")().root.base("base!!!").order("order!!!!!!!!").retrieve().retrieved().subscribe(function(data) {
            return received1 = data;
          });
          assert.ok(received1.length === 0, "no data received yet");
          assert.ok(retriever.subscriber.calledOnce, "we have subscribed to the retriever");
          assert.equal(retriever.subscriber.args[0][0], "rsub", "we've subscribed to the rsub definition");
          assert.ok(!retriever.retrieve.called, "we have not yet retrieved from the retriever");
          clock.tick(1);
          clock.restore();
          setTimeout(function() {
            clock = sandbox.useFakeTimers();
            assert.ok(retriever.retrieve.calledOnce, "we have called retrieve on the retriever");
            assert.equal(retriever.retrieve.args[0][0], "initialQuery from base base!!! from order order!!!!!!!!", "query passed to retriever");
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
  });

}).call(this);
