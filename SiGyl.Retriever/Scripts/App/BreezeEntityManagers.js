(function() {
  define(["jquery", "Q", "linq", "breeze", "store", "utils", "source", "rx.binding"], function($, Q, linq, breeze, Store, utils, source, rx) {
    var deferred, getMetaData, retrieveSubjects;
    getMetaData = function(url) {
      var getMetaDataDeferred, manager, metadataFetch;
      getMetaDataDeferred = Q.defer();
      manager = new breeze.EntityManager(url);
      metadataFetch = manager.fetchMetadata();
      metadataFetch.done(function(metadata) {
        return getMetaDataDeferred.resolve({
          key: metadata.schema.entityContainer.name,
          manager: manager,
          metadata: metadata
        });
      });
      metadataFetch["catch"](function() {
        return getMetaDataDeferred.reject();
      });
      return getMetaDataDeferred.promise;
    };
    deferred = void 0;
    retrieveSubjects = void 0;
    return {
      initMe: function(metadataUrls) {
        var entityManagers;
        retrieveSubjects = {};
        entityManagers = Q.all(linq.From(metadataUrls).Select(function(url) {
          return getMetaData(url);
        }).ToArray());
        return deferred = entityManagers.then(function(managers) {
          var creates, manager, _i, _len;
          creates = [];
          for (_i = 0, _len = managers.length; _i < _len; _i++) {
            manager = managers[_i];
            manager.store = new (Store.getMe())(utils.getMe().processModel(manager.metadata.schema));
            manager.executingQueries = {};
          }
          return Q.all(creates).then(function() {
            return source.initMe().then(function() {
              var breezeRetriever, getManager, getTypeManager;
              source.getMe().on("change", function(id, type, data) {
                var changed, entType, newData, subject, typeManager;
                typeManager = breezeRetriever.getType(type.split('.')[0]);
                if (type.split('.').length > 1) {
                  typeManager = typeManager.collectionManager(type.split('.')[1]);
                }
                entType = typeManager.manager.metadataStore.getEntityType(typeManager.entityType.name);
                newData = entType.createEntity(data);
                typeManager.manager.attachEntity(newData, breeze.EntityState.Unchanged, breeze.MergeStrategy.OverwriteChanges);
                changed = breezeRetriever.getStore(type.split('.')[0]).changeData(id, type, data);
                if (changed) {
                  if (type.split('.').length === 2) {
                    subject = "" + (type.split('.')[0]) + ":." + (type.split('.')[1]) + ":" + id;
                  } else {
                    subject = "" + type + ":.:" + id;
                  }
                  if (retrieveSubjects[subject]) {
                    return retrieveSubjects[subject].observer.onNext({
                      changed: changed.value
                    });
                  }
                }
              });
              source.getMe().on("delete", function(id, type, data) {
                var toDelete;
                return toDelete = breezeRetriever.getStore(type.split('.')[0]).deleteData(id, type, data);
              });
              getManager = function(type) {
                return linq.From(managers).Single(function(m) {
                  return linq.From(m.metadata.schema.entityContainer.entitySet).SingleOrDefault(void 0, function(eset) {
                    return eset.entityType === ("Self." + type);
                  });
                });
              };
              getTypeManager = function(manager, entityType, query, entityContainer) {
                return {
                  manager: manager.manager,
                  namespace: manager.metadata.schema.namespace,
                  entityContainer: entityContainer,
                  query: query,
                  executeQuery: function(query) {
                    var queryUri, _base;
                    queryUri = query._toUri(manager.manager.metadataStore);
                    return (_base = manager.executingQueries)[queryUri] || (_base[queryUri] = manager.manager.executeQuery(query).then(function(retrievedData) {
                      delete manager.executingQueries[queryUri];
                      return $.extend(retrievedData, {
                        storedResults: retrievedData.results.map(function(r) {
                          return manager.store.mergeData(entityType.name, r);
                        })
                      });
                    }));
                  },
                  entityType: entityType
                };
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
                  entityType = linq.From(manager.metadata.schema.entityType).Single(function(et) {
                    return et.name === type;
                  });
                  entityContainer = linq.From(manager.metadata.schema.entityContainer.entitySet).Single(function(eset) {
                    return eset.entityType === ("Self." + type);
                  }).name;
                  return $.extend(getTypeManager(manager, entityType, (function() {
                    return breeze.EntityQuery.from(entityContainer);
                  }), entityContainer), {
                    subscriptionDefinition: function(item) {
                      return "" + entityType.name + ":.:" + (item.Id());
                    },
                    collectionManager: function(collection) {
                      var collectionEntityContainer, collectionEntityType, dependent, query;
                      dependent = utils.getMe().getDependent(entityType, collection);
                      collectionEntityContainer = linq.From(manager.metadata.schema.entityContainer.entitySet).Single(function(eset) {
                        return eset.entityType.split('.')[1] === dependent.type();
                      });
                      collectionEntityType = entityType.model.entityTypes[collectionEntityContainer.entityType.split('.')[1]];
                      query = function(id) {
                        var q;
                        q = breeze.EntityQuery.from(collectionEntityContainer.name).inlineCount().where(dependent.id(), '==', id);
                        q = q.where(dependent.id(), '==', id);
                        return q;
                      };
                      return $.extend(getTypeManager(manager, collectionEntityType, query, collectionEntityContainer), {
                        subscriptionDefinition: function(item) {
                          return "" + entityType.name + ":." + collection + ":" + (item.Id());
                        }
                      });
                    },
                    singleManager: function(single) {
                      var dependent, principal, query, singleEntityContainer;
                      principal = utils.getMe().getPrincipal(entityType, single);
                      dependent = utils.getMe().getDependent(entityType, single);
                      singleEntityContainer = linq.From(manager.metadata.schema.entityContainer.entitySet).Single(function(eset) {
                        return eset.entityType.split('.')[1] === principal.type();
                      });
                      entityType = entityType.model.entityTypes[singleEntityContainer.entityType.split('.')[1]];
                      query = function(item) {
                        return breeze.EntityQuery.from(singleEntityContainer.name).inlineCount().where("Id", '==', item[dependent.id()]());
                      };
                      return $.extend(getTypeManager(manager, entityType, query, singleEntityContainer), {
                        subscriptionDefinition: function(item) {
                          return "" + entityType.name + ":.:" + (item[dependent.id()]());
                        }
                      });
                    }
                  });
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
