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
    genericObservable = function(observableType, subscriptionDefinition, dataProcessor, baseQuery, typeManager) {
      var data, preObtained, retrieverPromise, subscribedDeferred, subscribedPromise, _mergeFuncs, _queryFuncs;
      subscribedDeferred = Q.defer();
      subscribedPromise = subscribedDeferred.promise;
      _queryFuncs = [];
      _mergeFuncs = [];
      preObtained = void 0;
      retrieverPromise = Q.defer();
      data = observableType().extend({
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
          return _queryFuncs = [];
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
            var myQuery, qex;
            myQuery = _queryFuncs.reduce((function(q, fn) {
              return fn(q);
            }), baseQuery());
            qex = typeManager.executeQuery(myQuery);
            qex.then(function(retrievedData) {
              dataProcessor(data, retrievedData.results, preObtained);
              return preObtained = void 0;
            });
            return qex.fail(function(err) {
              return alert(err);
            });
          });
        }
      };
    };
    observableExtensions = {
      testManyObservable: function(subscriptionDefinition, type) {
        return function() {
          var observable;
          observable = genericObservable(ko.observableArray, function() {
            return subscriptionDefinition;
          }, function(data, items, preItems) {
            var item, _i, _j, _len, _len1, _results;
            for (_i = 0, _len = items.length; _i < _len; _i++) {
              item = items[_i];
              data.push(item);
            }
            if (preItems) {
              _results = [];
              for (_j = 0, _len1 = preItems.length; _j < _len1; _j++) {
                item = preItems[_j];
                _results.push(data.push(item));
              }
              return _results;
            }
          }, function() {
            return "initialQuery";
          }, entityManager.getType(type));
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
          observable = genericObservable(ko.observable, function() {
            return "" + type + ":.:" + id;
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
      },
      manyObservable: function(item, type, collection) {
        return function() {
          var collectionManager, observable, typeManager;
          typeManager = entityManager.getType(type);
          collectionManager = typeManager.collectionManager(collection);
          observable = genericObservable(ko.observable, function() {
            return "" + type + ":." + collection + ":" + (item.Id());
          }, function(data, items, preItems) {
            return data(items.map(function(i) {
              return typeManager.store.mergeData(collectionManager.entityType.name, i);
            }));
          }, function() {
            var query;
            return query = collectionManager.query(item.Id());
          }, typeManager);
          return {
            root: observable.data.extend({
              retrieve: {
                retrieve: observable.retrieve
              }
            })
          };
        };
      },
      singleObservable: function(item, property, entityType) {
        return function() {
          var observable, singleManager, typeManager;
          typeManager = entityManager.getType(entityType.name);
          singleManager = typeManager.singleManager(property);
          observable = genericObservable(ko.observable, function() {
            return "" + singleManager.entityType.name + ":.:" + (item.Id());
          }, function(data, items, preItems) {
            if (items && items.length) {
              item = typeManager.store.mergeData(singleManager.entityType.name, items[items.length - 1]);
            }
            if (preItems && preItems.length) {
              item = typeManager.store.mergeData(singleManager.entityType.name, preItems[items.length - 1]);
            }
            return data(item);
          }, function() {
            var query;
            return query = singleManager.query(item);
          }, typeManager);
          return {
            root: observable.data.extend({
              retrieve: {
                retrieve: observable.retrieve
              }
            })
          };
        };
      },
      manyObservable1: function(id, type, collection) {
        return function() {
          return {
            root: ko.observableArray([
              {
                Name: 'ok'
              }, {
                Name: 'ahhh'
              }
            ])
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
        require(["breezeEntityManagers"], function(br) {
          return br.getMe().then(function(em) {
            entityManager = em;
            retriever = em;
            return deferred.resolve();
          });
        });
        return deferred.promise;
      }
    };
  });

}).call(this);
