(function() {
  define(["Q", "linq", "breeze", "store", "observableExtensions"], function(Q, linq, breeze, Store, ObservableExtensions) {
    var deferred, getMetaData;
    getMetaData = function(url) {
      var getMetaDataDeferred, manager, metaDataFetch;
      getMetaDataDeferred = Q.defer();
      manager = new breeze.EntityManager(url);
      metaDataFetch = manager.fetchMetadata();
      metaDataFetch.done(function(metaData) {
        return getMetaDataDeferred.resolve({
          key: metaData.schema.entityContainer.name,
          manager: manager,
          metaData: metaData
        });
      });
      metaDataFetch["catch"](function() {
        return getMetaDataDeferred.reject();
      });
      return getMetaDataDeferred.promise;
    };
    deferred = void 0;
    return {
      initMe: function(metaDataUrls) {
        var entityManagers;
        ObservableExtensions.initMe();
        deferred = Q.defer();
        entityManagers = Q.all(linq.From(metaDataUrls).Select(function(url) {
          return getMetaData(url);
        }).ToArray());
        entityManagers.done(function(managers) {
          var creates, manager, _i, _len;
          creates = [];
          for (_i = 0, _len = managers.length; _i < _len; _i++) {
            manager = managers[_i];
            manager.store = new Store(manager.metaData.schema);
            creates.push(ObservableExtensions.getMe().create(manager.metaData.schema.entityContainer.name, manager.metaData.schema));
          }
          return Q.all(creates).done(function() {
            var getManager;
            getManager = function(type) {
              return linq.From(managers).Single(function(m) {
                return linq.From(m.metaData.schema.entityContainer.entitySet).SingleOrDefault(void 0, function(eset) {
                  return eset.entityType === ("Self." + type);
                });
              });
            };
            return deferred.resolve({
              getStore: function(type) {
                return getManager(type).store;
              },
              getType: function(type) {
                var entityContainer;
                manager = getManager(type);
                entityContainer = linq.From(manager.metaData.schema.entityContainer.entitySet).Single(function(eset) {
                  return eset.entityType === ("Self." + type);
                }).name;
                return {
                  entityContainer: entityContainer,
                  query: breeze.EntityQuery.from(entityContainer),
                  manager: manager.manager
                };
              },
              getCollectionType: function(type) {
                var entityType;
                manager = getManager(type);
                entityType = linq.From(manager.metaData.schema.entityType).Single(function(et) {
                  return et.name === type;
                });
                return {
                  manager: manager.manager,
                  entityType: entityType,
                  collectionManager: function(collection) {
                    var association, collectionEntityContainer, dependentEnd, dependentId, dependentReferentialConstraint, navigationProperty, relationship;
                    navigationProperty = entityType.navigationProperties[collection];
                    relationship = navigationProperty.relationship.split('.')[1];
                    association = linq.From(manager.metaData.schema.association).Single(function(a) {
                      return a.name === relationship;
                    });
                    dependentReferentialConstraint = association.referentialConstraint.dependent;
                    dependentId = dependentReferentialConstraint.propertyRef.name;
                    dependentEnd = linq.From(association.end).Single(function(e) {
                      return e.role === dependentReferentialConstraint.role;
                    });
                    collectionEntityContainer = linq.From(manager.metaData.schema.entityContainer.entitySet).Single(function(eset) {
                      return eset.entityType.split('.')[1] === dependentEnd.type.split('.')[2];
                    }).name;
                    return {
                      query: function(id) {
                        return breeze.EntityQuery.from(collectionEntityContainer).inlineCount().where(dependentId, '==', id);
                      }
                    };
                  }
                };
              }
            });
          });
        });
        return entityManagers["catch"](function() {
          return deferred.reject();
        });
      },
      getMe: function() {
        return deferred.promise;
      }
    };
  });

}).call(this);
