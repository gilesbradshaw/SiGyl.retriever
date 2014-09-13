(function() {
  define(["Q", "linq", "breeze", "knockout"], function(Q, linq, breeze, ko) {
    return function(conceptualModelName) {
      var manager, metaDataFetch, serviceName;
      serviceName = "http://localhost:41374/breeze/" + conceptualModelName;
      manager = new breeze.EntityManager(serviceName);
      metaDataFetch = manager.fetchMetadata();
      return {
        get: function(joins) {
          var deferred;
          deferred = Q.defer();
          metaDataFetch.done(function(metaData) {
            var retrieves;
            retrieves = Q.all(linq.From(joins).Select(function(join) {
              var conditions, entityContainer, eq, query, retrieveDeferred;
              retrieveDeferred = Q.defer();
              entityContainer = linq.From(metaData.schema.entityContainer.entitySet).Single(function(eset) {
                return eset.entityType === ("Self." + join.type);
              }).name;
              query = breeze.EntityQuery.from(entityContainer);
              conditions = linq.From(join.ids).Select(function(id) {
                return breeze.Predicate.create("Id", "==", id.Id);
              }).ToArray();
              query = query.where(breeze.Predicate.or(conditions));
              eq = manager.executeQuery(query);
              eq.done(function(d) {
                return retrieveDeferred.resolve({
                  Type: join.type,
                  Ids: linq.From(d.results).Select(function(r) {
                    return {
                      Key: r.Id(),
                      ParameterGroups: linq.From(linq.From(join.ids).Single(function(id) {
                        return id.Id.toString() === r.Id().toString();
                      }).ParameterGroups).Select(function(pg) {
                        return {
                          Name: pg.Name,
                          Value: [r]
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
          metaDataFetch.done(function(metaData) {
            var retrieves;
            retrieves = Q.all(linq.From(collections).Select(function(type) {
              var collectionFetches, entityType, retrieveDeferred;
              retrieveDeferred = Q.defer();
              entityType = linq.From(metaData.schema.entityType).Single(function(et) {
                return et.name === type.type;
              });
              collectionFetches = Q.all(linq.From(type.collections).Select(function(collection) {
                var association, collectionDeferred, collectionEntityContainer, collectionFetchIds, dependentEnd, dependentId, dependentReferentialConstraint, navigationProperty, relationship;
                collectionDeferred = Q.defer();
                navigationProperty = linq.From(entityType.navigationProperty).Single(function(np) {
                  return np.name === collection.collection;
                });
                relationship = navigationProperty.relationship.split('.')[1];
                association = linq.From(metaData.schema.association).Single(function(a) {
                  return a.name === relationship;
                });
                dependentReferentialConstraint = association.referentialConstraint.dependent;
                dependentId = dependentReferentialConstraint.propertyRef.name;
                dependentEnd = linq.From(association.end).Single(function(e) {
                  return e.role === dependentReferentialConstraint.role;
                });
                collectionEntityContainer = linq.From(metaData.schema.entityContainer.entitySet).Single(function(eset) {
                  return eset.entityType.split('.')[1] === dependentEnd.type.split('.')[2];
                }).name;
                collectionFetchIds = Q.all(linq.From(collection.ids).Select(function(collectionFetchId) {
                  var collectionFetchIdDeferred, parameterGroups;
                  collectionFetchIdDeferred = Q.defer();
                  parameterGroups = Q.all(linq.From(collectionFetchId.ParameterGroups).Select(function(parameterGroup) {
                    var operator, orderName, page, parameter, parameterGroupDeferred, property, propertyName, query, value, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
                    parameterGroupDeferred = Q.defer();
                    query = breeze.EntityQuery.from(collectionEntityContainer).inlineCount().where(dependentId, '==', collectionFetchId.Id);
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
                    manager.executeQuery(query)["catch"](function() {
                      return parameterGroupDeferred.reject();
                    }).done(function(x) {
                      return parameterGroupDeferred.resolve({
                        Name: parameterGroup.Name,
                        Collection: {
                          data: x.results,
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
    };
  });

}).call(this);
