(function() {
  define(["jquery", "knockout", "Q", "listenToken", "utils", "breeze", "linq", "observableExtensions.listener", "observableExtensions.base", "observableExtensions.order", "observableExtensions.filter", "observableExtensions.page", "observableExtensions.title", "observableExtensions.selectMany", "observableExtensions.selectSingle", "observableExtensions.select", "observableExtensions.mixinTo"], function($, ko, Q, ListenToken, utils, breeze, linq) {
    var ObservableExtensions;
    ObservableExtensions = ObservableExtensions = (function() {
      function ObservableExtensions(conceptualModel, retriever, listener) {
        var baseObservable, entityManagers, parameterGroupId, relationObserve;
        parameterGroupId = 0;
        baseObservable = (function(_this) {
          return function() {
            var ret, _entityType, _getListenToken;
            _getListenToken = void 0;
            _entityType = void 0;
            return ret = {
              getListenToken: function(getListenToken) {
                var oldGetListenToken;
                oldGetListenToken = _getListenToken;
                _getListenToken = function(observable) {
                  if (oldGetListenToken) {
                    return getListenToken(oldGetListenToken(observable));
                  } else {
                    return getListenToken(observable);
                  }
                };
                return ret;
              },
              entityType: function(entityType) {
                _entityType = entityType;
                return ret;
              },
              extend: function() {
                _entityType;
                return ko.observable().extend({
                  listener: {
                    subscribeActions: function() {
                      return {
                        onSubscribe: function() {
                          throw "Illegal attempt to subscribe to unextended observable";
                        }
                      };
                    }
                  },
                  base: {
                    getListenToken: function(observable) {
                      return _getListenToken(observable);
                    },
                    listen: function(token) {
                      return listener.listen(token);
                    },
                    cycle: function() {
                      return listener.cycle();
                    },
                    unlisten: function(token) {
                      return listener.unlisten(token);
                    },
                    extend: function() {
                      return {
                        mixin: {},
                        mixinTo: {},
                        page: {
                          listener: listener
                        },
                        order: {
                          entityType: _entityType
                        },
                        filter: {
                          entityType: _entityType
                        },
                        title: {},
                        idPush: {},
                        extendListenToken: {},
                        selectMany: {
                          listener: listener,
                          observableExtensions: ObservableExtensions,
                          manyObservable: _this.manyObservable,
                          entityType: _entityType
                        },
                        selectSingle: {
                          listener: listener,
                          observableExtensions: ObservableExtensions,
                          manySingleObservable: _this.manySingleObservable,
                          conceptualModel: conceptualModel,
                          entityType: _entityType
                        }
                      };
                    }
                  }
                });
              }
            };
          };
        })(this);
        this.manyObservable = (function(_this) {
          return function(data, type, collection, entityType) {
            return baseObservable().entityType(utils.getMe().getDependent(entityType, collection).entityType).getListenToken(function(observable) {
              var listenToken, myKey;
              myKey = "Collection:" + type + ":" + collection + ":" + (parameterGroupId++);
              listenToken = new (ListenToken.getMe())(retriever, observable || ko.observableArray());
              listenToken.type = "" + type + "." + collection;
              listenToken.key = myKey;
              listenToken.canAddData = (function(_this) {
                return function(addData, completeData) {
                  if (addData.value) {
                    if (addData.type === ("" + type + "." + collection)) {
                      if (data.Id() === addData.value[utils.getMe().getDependent(entityType, collection).id()]()) {
                        return true;
                      }
                    }
                  }
                };
              })(this);
              listenToken.addData = (function(_this) {
                return function(addData) {
                  var alreadyIn, completeData;
                  alreadyIn = listenToken.data().indexOf(addData.value) !== -1;
                  completeData = listenToken.data();
                  if (!alreadyIn) {
                    completeData = completeData.concat([addData.value]);
                  }
                  if (listenToken.canAddData(addData, completeData)) {
                    if (!alreadyIn) {
                      if (listenToken.mixin) {
                        completeData[completeData.indexOf(addData.value)] = listenToken.mixin(addData.value);
                      }
                      return listenToken.data(completeData);
                    }
                  } else {
                    if (alreadyIn) {
                      if (completeData.indexOf(addData.value) > -1) {
                        completeData.splice(completeData.indexOf(addData.value), 1);
                      }
                      return listenToken.data(completeData);
                    }
                  }
                };
              })(this);
              listenToken.deleteData = (function(_this) {
                return function(deleteData) {
                  if (deleteData.value) {
                    if (deleteData.type === ("" + type + "." + collection)) {
                      if (data.Id() === deleteData.value[utils.getMe().getDependent(entityType, collection).id()]()) {
                        return listenToken.data.remove(deleteData.value);
                      }
                    }
                  }
                };
              })(this);
              listenToken.getProcessMetaData(function(metadata) {
                return listenToken.metadata = metadata;
              });
              listenToken.getDataMerge(function(dataToMerge) {
                var id, parameterGroup, _collection, _type;
                if (_type = linq.From(dataToMerge).SingleOrDefault(void 0, function(x) {
                  return x.Type === type;
                })) {
                  if (_collection = linq.From(_type.Collections).SingleOrDefault(void 0, function(x) {
                    return x.Collection === collection;
                  })) {
                    if (id = linq.From(_collection.Ids).SingleOrDefault(void 0, function(x) {
                      return x.Key === data.Id();
                    })) {
                      if (parameterGroup = linq.From(id.ParameterGroups).SingleOrDefault(void 0, function(x) {
                        var _ref;
                        return (x.Name === (_ref = x.Name) && _ref === myKey);
                      })) {
                        listenToken.data(ko.utils.arrayMap(parameterGroup.Collection.data, function(data) {
                          if (listenToken.mixin) {
                            return listenToken.mixin(data);
                          } else {
                            return data;
                          }
                        }));
                        return listenToken.processMetaData(parameterGroup.Collection.metadata);
                      }
                    }
                  }
                }
              });
              listenToken.getCollectionRetrieveRequest(function(requests) {
                var idRequest, parameterGroup, typeRequest, _collection;
                typeRequest = linq.From(requests).SingleOrDefault(void 0, function(x) {
                  return x.type === type;
                });
                if (!typeRequest) {
                  typeRequest = {
                    collections: [],
                    type: type
                  };
                  requests.push(typeRequest);
                }
                _collection = linq.From(typeRequest.collections).SingleOrDefault(void 0, function(x) {
                  return x.collection === collection;
                });
                if (!_collection) {
                  _collection = {
                    collection: collection,
                    ids: []
                  };
                  typeRequest.collections.push(_collection);
                }
                idRequest = linq.From(_collection.ids).SingleOrDefault(void 0, function(x) {
                  return x.Id === data.Id();
                });
                if (!idRequest) {
                  idRequest = {
                    Id: data.Id(),
                    IdProperty: 'Id',
                    ParameterGroups: []
                  };
                  _collection.ids.push(idRequest);
                }
                parameterGroup = linq.From(idRequest.ParameterGroups).SingleOrDefault(void 0, function(x) {
                  return x.Name === myKey;
                });
                if (!parameterGroup) {
                  parameterGroup = {
                    Name: myKey,
                    Parameters: []
                  };
                }
                idRequest.ParameterGroups.push(parameterGroup);
                return parameterGroup.Parameters;
              });
              return listenToken.modifyCollectionRetrieveRequest(function(parameters) {
                return parameters.push({
                  Name: "id",
                  Id: 'id',
                  Values: [
                    {
                      Name: 'id',
                      Value: data.Id()
                    }
                  ]
                });
              });
            }).extend();
          };
        })(this);
        this.manySingleObservable = (function(_this) {
          return function(entityType) {
            return baseObservable().entityType(function() {
              return entityType;
            }).getListenToken(function(observable) {
              var listenToken, myKey;
              myKey = "ManySingle:" + entityType.name + ":" + (parameterGroupId++);
              listenToken = new (ListenToken.getMe())(retriever, observable || ko.observableArray());
              listenToken.type = "" + entityType.name;
              listenToken.key = myKey;
              listenToken.getDataMerge(function(dataToMerge) {
                var id, parameterGroup, _type;
                if (_type = linq.From(dataToMerge).SingleOrDefault(void 0, function(x) {
                  return x.Type === entityType.name;
                })) {
                  if (id = linq.From(_type.Ids).SingleOrDefault(void 0, function(x) {
                    return x.Key === "0";
                  })) {
                    if (parameterGroup = linq.From(id.ParameterGroups).SingleOrDefault(void 0, function(x) {
                      var _ref;
                      return (x.Name === (_ref = x.Name) && _ref === myKey);
                    })) {
                      return listenToken.data(ko.utils.arrayMap(parameterGroup.Value, function(data) {
                        if (listenToken._mixinTo) {
                          return listenToken._mixinTo(data);
                        } else {
                          return data;
                        }
                      }));
                    }
                  }
                }
              });
              listenToken.getRetrieveRequest(function(requests) {
                var idRequest, parameterGroup, typeRequest;
                typeRequest = linq.From(requests).SingleOrDefault(void 0, function(x) {
                  return x.type === entityType.name;
                });
                if (!typeRequest) {
                  typeRequest = {
                    ids: [],
                    type: entityType.name
                  };
                  requests.push(typeRequest);
                }
                idRequest = linq.From(typeRequest.ids).SingleOrDefault(void 0, function(x) {
                  return x.Id === false;
                });
                if (!idRequest) {
                  idRequest = {
                    Id: 0,
                    IdProperty: 'Id',
                    ParameterGroups: []
                  };
                  typeRequest.ids.push(idRequest);
                }
                parameterGroup = linq.From(idRequest.ParameterGroups).SingleOrDefault(void 0, function(x) {
                  return x.Name === myKey;
                });
                if (!parameterGroup) {
                  parameterGroup = {
                    Name: myKey,
                    Parameters: []
                  };
                }
                idRequest.ParameterGroups.push(parameterGroup);
                return parameterGroup.Parameters;
              });
              return listenToken.modifyRetrieveRequest(function(parameters) {
                return parameters.push({
                  Name: "id",
                  Id: 'id'
                });
              });
            }).extend();
          };
        })(this);
        relationObserve = (function(_this) {
          return function(retriever, idObservable, property, relatedType, entityType, entityTypeFunc, prefix) {
            var lastIdObservableValue, ret;
            lastIdObservableValue = void 0;
            ret = ko.observable().extend({
              listener: {
                subscribeActions: function() {
                  return {
                    onSubscribe: function() {
                      throw "Illegal attempt to subscribe to unextended observable";
                    }
                  };
                }
              },
              base: {
                cycle: function() {
                  return listener.cycle();
                },
                getListenToken: function(observable) {
                  var idToUnlisten, listenToken, myKey;
                  myKey = "" + prefix + ":" + entityType.name + ":" + property + ":" + (parameterGroupId++);
                  idToUnlisten = void 0;
                  listenToken = new (ListenToken.getMe())(retriever, ko.observable().extend({
                    listener: {
                      subscribeActions: function() {
                        var subscriber;
                        subscriber = void 0;
                        return {
                          subscribePing: function() {},
                          disposePing: function() {},
                          onSubscribe: function() {
                            var subscribeFunc;
                            if (idObservable.peek()) {
                              idToUnlisten = idObservable.peek();
                            }
                            subscribeFunc = function(x) {
                              if (lastIdObservableValue && x !== lastIdObservableValue) {
                                idToUnlisten = lastIdObservableValue;
                                listener.unlisten($.extend({}, listenToken));
                              }
                              myKey = "" + prefix + ":" + entityType.name + ":" + property + ":" + (parameterGroupId++);
                              listenToken.key = myKey;
                              listenToken.relistening = true;
                              if (x) {
                                listener.listen(listenToken);
                              } else {
                                listenToken.data(void 0);
                              }
                              lastIdObservableValue = x;
                              return listener.cycle();
                            };
                            lastIdObservableValue = idObservable.peek();
                            if (lastIdObservableValue) {
                              subscribeFunc(lastIdObservableValue);
                            }
                            return subscriber = idObservable.subscribe(subscribeFunc);
                          },
                          onDispose: function() {
                            subscriber.dispose();
                            if (idObservable.peek()) {
                              listener.unlisten(listenToken);
                              return listener.cycle();
                            }
                          }
                        };
                      }
                    }
                  }));
                  listenToken.getDataMerge(function(data) {
                    var id, parameterGroup, type;
                    if (idObservable.peek()) {
                      if (type = linq.From(data).SingleOrDefault(void 0, function(x) {
                        return x.Type === relatedType;
                      })) {
                        if (id = linq.From(type.Ids).SingleOrDefault(void 0, function(x) {
                          return x.Key === idObservable.peek();
                        })) {
                          if (parameterGroup = linq.From(id.ParameterGroups).SingleOrDefault(void 0, function(x) {
                            var _ref;
                            return (x.Name === (_ref = x.Name) && _ref === myKey);
                          })) {
                            return listenToken.data(linq.From(parameterGroup.Value).SingleOrDefault(void 0));
                          }
                        }
                      }
                    }
                  });
                  listenToken.getRetrieveRequest(function(requests) {
                    var idRequest, parameterGroup, typeRequest;
                    if (idObservable.peek()) {
                      typeRequest = linq.From(requests).SingleOrDefault(void 0, function(x) {
                        return x.type === relatedType;
                      });
                      if (!typeRequest) {
                        typeRequest = {
                          ids: [],
                          type: relatedType
                        };
                        requests.push(typeRequest);
                      }
                      idRequest = linq.From(typeRequest.ids).SingleOrDefault(void 0, function(x) {
                        return x.Id === idObservable.peek();
                      });
                      if (!idRequest) {
                        idRequest = {
                          Id: idObservable.peek(),
                          ParameterGroups: []
                        };
                        typeRequest.ids.push(idRequest);
                      }
                      parameterGroup = linq.From(idRequest.ParameterGroups).SingleOrDefault(void 0, function(x) {
                        return x.Name === myKey;
                      });
                      if (!parameterGroup) {
                        parameterGroup = {
                          Name: myKey,
                          Parameters: []
                        };
                      }
                      idRequest.ParameterGroups.push(parameterGroup);
                      return parameterGroup.Parameters;
                    }
                  });
                  listenToken.modifyRetrieveRequest(function(parameters) {
                    if (idObservable()) {
                      return parameters.push({
                        Name: "id",
                        Id: 'id',
                        Values: [
                          {
                            Name: 'id',
                            Value: idObservable.peek()
                          }
                        ]
                      });
                    }
                  });
                  return listenToken;
                },
                listen: function(token) {
                  return listener.listen(token);
                },
                unlisten: function(token) {
                  return listener.unlisten(token);
                },
                extend: function() {
                  return {
                    title: {},
                    extendListenToken: {},
                    select: {
                      listener: listener,
                      observableExtensions: ObservableExtensions,
                      manyObservable: _this.manyObservable,
                      entityType: entityTypeFunc
                    }
                  };
                }
              }
            });
            return ret.base()();
          };
        })(this);
        this.selfObservable = (function(_this) {
          return function(data, type) {
            var entityTypeFunc, idObservable;
            idObservable = data.Id;
            entityTypeFunc = function() {
              return conceptualModel.entities[type];
            };
            return relationObserve(retriever, idObservable, '.', type, conceptualModel.entities[type], entityTypeFunc, "Self");
          };
        })(this);
        this.singleObservable = (function(_this) {
          return function(data, property, entityType) {
            var idObservable, principal;
            principal = utils.getMe().getPrincipal(entityType, property);
            idObservable = data[principal.id()];
            return relationObserve(retriever, idObservable, property, principal.type(), entityType, principal.entityType, "Single");
          };
        })(this);
        this.flexibleRelationObservable = (function(_this) {
          return function(data, property, entityType) {
            var entityTypeFunc, idObservable, navigationProperty, relatedType;
            navigationProperty = linq.From(entityType.flexibleRelations).Single(function(x) {
              return x.name === property;
            });
            idObservable = data[navigationProperty.idProperty];
            relatedType = data[navigationProperty.relatedTypeProperty]();
            entityTypeFunc = function() {
              return conceptualModel.entities[navigationProperty.relatedTypeProperty];
            };
            return relationObserve(retriever, idObservable, property, relatedType, entityType, entityTypeFunc, "Flexible");
          };
        })(this);
        entityManagers = {};
        this.interModelRelationObservable = (function(_this) {
          return function(data, property, entityType) {
            var entityTypeFunc, idObservable, navigationProperty, relatedType, _name;
            navigationProperty = linq.From(entityType.interModelRelations).Single(function(x) {
              return x.name === property;
            });
            entityManagers[_name = navigationProperty.model] || (entityManagers[_name] = new breeze.EntityManager("breeze/" + navigationProperty.model));
            idObservable = ko.observable().extend({
              listener: {
                subscribeActions: function() {
                  return {
                    onSubscribe: function() {
                      var query;
                      if (navigationProperty.foreignKey !== "Id") {
                        query = breeze.EntityQuery.from(navigationProperty.collection).where(navigationProperty.foreignKey, "==", data[navigationProperty.key]()).select("Id");
                        return entityManagers[navigationProperty.model].executeQuery(query).then(function(data) {
                          return idObservable(data.results[0].Id);
                        });
                      } else {
                        return idObservable(data[navigationProperty.key]());
                      }
                    },
                    disposePing: function() {},
                    subscribePing: function() {},
                    onDispose: function() {}
                  };
                }
              }
            });
            relatedType = property;
            entityTypeFunc = function() {
              return entityType.model.models[navigationProperty.model].entities[property];
            };
            return relationObserve(retriever, idObservable, property, relatedType, entityType, entityTypeFunc, "InterModel");
          };
        })(this);
        this.rootObservable = (function(_this) {
          return function(id, type, single) {
            var ret;
            ret = ko.observable().extend({
              listener: {
                subscribeActions: function() {
                  return {
                    onSubscribe: function() {
                      throw "Illegal attempt to subscribe to unextended observable";
                    }
                  };
                }
              },
              base: {
                filter: function() {
                  return ObservableExtensions.filter;
                },
                getListenToken: function(observable) {
                  var listenToken, myKey;
                  myKey = "Root:" + type + ":" + (parameterGroupId++);
                  listenToken = new (ListenToken.getMe())(retriever, observable || ko.observableArray());
                  listenToken.key = myKey;
                  listenToken.getDataMerge(function(data) {
                    var parameterGroup, _id, _type;
                    if (_type = linq.From(data).SingleOrDefault(void 0, function(x) {
                      return x.Type === type;
                    })) {
                      if (_id = linq.From(_type.Ids).SingleOrDefault(void 0, function(x) {
                        return x.Key === id;
                      })) {
                        if (parameterGroup = linq.From(_id.ParameterGroups).SingleOrDefault(void 0, function(x) {
                          var _ref;
                          return (x.Name === (_ref = x.Name) && _ref === myKey);
                        })) {
                          if (typeof parameterGroup.Value !== 'string') {
                            if (!single) {
                              return listenToken.data(ko.utils.arrayMap(parameterGroup.Value, function(data) {
                                if (listenToken.mixin) {
                                  return listenToken.mixin(data);
                                } else {
                                  return data;
                                }
                              }));
                            } else {
                              data = linq.From(parameterGroup.Value).SingleOrDefault(void 0);
                              if (data && listenToken.mixin) {
                                data = listenToken.mixin(data);
                              }
                              return listenToken.data(data);
                            }
                          }
                        }
                      }
                    }
                  });
                  listenToken.getRetrieveRequest(function(requests) {
                    var idRequest, parameterGroup, typeRequest;
                    typeRequest = linq.From(requests).SingleOrDefault(void 0, function(x) {
                      return x.type === type;
                    });
                    if (!typeRequest) {
                      typeRequest = {
                        ids: [],
                        type: type
                      };
                      requests.push(typeRequest);
                    }
                    idRequest = linq.From(typeRequest.ids).SingleOrDefault(void 0, function(x) {
                      return x.Id === id;
                    });
                    if (!idRequest) {
                      idRequest = {
                        Id: id,
                        ParameterGroups: []
                      };
                      typeRequest.ids.push(idRequest);
                    }
                    parameterGroup = linq.From(idRequest.ParameterGroups).SingleOrDefault(void 0, function(x) {
                      return x.Name === myKey;
                    });
                    if (!parameterGroup) {
                      parameterGroup = {
                        Name: myKey,
                        Parameters: []
                      };
                    }
                    idRequest.ParameterGroups.push(parameterGroup);
                    return parameterGroup.Parameters;
                  });
                  listenToken.modifyRetrieveRequest(function(parameters) {
                    return parameters.push({
                      Name: "id",
                      Id: 'id',
                      Values: [
                        {
                          Name: 'id',
                          Value: id
                        }
                      ]
                    });
                  });
                  return listenToken;
                },
                listen: function(token) {
                  return listener.listen(token);
                },
                unlisten: function(token) {
                  return listener.unlisten(token);
                },
                extend: function() {
                  return {
                    mixin: {},
                    page: {
                      listener: listener
                    },
                    order: {
                      entityType: function() {
                        return conceptualModel.entities[type];
                      }
                    },
                    filter: {
                      entityType: function() {
                        return conceptualModel.entities[type];
                      }
                    },
                    title: {},
                    extendListenToken: {},
                    selectMany: {
                      listener: listener,
                      manyObservable: _this.manyObservable,
                      entityType: function() {
                        return conceptualModel.entities[type];
                      }
                    }
                  };
                }
              }
            });
            return ret.base()();
          };
        })(this);
      }

      ObservableExtensions.create = function(key, model) {
        var deferred;
        deferred = Q.defer();
        require(["retriever", "listener"], function(retriever, listener) {
          ObservableExtensions.modelExtensions[key] = new ObservableExtensions(model, retriever.getMe(), listener.getMe());
          return deferred.resolve();
        });
        return deferred.promise;
      };

      return ObservableExtensions;

    })();
    return {
      getMe: function() {
        return ObservableExtensions;
      },
      initMe: function() {
        ObservableExtensions.modelExtensions = {};
        return Q();
      }
    };
  });

}).call(this);
