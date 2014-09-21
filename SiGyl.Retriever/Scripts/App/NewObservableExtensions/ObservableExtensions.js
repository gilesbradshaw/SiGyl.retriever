(function() {
  define(["knockout", "Q", "linq", "utils", "rx", "knockout.rx", "observableExtensions.listener"], function(ko, Q, linq, utils, rx) {
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
        options.makeQuery(function(query) {
          return query.where("Name", "startsWith", "N");
        });
        return target;
      };
      return target;
    };
    genericObservable = function(data, subscriptionDefinition, changeDataProcessor, baseQuery, typeManager) {
      var observable, _mergeFuncs, _queryFuncs;
      _queryFuncs = [];
      _mergeFuncs = [];
      observable = rx.Observable.create(function(observer) {
        var disposer, myQuery;
        disposer = void 0;
        myQuery = _queryFuncs.reduce((function(q, fn) {
          return fn(q);
        }), baseQuery());
        retriever.subscriber(subscriptionDefinition()).then(function(sub) {
          var filterFunction, preChanged, preDeleted, qex;
          preChanged = [];
          preDeleted = [];
          filterFunction = myQuery._toFilterFunction(typeManager.breezeEntityType);
          qex = typeManager.executeQuery(myQuery);
          qex.then(function(retrievedData) {
            data = changeDataProcessor(observer, data, retrievedData.storedResults, preChanged, preDeleted);
            preChanged = void 0;
            return preDeleted = void 0;
          });
          qex.fail(function(err) {
            return alert(err);
          });
          return disposer = sub().subscribe(function(x) {
            var deleted;
            deleted = x.deleted;
            if (x.changed) {
              if (!filterFunction(x.changed)) {
                deleted = x.changed;
              } else {
                if (preChanged) {
                  preChanged.push(x.changed);
                } else {
                  data = changeDataProcessor(observer, data, void 0, [x.changed]);
                }
              }
            }
            if (deleted) {
              if (preDeleted) {
                return preDeleted.push(deleted);
              } else {
                return data = changeDataProcessor(observer, data, void 0, void 0, [deleted]);
              }
            }
          });
        });
        return function() {
          if (disposer) {
            return disposer.dispose();
          }
        };
      });
      return {
        data: observable.toKoObservable(data),
        clearQuery: function() {
          return _queryFuncs = [];
        },
        makeQuery: function(queryFunc) {
          return _queryFuncs.push(queryFunc);
        },
        makeMergeFunc: function(mergeFunc) {
          return _mergeFuncs.push(mergeFunc);
        },
        retrieve: function() {}
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
          observable = genericObservable(void 0, function() {
            return "" + type + ":.:" + id;
          }, function(observer, data, items, changeItems, deleteItems) {
            var item, oldItem;
            oldItem = data;
            if (items && items.length) {
              item = items[items.length - 1];
            }
            if (changeItems && changeItems.length) {
              item = changeItems[changeItems.length - 1];
            }
            if (item !== oldItem) {
              observer.onNext(item);
            }
            return item;
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
          observable = genericObservable([], function() {
            return typeManager.subscriptionDefinition(item);
          }, function(observer, data, items, changeItems, deleteItems) {
            var changed, i, _i, _len, _ref;
            changed = false;
            if (items) {
              data = items;
              changed = true;
            }
            if (changeItems) {
              _ref = linq.From(changeItems).Where(function(ci) {
                return data.indexOf(ci) < 0;
              }).ToArray();
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                i = _ref[_i];
                data.push(i);
                changed = true;
              }
            }
            if (deleteItems) {
              deleteItems.map(function(d) {
                var di;
                if ((di = data.indexOf(d)) >= 0) {
                  data.splice(data.indexOf(i), 1);
                  return changed = true;
                }
              });
            }
            if (changed) {
              observer.onNext(data);
            }
            return data;
          }, function() {
            var query;
            return query = typeManager.query(item.Id());
          }, typeManager);
          return {
            root: observable.data.extend({
              retrieve: {
                retrieve: observable.retrieve
              },
              base: {
                makeQuery: observable.makeQuery,
                clearQuery: observable.clearQuery
              },
              order: {
                makeQuery: observable.makeQuery
              }
            })
          };
        };
      },
      singleObservable: function(item, property, entityType) {
        return function() {
          var observable, typeManager;
          typeManager = (entityManager.getType(entityType.name)).singleManager(property);
          observable = genericObservable(void 0, function() {
            return typeManager.subscriptionDefinition(item);
          }, function(observer, data, items, changeItems, deleteItems) {
            var i, oldItem;
            oldItem = data;
            if (items && items.length) {
              i = items[items.length - 1];
            }
            if (changeItems && changeItems.length) {
              i = changeItems[changeItems.length - 1];
            }
            if (oldItem !== i) {
              observer.onNext(i);
            }
            return i;
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
