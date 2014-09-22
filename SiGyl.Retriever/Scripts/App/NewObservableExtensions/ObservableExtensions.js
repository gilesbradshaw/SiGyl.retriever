(function() {
  define(["knockout", "Q", "linq", "utils", "rx", "breeze", "knockout.rx", "observableExtensions.listener"], function(ko, Q, linq, utils, rx, breeze) {
    var createBaseObservable, entityManager, get, observableExtensions, orderBy, selectMany, skip, take, where;
    get = function(baseObservable, initialData) {
      return {
        get: function() {
          return {
            got: baseObservable.observable.toKoObservable(initialData)
          };
        }
      };
    };
    where = (function(_this) {
      return function(baseObservable) {
        return {
          where: function(property, operator, value) {
            baseObservable.makeQuery(function(query) {
              return query.where(property, operator, value);
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
    selectMany = (function(_this) {
      return function(baseObservable) {
        return {
          selectMany: function(collection) {
            var observable;
            baseObservable.buildQuery();
            observable = baseObservable.observable.selectMany(function(x) {
              return rx.Observable.create(function(observer) {
                return observer.onNext(observableExtensions.manyObservable(x, baseObservable.typeManager.entityType.name, collection)());
              });
            });
            return {
              got: observable.toKoObservable()
            };
          }
        };
      };
    })(this);
    createBaseObservable = function(data, subscriptionDefinition, changeDataProcessor, baseQuery, typeManager) {
      var baseObservable, myQuery, observable, _mergeFuncs, _queryFuncs;
      _queryFuncs = [];
      _mergeFuncs = [];
      myQuery = void 0;
      observable = rx.Observable.create(function(observer) {
        var disposer, filterFunction, toOrderByComparer;
        disposer = void 0;
        baseObservable.buildQuery();
        filterFunction = myQuery._toFilterFunction(typeManager.breezeEntityType);
        toOrderByComparer = myQuery._toOrderByComparer(typeManager.breezeEntityType);
        entityManager.subscriber(subscriptionDefinition()).then(function(subs) {
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
          return disposer = rx.Observable.merge(subs.map(function(sub) {
            return sub();
          })).subscribe(function(x) {
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
                  if (data.length > 1 && toOrderByComparer && toOrderByComparer(data[index], data[index + 1]) > 0) {
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
      return baseObservable = {
        typeManager: typeManager,
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
            return ["" + type + ":.:" + id];
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
            query = typeManager.query.where("Id", "==", id);
            return query;
          }, typeManager);
          return $.extend({}, get(baseObservable));
        };
      },
      manyObservable: function(items, type, collection) {
        return function() {
          var baseObservable, typeManager;
          typeManager = (entityManager.getType(type)).collectionManager(collection);
          baseObservable = createBaseObservable([], function() {
            return items.map(function(i) {
              return typeManager.subscriptionDefinition(i);
            });
          }, function(data, newData, changeItems, deleteItems) {
            var changed, i, _i, _len, _ref;
            changed = false;
            if (newData) {
              data = newData;
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
                if ((di = linq.From(data).SingleOrDefault(void 0, function(dd) {
                  return dd.Id() === d.Id();
                }))) {
                  data.splice(data.indexOf(di), 1);
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
            return query = typeManager.query.where(breeze.Predicate.or(items.map(function(i) {
              return typeManager.predicate(i);
            })));
          }, typeManager);
          return $.extend({
            observable: baseObservable.observable
          }, get(baseObservable, []), orderBy(baseObservable), skip(baseObservable), take(baseObservable), where(baseObservable), selectMany(baseObservable));
        };
      },
      singleObservable: function(item, property, entityType) {
        return function() {
          var baseObservable, typeManager;
          typeManager = (entityManager.getType(entityType.name)).singleManager(property);
          baseObservable = createBaseObservable(void 0, function() {
            return [typeManager.subscriptionDefinition(item)];
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
            return query = typeManager.query.where(typeManager.predicate(item));
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
