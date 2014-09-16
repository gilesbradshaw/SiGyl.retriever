(function() {
  define(["Q", "linq", "breeze", "knockout", "breezeEntityManagers"], function(Q, linq, breeze, ko, breezeEntityManagers) {
    var breezeRetriever;
    breezeRetriever = {
      changeData: function(id, type, data) {
        var deferred;
        deferred = Q.defer();
        breezeEntityManagers.getMe().done(function(managers) {
          return deferred.resolve(managers.getStore(type.split('.')[0]).changeData(id, type, data));
        });
        return deferred.promise;
      },
      deleteData: function(id, type, data) {
        var deferred;
        deferred = Q.defer();
        breezeEntityManagers.getMe().done(function(managers) {
          return deferred.resolve(managers.getStore(type.split('.')[0]).deleteData(id, type, data));
        });
        return deferred.promise;
      },
      get: function(joins) {
        var deferred;
        deferred = Q.defer();
        breezeEntityManagers.getMe().done(function(managers) {
          var retrieves;
          retrieves = Q.all(linq.From(joins).Select(function(join) {
            var conditions, entityManager, eq, query, retrieveDeferred;
            retrieveDeferred = Q.defer();
            entityManager = managers.getType(join.type);
            query = entityManager.query;
            conditions = linq.From(join.ids).Select(function(id) {
              return breeze.Predicate.create("Id", "==", id.Id);
            }).ToArray();
            query = query.where(breeze.Predicate.or(conditions));
            eq = entityManager.manager.executeQuery(query);
            eq.done(function(d) {
              var store;
              store = managers.getStore(join.type);
              return retrieveDeferred.resolve({
                Type: join.type,
                Ids: linq.From(d.results).Select(function(r) {
                  var merged;
                  merged = store.mergeData(join.type, r);
                  return {
                    Key: merged.Id(),
                    ParameterGroups: linq.From(linq.From(join.ids).Single(function(id) {
                      return id.Id.toString() === merged.Id().toString();
                    }).ParameterGroups).Select(function(pg) {
                      return {
                        Name: pg.Name,
                        Value: [merged]
                      };
                    }).ToArray()
                  };
                }).ToArray()
              });
            });
            eq["catch"](function() {
              return retrieveDeferred.reject();
            });
            return retrieveDeferred.promise;
          }).ToArray());
          retrieves.done(function(data) {
            return deferred.resolve(data);
          });
          return retrieves["catch"](function() {
            return deferred.reject();
          });
        });
        return deferred.promise;
      },
      getCollection: function(collections) {
        var deferred;
        deferred = Q.defer();
        breezeEntityManagers.getMe().done(function(managers) {
          var retrieves;
          retrieves = Q.all(linq.From(collections).Select(function(type) {
            var collectionFetches, entityManager, retrieveDeferred;
            retrieveDeferred = Q.defer();
            entityManager = managers.getCollectionType(type.type);
            collectionFetches = Q.all(linq.From(type.collections).Select(function(collection) {
              var collectionDeferred, collectionFetchIds, collectionManager;
              collectionDeferred = Q.defer();
              collectionManager = entityManager.collectionManager(collection.collection);
              collectionFetchIds = Q.all(linq.From(collection.ids).Select(function(collectionFetchId) {
                var collectionFetchIdDeferred, parameterGroups, query;
                collectionFetchIdDeferred = Q.defer();
                query = collectionManager.query(collectionFetchId.Id);
                parameterGroups = Q.all(linq.From(collectionFetchId.ParameterGroups).Select(function(parameterGroup) {
                  var operator, orderName, page, parameter, parameterGroupDeferred, property, propertyName, value, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
                  parameterGroupDeferred = Q.defer();
                  _ref = linq.From(parameterGroup.Parameters).Where(function(p) {
                    return p.Name === 'filter';
                  }).ToArray();
                  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    parameter = _ref[_i];
                    property = linq.From(parameter.Values).Single(function(pv) {
                      return pv.Name === 'property';
                    }).Value;
                    operator = linq.From(parameter.Values).Single(function(pv) {
                      return pv.Name === 'operator';
                    }).Value;
                    value = linq.From(parameter.Values).Single(function(pv) {
                      return pv.Name === 'value';
                    }).Value;
                    query = query.where(property, operator, value);
                  }
                  _ref1 = linq.From(parameterGroup.Parameters).Where(function(p) {
                    return p.Name === 'order';
                  }).ToArray();
                  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                    parameter = _ref1[_j];
                    if (linq.From(parameter.Values).Any(function(pv) {
                      return pv.Name === 'isDescending' && pv.Value;
                    })) {
                      orderName = "orderByDesc";
                    } else {
                      orderName = "orderBy";
                    }
                    propertyName = linq.From(parameter.Values).Single(function(pv) {
                      return pv.Name === 'propertyName';
                    }).Value;
                    query = query[orderName](propertyName);
                  }
                  _ref2 = linq.From(parameterGroup.Parameters).Where(function(p) {
                    return p.Name === 'page';
                  }).ToArray();
                  for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                    parameter = _ref2[_k];
                    page = linq.From(parameter.Values).Single(function(pv) {
                      return pv.Name === 'page';
                    }).Value;
                    query = query.skip(page * 10).take(10);
                  }
                  entityManager.manager.executeQuery(query)["catch"](function() {
                    return parameterGroupDeferred.reject();
                  }).done(function(x) {
                    return parameterGroupDeferred.resolve({
                      Name: parameterGroup.Name,
                      Collection: {
                        data: linq.From(x.results).Select(function(res) {
                          var store, typeName;
                          typeName = res.entityAspect.entityGroup.entityType.shortName;
                          store = managers.getStore(typeName);
                          return store.mergeData(typeName, res);
                        }).ToArray(),
                        metaData: {
                          count: x.inlineCount
                        }
                      }
                    });
                  });
                  return parameterGroupDeferred.promise;
                }).ToArray());
                parameterGroups["catch"](function() {
                  return collectionFetchIdDeferred.reject();
                }).done(function(x) {
                  return collectionFetchIdDeferred.resolve({
                    Key: collectionFetchId.Id,
                    ParameterGroups: x
                  });
                });
                return collectionFetchIdDeferred.promise;
              }).ToArray());
              collectionFetchIds["catch"](function() {
                return collectionDeferred.reject();
              }).done(function(x) {
                return collectionDeferred.resolve({
                  Collection: collection.collection,
                  Ids: x
                });
              });
              return collectionDeferred.promise;
            }).ToArray());
            collectionFetches["catch"](function() {
              return retrieveDeferred.reject();
            }).done(function(x) {
              return retrieveDeferred.resolve({
                Type: type.type,
                Collections: x
              });
            });
            return retrieveDeferred.promise;
          }).ToArray());
          retrieves.done(function(data) {
            return deferred.resolve(data);
          });
          return retrieves["catch"](function() {
            return deferred.reject();
          });
        });
        return deferred.promise;
      }
    };
    return {
      getMe: function() {
        return breezeRetriever;
      },
      initMe: function(urls) {
        return breezeEntityManagers.initMe(urls);
      }
    };
  });

}).call(this);
