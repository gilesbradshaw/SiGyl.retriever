(function() {
  define(["jquery", "knockout", "Q", "b64", "linq", "breeze", "store", "utils", "source", "rx.binding"], function($, ko, Q, b64, linq, breeze, Store, utils, source, rx) {
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
                var attachedEntity, changed, entType, newData, subject, typeManager;
                typeManager = breezeRetriever.getType(type.split('.')[0]);
                if (type.split('.').length > 1) {
                  typeManager = typeManager.collectionManager(type.split('.')[1]);
                }
                if (typeManager.entityType.data[data.Id]) {
                  if (b64.compare(ko.utils.unwrapObservable(data.Timestamp), ko.utils.unwrapObservable(typeManager.entityType.data[data.Id].Timestamp))) {
                    return;
                  }
                }
                entType = typeManager.breezeEntityType;
                newData = entType.createEntity(data);
                attachedEntity = typeManager.manager.attachEntity(newData, breeze.EntityState.Unchanged, breeze.MergeStrategy.OverwriteChanges);
                changed = breezeRetriever.getStore(type.split('.')[0]).changeData(id, type, newData);
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
                var entType, entityToDelete, subject, toDelete, typeManager;
                typeManager = breezeRetriever.getType(type.split('.')[0]);
                if (type.split('.').length > 1) {
                  typeManager = typeManager.collectionManager(type.split('.')[1]);
                }
                entType = typeManager.breezeEntityType;
                entityToDelete = typeManager.manager.getEntityByKey(entType, data.Id);
                if (typeManager.manager.detachEntity(entityToDelete, breeze.EntityState.Unchanged, breeze.MergeStrategy.OverwriteChanges)) {
                  toDelete = breezeRetriever.getStore(type.split('.')[0]).deleteData(id, type, entityToDelete);
                  if (toDelete) {
                    if (type.split('.').length === 2) {
                      subject = "" + (type.split('.')[0]) + ":." + (type.split('.')[1]) + ":" + id;
                    } else {
                      subject = "" + type + ":.:" + id;
                    }
                    if (retrieveSubjects[subject]) {
                      return retrieveSubjects[subject].observer.onNext({
                        deleted: entityToDelete
                      });
                    }
                  }
                }
              });
              getManager = function(type) {
                return linq.From(managers).Single(function(m) {
                  return linq.From(m.metadata.schema.entityContainer.entitySet).SingleOrDefault(void 0, function(eset) {
                    return eset.entityType === ("Self." + type);
                  });
                });
              };
              getTypeManager = function(manager, entityType, query, predicate, entityContainer) {
                return {
                  breezeEntityType: manager.manager.metadataStore.getEntityType(entityType.name),
                  manager: manager.manager,
                  namespace: manager.metadata.schema.namespace,
                  entityContainer: entityContainer,
                  query: query,
                  predicate: predicate,
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
                subscriber: function(subscriptionDefinitions) {
                  var all;
                  return all = Q.all(subscriptionDefinitions.map(function(subscriptionDefinition) {
                    var subject, subscriptionsToMake;
                    subscriptionsToMake = [];
                    if (!retrieveSubjects[subscriptionDefinition]) {
                      subject = rx.Observable.create(function(observer) {
                        retrieveSubjects[subscriptionDefinition].observer = observer;
                        return function() {
                          delete retrieveSubjects[subscriptionDefinition];
                          return source.getMe().invoke("NewLeave", [subscriptionDefinition]);
                        };
                      });
                      retrieveSubjects[subscriptionDefinition] = {
                        subject: subject,
                        share: subject.share(),
                        subscriptionDeferred: Q.defer()
                      };
                      subscriptionsToMake.push(subscriptionDefinition);
                    }
                    if (subscriptionsToMake.length) {
                      source.getMe().invoke("NewJoin", subscriptionsToMake).done(function() {
                        return subscriptionsToMake.map(function(sub) {
                          if (retrieveSubjects[sub]) {
                            return retrieveSubjects[sub].subscriptionDeferred.resolve(function() {
                              return retrieveSubjects[sub].share;
                            });
                          }
                        });
                      }).fail(function(err) {
                        return subscriptionsToMake.map(function(sub) {
                          if (retrieveSubjects[sub]) {
                            return retrieveSubjects[sub].subscriptionDeferred.reject(err);
                          }
                        });
                      });
                    }
                    return retrieveSubjects[subscriptionDefinition].subscriptionDeferred.promise;
                  }));
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
                  return $.extend(getTypeManager(manager, entityType, breeze.EntityQuery.from(entityContainer), void 0, entityContainer), {
                    subscriptionDefinition: function(item) {
                      return "" + entityType.name + ":.:" + (item.Id());
                    },
                    collectionManager: function(collection) {
                      var collectionEntityContainer, collectionEntityType, dependent, predicate, query;
                      dependent = utils.getMe().getDependent(entityType, collection);
                      collectionEntityContainer = linq.From(manager.metadata.schema.entityContainer.entitySet).Single(function(eset) {
                        return eset.entityType.split('.')[1] === dependent.type();
                      });
                      collectionEntityType = entityType.model.entityTypes[collectionEntityContainer.entityType.split('.')[1]];
                      query = breeze.EntityQuery.from(collectionEntityContainer.name).inlineCount();
                      predicate = function(item) {
                        return new breeze.Predicate(dependent.id(), '==', item.Id());
                      };
                      return $.extend(getTypeManager(manager, collectionEntityType, query, predicate, collectionEntityContainer), {
                        subscriptionDefinition: function(item) {
                          return "" + entityType.name + ":." + collection + ":" + (item.Id());
                        }
                      });
                    },
                    interModelManager: function(property) {
                      var interModelEntityType, myManager, predicate, query, relation;
                      relation = linq.From(entityType.interModelRelations).Single(function(i) {
                        return i.name === property;
                      });
                      myManager = getManager(relation.name);
                      interModelEntityType = myManager.metadata.schema.entityTypes[relation.name];
                      query = breeze.EntityQuery.from(relation.collection).inlineCount();
                      predicate = function(item) {
                        return new breeze.Predicate(relation.foreignKey, '==', item.Id());
                      };
                      return $.extend(getTypeManager(myManager, interModelEntityType, query, predicate, relation.collection), {
                        subscriptionDefinition: function(item) {
                          return "" + relation.name + ":.:" + (item.Id());
                        }
                      });
                    },
                    singleManager: function(single) {
                      var dependent, predicate, principal, query, singleEntityContainer;
                      principal = utils.getMe().getPrincipal(entityType, single);
                      dependent = utils.getMe().getDependent(entityType, single);
                      singleEntityContainer = linq.From(manager.metadata.schema.entityContainer.entitySet).Single(function(eset) {
                        return eset.entityType.split('.')[1] === principal.type();
                      });
                      entityType = entityType.model.entityTypes[singleEntityContainer.entityType.split('.')[1]];
                      query = breeze.EntityQuery.from(singleEntityContainer.name).inlineCount();
                      predicate = function(item) {
                        return new breeze.Predicate("Id", '==', item[dependent.id()]());
                      };
                      return $.extend(getTypeManager(manager, entityType, query, predicate, singleEntityContainer), {
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
