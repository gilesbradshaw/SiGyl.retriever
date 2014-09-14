(function() {
  define(["Q", "linq", "breeze"], function(Q, linq, breeze) {
    var deferred, entityManagers, getMetaData;
    getMetaData = function(conceptualModelName) {
      var getMetaDataDeferred, manager, metaDataFetch, serviceName;
      getMetaDataDeferred = Q.defer();
      serviceName = "http://localhost:41374/breeze/" + conceptualModelName;
      manager = new breeze.EntityManager(serviceName);
      metaDataFetch = manager.fetchMetadata();
      metaDataFetch.done(function(metaData) {
        return getMetaDataDeferred.resolve({
          manager: manager,
          metaData: metaData
        });
      });
      metaDataFetch["catch"](function() {
        return getMetaDataDeferred.reject();
      });
      return getMetaDataDeferred.promise;
    };
    deferred = Q.defer();
    entityManagers = Q.all([getMetaData("configuration"), getMetaData("runtime"), getMetaData("history")]);
    entityManagers.done(function(managers) {
      return deferred.resolve({
        getType: function(type) {
          var entityContainer, manager;
          manager = linq.From(managers).Single(function(m) {
            return linq.From(m.metaData.schema.entityContainer.entitySet).SingleOrDefault(void 0, function(eset) {
              return eset.entityType === ("Self." + type);
            });
          });
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
          var entityType, manager;
          manager = linq.From(managers).Single(function(m) {
            return linq.From(m.metaData.schema.entityContainer.entitySet).SingleOrDefault(void 0, function(eset) {
              return eset.entityType === ("Self." + type);
            });
          });
          entityType = linq.From(manager.metaData.schema.entityType).Single(function(et) {
            return et.name === type;
          });
          return {
            manager: manager.manager,
            entityType: entityType,
            collectionManager: function(collection) {
              var association, collectionEntityContainer, dependentEnd, dependentId, dependentReferentialConstraint, navigationProperty, relationship;
              navigationProperty = linq.From(entityType.navigationProperty).Single(function(np) {
                return np.name === collection;
              });
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
    entityManagers["catch"](function() {
      return deferred.reject();
    });
    return deferred.promise;
  });

}).call(this);
