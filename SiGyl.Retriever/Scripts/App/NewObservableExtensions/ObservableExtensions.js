(function() {
  define(["knockout", "Q", "linq", "observableExtensions.listener"], function(ko, Q, linq) {
    var observableExtensions, retriever;
    ko.extenders.retrieve = function(target, options) {
      target.retrieve = function(name) {
        options.retrieve();
        return {
          retrieved: function() {
            return target;
          }
        };
      };
      return target;
    };
    ko.extenders.order = function(target, options) {
      target.order = function(name) {
        ko.utils.unwrapObservable(name);
        options.makeQuery(function(param) {
          return "" + param + " from order " + (ko.utils.unwrapObservable(name));
        });
        return target;
      };
      return target;
    };
    ko.extenders.base = function(target, options) {
      target.base = target.any = function(name) {
        ko.utils.unwrapObservable(name);
        options.clearQuery();
        options.makeQuery(function(param) {
          return "" + param + " from base " + (ko.utils.unwrapObservable(name));
        });
        return target;
      };
      return target;
    };
    observableExtensions = {
      manyObservable: function(subscriptionDefinition) {
        return function() {
          var clearQuery, data, makeMergeFunc, makeQuery, preObtained, retrieve, retrieverPromise, subscribedDeferred, subscribedPromise, _mergeFuncs, _queryFuncs;
          subscribedDeferred = Q.defer();
          subscribedPromise = subscribedDeferred.promise;
          _queryFuncs = [];
          _mergeFuncs = [];
          preObtained = void 0;
          retrieve = function() {
            preObtained = [];
            return subscribedPromise.then(function() {
              var myQuery;
              myQuery = _queryFuncs.reduce((function(q, fn) {
                return fn(q);
              }), "initialQuery");
              return retriever.retrieve(myQuery).then(function(retrievedData) {
                var preob, _i, _len;
                data(retrievedData);
                for (_i = 0, _len = preObtained.length; _i < _len; _i++) {
                  preob = preObtained[_i];
                  data.push(preob);
                }
                return preObtained = void 0;
              });
            });
          };
          clearQuery = function() {
            return _queryFuncs = [];
          };
          makeQuery = function(queryFunc) {
            return _queryFuncs.push(queryFunc);
          };
          makeMergeFunc = function(mergeFunc) {
            return _mergeFuncs.push(mergeFunc);
          };
          retrieverPromise = Q.defer();
          data = ko.observableArray().extend({
            listener: {
              subscribeActions: function() {
                var disposer;
                disposer = void 0;
                return {
                  onSubscribe: function() {
                    var myQuery;
                    myQuery = _queryFuncs.reduce((function(q, fn) {
                      return fn(q);
                    }), "initialQuery");
                    return retriever.subscriber(subscriptionDefinition).then(function(sub) {
                      subscribedDeferred.resolve();
                      return disposer = sub.subscribe(function(x) {
                        if (preObtained) {
                          return preObtained.push(x);
                        } else {
                          return data.push(x);
                        }
                      });
                    });
                  },
                  onDispose: function() {
                    if (disposer) {
                      return disposer.dispose();
                    }
                  }
                };
              }
            },
            base: {
              makeQuery: makeQuery,
              clearQuery: clearQuery
            },
            order: {
              makeQuery: makeQuery
            },
            retrieve: {
              retrieve: retrieve
            }
          });
          return {
            root: data
          };
        };
      }
    };
    retriever = void 0;
    return {
      getMe: function() {
        return observableExtensions;
      },
      initMe: function() {
        var deferred;
        deferred = Q.defer();
        require(["retriever"], function(r) {
          retriever = r.getMe();
          return deferred.resolve();
        });
        return deferred.promise;
      }
    };
  });

}).call(this);
