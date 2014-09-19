(function() {
  define(["knockout", "Q", "linq", "utils", "observableExtensions.listener"], function(ko, Q, linq, utils) {
    var entityManager, genericObservable, observableExtensions, retriever;
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
    genericObservable = function(subscriptionDefinition, dataProcessor, baseQuery, typeManager) {
      var data, preObtained, retrieverPromise, subscribedDeferred, subscribedPromise, _mergeFuncs, _queryFuncs;
      subscribedDeferred = Q.defer();
      subscribedPromise = subscribedDeferred.promise;
      _queryFuncs = [];
      _mergeFuncs = [];
      preObtained = void 0;
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
                return retriever.subscriber(subscriptionDefinition()).then(function(sub) {
                  subscribedDeferred.resolve();
                  return disposer = sub().subscribe(function(x) {
                    if (preObtained) {
                      return preObtained.push(x);
                    } else {
                      return dataProcessor(data, [x]);
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
        }
      });
      return {
        data: data,
        clearQuery: function() {
          _queryFuncs = [];
          if (baseQuery) {
            return _queryFuncs.push(baseQuery());
          }
        },
        makeQuery: function(queryFunc) {
          return _queryFuncs.push(queryFunc);
        },
        makeMergeFunc: function(mergeFunc) {
          return _mergeFuncs.push(mergeFunc);
        },
        retrieve: function() {
          preObtained = [];
          return subscribedPromise.then(function() {
            var myQuery;
            myQuery = _queryFuncs.reduce((function(q, fn) {
              return fn(q);
            }), baseQuery());
            return typeManager.executeQuery(myQuery).then(function(retrievedData) {
              dataProcessor(data, retrievedData.results, preObtained);
              return preObtained = void 0;
            });
          });
        }
      };
    };
    observableExtensions = {
      testManyObservable: function(subscriptionDefinition) {
        return function() {
          var observable;
          observable = genericObservable(function() {
            return subscriptionDefinition;
          }, function(data, item) {
            return data.push(item);
          });
          return {
            root: observable.data.extend({
              base: {
                makeQuery: observable.makeQuery,
                clearQuery: observable.clearQuery
              },
              order: {
                makeQuery: observable.makeQuery
              },
              retrieve: {
                retrieve: observable.retrieve
              }
            })
          };
        };
      },
      rootObservable: function(id, type) {
        return function() {
          var observable, typeManager;
          typeManager = entityManager.getType(type);
          observable = genericObservable(function() {
            return "" + type + ":" + id;
          }, function(data, items, preItems) {
            var item;
            if (items && items.length) {
              item = typeManager.store.mergeData(type, items[items.length - 1]);
            }
            if (preItems && preItems.length) {
              item = typeManager.store.mergeData(type, preItems[items.length - 1]);
            }
            return data(item);
          }, function() {
            var query;
            query = typeManager.query;
            query = query.where("Id", "==", id);
            return query;
          }, typeManager);
          return {
            root: observable.data.extend({
              retrieve: {
                retrieve: observable.retrieve
              }
            })
          };
        };
      }
    };
    retriever = void 0;
    entityManager = void 0;
    return {
      getMe: function() {
        return observableExtensions;
      },
      initMe: function() {
        var deferred;
        deferred = Q.defer();
        require(["breezeEntityManagers"], function(breezeEntityManagers) {
          return breezeEntityManagers.getMe().then(function(em) {
            entityManager = em;
            return require(["retriever"], function(r) {
              retriever = r.getMe();
              return deferred.resolve();
            });
          });
        });
        return deferred.promise;
      }
    };
  });

}).call(this);
