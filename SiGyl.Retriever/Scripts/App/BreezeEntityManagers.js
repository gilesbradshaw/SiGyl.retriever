(function() {
  define(["Q", "linq", "breeze", "store", "utils", "source", "rx.binding"], function(Q, linq, breeze, Store, utils, source, rx) {
    var deferred, getMetaData, retrieveSubjects;
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
    retrieveSubjects = void 0;
    return {
      initMe: function(metaDataUrls) {
        var entityManagers;
        retrieveSubjects = {};
        entityManagers = Q.all(linq.From(metaDataUrls).Select(function(url) {
          return getMetaData(url);
        }).ToArray());
        return deferred = entityManagers.then(function(managers) {
          var creates, manager, _i, _len;
          creates = [];
          for (_i = 0, _len = managers.length; _i < _len; _i++) {
            manager = managers[_i];
            manager.store = new (Store.getMe())(utils.getMe().processModel(manager.metaData.schema));
          }
          return Q.all(creates).then(function() {
            return source.initMe().then(function() {
              var breezeRetriever, getManager;
              source.getMe().on("change", function(id, type, data) {
                var changed;
                changed = breezeRetriever.getStore(type.split('.')[0]).changeData(id, type, data).done;
                if (changed && retrieveSubjects["" + type + ":.:" + id]) {
                  return retrieveSubjects["" + type + ":.:" + id].observer.onNext(changed.value);
                }
              });
              source.getMe().on("delete", function(id, type, data) {
                var toDelete;
                return toDelete = breezeRetriever.getStore(type.split('.')[0]).deleteData(id, type, data);
              });
              getManager = function(type) {
                return linq.From(managers).Single(function(m) {
                  return linq.From(m.metaData.schema.entityContainer.entitySet).SingleOrDefault(void 0, function(eset) {
                    return eset.entityType === ("Self." + type);
                  });
                });
              };
              return breezeRetriever = {
                subscriber: function(subscriptionDefinition) {
                  var subject;
                  if (!retrieveSubjects[subscriptionDefinition]) {
                    subject = rx.Observable.create(function(observer) {
                      retrieveSubjects[subscriptionDefinition].observer = observer;
                      return function() {
                        delete retrieveSubjects[subscriptionDefinition];
                        return source.getMe().invoke("NewLeave", subscriptionDefinition);
                      };
                    });
                    retrieveSubjects[subscriptionDefinition] = {
                      subject: subject,
                      share: subject.share(),
                      subscriptionDeferred: Q.defer()
                    };
                    source.getMe().invoke("NewJoin", subscriptionDefinition).done(function() {
                      if (retrieveSubjects[subscriptionDefinition]) {
                        return retrieveSubjects[subscriptionDefinition].subscriptionDeferred.resolve(function() {
                          return retrieveSubjects[subscriptionDefinition].share;
                        });
                      }
                    }).fail(function(err) {
                      if (retrieveSubjects[subscriptionDefinition]) {
                        return retrieveSubjects[subscriptionDefinition].subscriptionDeferred.reject(err);
                      }
                    });
                  }
                  return retrieveSubjects[subscriptionDefinition].subscriptionDeferred.promise;
                },
                getStore: function(type) {
                  return getManager(type).store;
                },
                getType: function(type) {
                  var entityContainer, entityType;
                  manager = getManager(type);
                  entityType = linq.From(manager.metaData.schema.entityType).Single(function(et) {
                    return et.name === type;
                  });
                  entityContainer = linq.From(manager.metaData.schema.entityContainer.entitySet).Single(function(eset) {
                    return eset.entityType === ("Self." + type);
                  }).name;
                  return {
                    entityContainer: entityContainer,
                    query: breeze.EntityQuery.from(entityContainer),
                    executeQuery: function(query) {
                      return manager.manager.executeQuery(query);
                    },
                    manager: manager.manager,
                    store: manager.store,
                    entityType: entityType,
                    collectionManager: function(collection) {
                      var collectionEntityContainer, dependent;
                      dependent = utils.getMe().getDependent(entityType, collection);
                      collectionEntityContainer = linq.From(manager.metaData.schema.entityContainer.entitySet).Single(function(eset) {
                        return eset.entityType.split('.')[1] === dependent.type();
                      });
                      return {
                        entityType: entityType.model.entityTypes[collectionEntityContainer.entityType.split('.')[1]],
                        entityContainer: collectionEntityContainer.name,
                        query: function(id) {
                          return breeze.EntityQuery.from(collectionEntityContainer.name).inlineCount().where(dependent.id(), '==', id);
                        }
                      };
                    },
                    singleManager: function(single) {
                      var principal, singleEntityContainer;
                      principal = utils.getMe().getPrincipal(entityType, single);
                      singleEntityContainer = linq.From(manager.metaData.schema.entityContainer.entitySet).Single(function(eset) {
                        return eset.entityType.split('.')[1] === principal.type();
                      });
                      return {
                        entityType: entityType.model.entityTypes[singleEntityContainer.entityType.split('.')[1]],
                        entityContainer: singleEntityContainer.name,
                        query: function(item) {
                          return breeze.EntityQuery.from(singleEntityContainer.name).inlineCount().where("Id", '==', item[principal.id()]());
                        }
                      };
                    }
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
                      var collectionEntityContainer, dependent;
                      dependent = utils.getMe().getDependent(entityType, collection);
                      collectionEntityContainer = linq.From(manager.metaData.schema.entityContainer.entitySet).Single(function(eset) {
                        return eset.entityType.split('.')[1] === dependent.type();
                      }).name;
                      return {
                        query: function(id) {
                          return breeze.EntityQuery.from(collectionEntityContainer).inlineCount().where(dependent.id(), '==', id);
                        }
                      };
                    }
                  };
                }
              };
            });
          });
        });
      },
      getMe: function() {
        return deferred;
      }
    };
  });

}).call(this);
