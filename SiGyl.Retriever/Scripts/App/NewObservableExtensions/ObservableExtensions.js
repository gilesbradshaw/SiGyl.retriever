(function() {
  define(["knockout", "Q", "linq", "utils", "rx", "knockout.rx", "observableExtensions.listener"], function(ko, Q, linq, utils, rx) {
    var base, createBaseObservable, entityManager, get, observableExtensions, orderBy, skip, take;
    get = function(baseObservable, initialData) {
      return {
        get: function() {
          baseObservable.buildQuery();
          return {
            got: baseObservable.observable.toKoObservable(initialData)
          };
        }
      };
    };
    base = (function(_this) {
      return function(baseObservable) {
        return {
          base: function(name) {
            ko.utils.unwrapObservable(name);
            baseObservable.makeQuery(function(query) {
              return query.where("Name", "startsWith", "N");
            });
            return this;
          }
        };
      };
    })(this);
    orderBy = (function(_this) {
      return function(baseObservable) {
        return {
          orderBy: function(field) {
            baseObservable.makeQuery(function(query) {
              return query.orderBy("" + (ko.utils.unwrapObservable(field)) + " desc");
            });
            return this;
          }
        };
      };
    })(this);
    skip = (function(_this) {
      return function(baseObservable) {
        return {
          skip: function(count) {
            baseObservable.makeQuery(function(query) {
              return query.skip(ko.utils.unwrapObservable(count));
            });
            return this;
          }
        };
      };
    })(this);
    take = (function(_this) {
      return function(baseObservable) {
        return {
          take: function(count) {
            baseObservable.makeQuery(function(query) {
              return query.take(ko.utils.unwrapObservable(count));
            });
            return this;
          }
        };
      };
    })(this);
    ko.extenders.get = function(target, options) {
      target.get = function(name) {
        options.get();
        return {
          got: function() {
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
    createBaseObservable = function(data, subscriptionDefinition, changeDataProcessor, baseQuery, typeManager) {
      var myQuery, observable, _mergeFuncs, _queryFuncs;
      _queryFuncs = [];
      _mergeFuncs = [];
      myQuery = void 0;
      observable = rx.Observable.create(function(observer) {
        var disposer, filterFunction, toOrderByComparer;
        disposer = void 0;
        filterFunction = myQuery._toFilterFunction(typeManager.breezeEntityType);
        toOrderByComparer = myQuery._toOrderByComparer(typeManager.breezeEntityType);
        entityManager.subscriber(subscriptionDefinition()).then(function(sub) {
          var execute, preChanged, preDeleted;
          preChanged = [];
          preDeleted = [];
          execute = function() {
            var qex;
            qex = typeManager.executeQuery(myQuery);
            qex.then(function(gotData) {
              var changeResult;
              changeResult = changeDataProcessor(data, gotData.storedResults, preChanged, preDeleted);
              data = changeResult.data;
              observer.onNext(data);
              preChanged = void 0;
              return preDeleted = void 0;
            });
            return qex.fail(function(err) {
              return alert(err);
            });
          };
          execute();
          return disposer = sub().subscribe(function(x) {
            var changeResult, deleted, index, needsSorting, _i, _ref;
            deleted = x.deleted;
            if (x.changed) {
              if (!filterFunction(x.changed)) {
                deleted = x.changed;
              } else {
                if (preChanged) {
                  preChanged.push(x.changed);
                } else {
                  changeResult = changeDataProcessor(data, void 0, [x.changed]);
                  data = changeResult.data;
                }
              }
            }
            if (deleted) {
              if (preDeleted) {
                preDeleted.push(deleted);
              } else {
                changeResult = changeDataProcessor(data, void 0, void 0, [deleted]);
                data = changeResult.data;
              }
            }
            if (changeResult) {
              if (data instanceof Array) {
                for (index = _i = 0, _ref = data.length - 2; 0 <= _ref ? _i <= _ref : _i >= _ref; index = 0 <= _ref ? ++_i : --_i) {
                  if (toOrderByComparer(data[index], data[index + 1]) > 0) {
                    needsSorting = true;
                    data.sort(toOrderByComparer);
                    index = data.length - 2;
                  }
                }
                if (myQuery.skipCount && data.indexOf(x.changed) === 0) {
                  execute();
                  return;
                } else {
                  if (myQuery.takeCount) {
                    if (data.length > myQuery.takeCount) {
                      data.splice(data.length - 1, 1);
                    }
                  }
                }
              }
            }
            if (changeResult.changed || needsSorting) {
              return observer.onNext(data);
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
        observable: observable,
        buildQuery: function() {
          myQuery = _queryFuncs.reduce((function(q, fn) {
            return fn(q);
          }), baseQuery());
          return _queryFuncs = [];
        },
        makeQuery: function(queryFunc) {
          return _queryFuncs.push(queryFunc);
        },
        makeMergeFunc: function(mergeFunc) {
          return _mergeFuncs.push(mergeFunc);
        }
      };
    };
    observableExtensions = {
      testManyObservable: function(subscriptionDefinition, type) {
        return function() {
          var observable;
          observable = createBaseObservable(ko.observableArray, function() {
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
              get: {
                get: observable.get
              }
            })
          };
        };
      },
      rootObservable: function(id, type) {
        return function() {
          var baseObservable, typeManager;
          typeManager = entityManager.getType(type);
          baseObservable = createBaseObservable(void 0, function() {
            return "" + type + ":.:" + id;
          }, function(data, items, changeItems, deleteItems) {
            var item, oldItem;
            oldItem = data;
            if (items && items.length) {
              item = items[items.length - 1];
            }
            if (changeItems && changeItems.length) {
              item = changeItems[changeItems.length - 1];
            }
            if (item !== oldItem) {
              return {
                changed: true,
                data: item
              };
            } else {
              return {
                changed: false,
                data: item
              };
            }
          }, function() {
            var query;
            query = typeManager.query();
            query = query.where("Id", "==", id);
            return query;
          }, typeManager);
          return $.extend({}, get(baseObservable));
        };
      },
      manyObservable: function(item, type, collection) {
        return function() {
          var baseObservable, typeManager;
          typeManager = (entityManager.getType(type)).collectionManager(collection);
          baseObservable = createBaseObservable([], function() {
            return typeManager.subscriptionDefinition(item);
          }, function(data, items, changeItems, deleteItems) {
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
            return {
              changed: changed,
              data: data
            };
          }, function() {
            var query;
            return query = typeManager.query(item.Id());
          }, typeManager);
          return $.extend({}, get(baseObservable, []), base(baseObservable), orderBy(baseObservable), skip(baseObservable), take(baseObservable));
        };
      },
      singleObservable: function(item, property, entityType) {
        return function() {
          var baseObservable, typeManager;
          typeManager = (entityManager.getType(entityType.name)).singleManager(property);
          baseObservable = createBaseObservable(void 0, function() {
            return typeManager.subscriptionDefinition(item);
          }, function(data, items, changeItems, deleteItems) {
            var i, oldItem;
            oldItem = data;
            if (items && items.length) {
              i = items[items.length - 1];
            }
            if (changeItems && changeItems.length) {
              i = changeItems[changeItems.length - 1];
            }
            if (oldItem !== i) {
              return {
                changed: true,
                data: i
              };
            } else {
              return {
                changed: false,
                data: i
              };
            }
          }, function() {
            var query;
            return query = typeManager.query(item);
          }, typeManager);
          return $.extend({}, get(baseObservable));
        };
      }
    };
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
            return deferred.resolve();
          });
        });
        return deferred.promise;
      }
    };
  });

}).call(this);
