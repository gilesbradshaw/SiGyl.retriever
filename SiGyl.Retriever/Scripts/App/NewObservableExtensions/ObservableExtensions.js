(function() {
  define(["knockout", "Q", "linq", "utils", "rx", "knockout.rx", "observableExtensions.listener"], function(ko, Q, linq, utils) {
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
    genericObservable = function(observableType, subscriptionDefinition, changeDataProcessor, baseQuery, typeManager) {
      var data, disposer, preChanged, preDeleted, retrieverPromise, _mergeFuncs, _queryFuncs;
      _queryFuncs = [];
      _mergeFuncs = [];
      preChanged = void 0;
      preDeleted = void 0;
      disposer = void 0;
      retrieverPromise = Q.defer();
      data = observableType().extend({
        listener: {
          subscribeActions: function() {
            return {
              onSubscribe: function() {},
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
          var myQuery, preObtained;
          preObtained = [];
          myQuery = _queryFuncs.reduce((function(q, fn) {
            return fn(q);
          }), baseQuery());
          if (disposer) {
            disposer.dispose();
            disposer = void 0;
          }
          return retriever.subscriber(subscriptionDefinition()).then(function(sub) {
            var qex;
            disposer = sub().subscribe(function(x) {
              if (x.changed) {
                if (preChanged) {
                  preChanged.push(x.changed);
                } else {
                  changeDataProcessor(data, void 0, [x.changed]);
                }
              }
              if (x.deleted) {
                if (preDeleted) {
                  return preDeleted.push(x.deleted);
                } else {
                  return changeDataProcessor(data, void 0, void 0, [x.deleted]);
                }
              }
            });
            preChanged = [];
            preDeleted = [];
            qex = typeManager.executeQuery(myQuery);
            qex.then(function(retrievedData) {
              changeDataProcessor(data, retrievedData.storedResults, preObtained, preDeleted);
              preChanged = void 0;
              return preDeleted = void 0;
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
          }, function(data, items, changeItems, deleteItems) {
            var item, _i, _j, _len, _len1, _results;
            for (_i = 0, _len = items.length; _i < _len; _i++) {
              item = items[_i];
              data.push(item);
            }
            if (changeItems) {
              _results = [];
              for (_j = 0, _len1 = changeItems.length; _j < _len1; _j++) {
                item = changeItems[_j];
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
          }, function(data, items, changeItems, deleteItems) {
            var item, oldItem;
            oldItem = data();
            if (items && items.length) {
              item = items[items.length - 1];
            }
            if (changeItems && changeItems.length) {
              item = changeItems[changeItems.length - 1];
            }
            if (item !== oldItem) {
              return data(item);
            }
          }, function() {
            var query;
            query = typeManager.query();
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
          var observable, typeManager;
          typeManager = (entityManager.getType(type)).collectionManager(collection);
          observable = genericObservable(ko.observableArray, function() {
            return typeManager.subscriptionDefinition(item);
          }, function(data, items, changeItems, deleteItems) {
            var i, _i, _j, _len, _len1, _ref, _ref1, _results;
            if (items) {
              data(items);
            }
            if (changeItems) {
              _ref = linq.From(changeItems).Where(function(ci) {
                return data().indexOf(ci) < 0;
              }).ToArray();
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                i = _ref[_i];
                data.push(i);
              }
            }
            if (deleteItems) {
              _ref1 = linq.From(deleteItems).Where(function(ci) {
                return data().indexOf(ci) >= 0;
              }).ToArray();
              _results = [];
              for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                i = _ref1[_j];
                _results.push(data.remove(i));
              }
              return _results;
            }
          }, function() {
            var query;
            return query = typeManager.query(item.Id());
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
          var observable, typeManager;
          typeManager = (entityManager.getType(entityType.name)).singleManager(property);
          observable = genericObservable(ko.observable, function() {
            return typeManager.subscriptionDefinition(item);
          }, function(data, items, changeItems, deleteItems) {
            var i, oldItem;
            oldItem = data();
            if (items && items.length) {
              i = items[items.length - 1];
            }
            if (changeItems && changeItems.length) {
              i = changeItems[changeItems.length - 1];
            }
            if (oldItem !== i) {
              return data(i);
            }
          }, function() {
            var query;
            return query = typeManager.query(item);
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
