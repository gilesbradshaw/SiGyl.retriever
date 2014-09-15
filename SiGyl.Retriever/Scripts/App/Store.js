(function() {
  define(["knockout", "b64", "linq", "observableExtensions"], function(ko, b64, linq, observableExtensionsMain) {
    var Store, collectionType, getKey, newEntity, process, updateEntity;
    process = function(object, func) {
      var o, _i, _len, _results;
      if (object) {
        if (object.length !== void 0) {
          _results = [];
          for (_i = 0, _len = object.length; _i < _len; _i++) {
            o = object[_i];
            _results.push(func(o));
          }
          return _results;
        } else {
          return func(object);
        }
      }
    };
    collectionType = function(conceptualModel, entityType, collection) {
      var association, collectionNavigationProperty, toEnd;
      collectionNavigationProperty = linq.From(entityType.navigationProperties).SingleOrDefault(function(x) {
        return x.Key === collection;
      }).Value;
      association = conceptualModel.associations[collectionNavigationProperty.relationship.split('.')[1]];
      toEnd = linq.From(association.end).Single(function(e) {
        return e.role === collectionNavigationProperty.toRole;
      });
      return conceptualModel.entityTypes[toEnd.type.split('.')[2]];
    };
    updateEntity = function(entityType, from, _to) {
      process(entityType.property, (function(_this) {
        return function(property) {
          if (property.name in from) {
            if (ko.isObservable(_to[property.name])) {
              return _to[property.name](ko.utils.unwrapObservable(from[property.name]));
            } else {
              return _to[property.name] = from[property.name];
            }
          }
        };
      })(this));
      return _to;
    };
    getKey = function(entityType, from) {
      return ko.utils.unwrapObservable(from[entityType.key.propertyRef.name]);
    };
    newEntity = function(from, model, entityType, modelExtensions) {
      var history, property, ret, _i, _j, _len, _len1, _ref, _ref1;
      ret = {};
      _ref = entityType.property;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        property = _ref[_i];
        ret[property.name] = from[property.name];
      }
      process(entityType.flexibleRelations, function(flexibleRelation) {
        return ret[flexibleRelation.name] = modelExtensions[model.entityContainer.name].flexibleRelationObservable(ret, flexibleRelation.name, entityType);
      });
      process(entityType.interModelRelations, function(interModelRelation) {
        return ret[interModelRelation.name] = modelExtensions[model.entityContainer.name].interModelRelationObservable(ret, interModelRelation.name, entityType);
      });
      process(entityType.navigationProperty, function(navigationProperty) {
        var association, toEnd;
        association = model.associations[navigationProperty.relationship.split('.')[1]];
        toEnd = linq.From(association.end).Single(function(e) {
          return e.role === navigationProperty.toRole;
        });
        if (toEnd.multiplicity === "*") {
          ret[navigationProperty.name] = modelExtensions[model.entityContainer.name].manyObservable(ret, entityType.name, navigationProperty.name, entityType);
          return ret[navigationProperty.name]._navigationProperty = (function(p) {
            return function() {
              return p;
            };
          })(navigationProperty);
        } else {
          return ret[navigationProperty.name] = modelExtensions[model.entityContainer.name].singleObservable(ret, navigationProperty.name, entityType);
        }
      });
      if (entityType.histories) {
        ret._histories = {};
        _ref1 = entityType.histories;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          history = _ref1[_j];
          ret._histories[history.name] = modelExtensions.history.rootObservable(getKey(entityType, from), history.name, true);
        }
      }
      if (entityType.Of) {
        ret._runtime = modelExtensions.runtime.rootObservable(from.RuntimeId, entityType.Of, true);
      }
      ret.__conceptualModel = function() {
        return model;
      };
      ret.__entityType = function() {
        return entityType;
      };
      return ret;
    };
    return Store = (function() {
      function Store(conceptualModel) {
        var modelExtensions;
        modelExtensions = observableExtensionsMain.getMe().modelExtensions;
        conceptualModel.entityTypes = {};
        process(conceptualModel.entityType, function(entityType) {
          entityType.model = conceptualModel;
          entityType.data = {};
          conceptualModel.entityTypes[entityType.name] = entityType;
          entityType.navigationProperties = {};
          return process(entityType.navigationProperty, function(navigationProperty) {
            return entityType.navigationProperties[navigationProperty.name] = navigationProperty;
          });
        });
        conceptualModel.associations = {};
        process(conceptualModel.association, function(association) {
          return conceptualModel.associations[association.name] = association;
        });
        this.mergeData = (function(_this) {
          return function(type, data) {
            var collection, collectionEntity, collectionEntityName, currentValue, entity, entityType, id, key, mergeKey, parameterGroup, result, value, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _len6, _len7, _m, _n, _o, _p, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
            entityType = conceptualModel.entityTypes[type];
            mergeKey = getKey(entityType, data);
            currentValue = entityType.data[mergeKey] || (entityType.data[mergeKey] = newEntity(data, conceptualModel, entityType, modelExtensions));
            return currentValue;
            for (_i = 0, _len = data.length; _i < _len; _i++) {
              type = data[_i];
              entity = conceptualModel.entities[type.Type];
              if (entity) {
                _ref = type.Ids;
                for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
                  id = _ref[_j];
                  _ref1 = id.ParameterGroups;
                  for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
                    parameterGroup = _ref1[_k];
                    if (typeof parameterGroup.Value !== 'string') {
                      result = [];
                      _ref2 = parameterGroup.Value;
                      for (_l = 0, _len3 = _ref2.length; _l < _len3; _l++) {
                        value = _ref2[_l];
                        key = getKey(entity, value);
                        currentValue = entity.data[key] || (entity.data[key] = newEntity(value, conceptualModel, entity, _this.modelExtensions));
                        if (!b64.compare(value.Timestamp, currentValue.Timestamp())) {
                          updateEntity(entity, value, currentValue);
                          result.push(currentValue);
                        }
                      }
                      parameterGroup.Value = result;
                    }
                  }
                }
                _ref3 = type.Collections;
                for (_m = 0, _len4 = _ref3.length; _m < _len4; _m++) {
                  collection = _ref3[_m];
                  collectionEntityName = $.Enumerable.From(entity.navigationProperties).Single(function(x) {
                    return x.name === collection.Collection;
                  }).to.type;
                  collectionEntity = conceptualModel.entities[collectionEntityName];
                  _ref4 = collection.Ids;
                  for (_n = 0, _len5 = _ref4.length; _n < _len5; _n++) {
                    id = _ref4[_n];
                    _ref5 = id.ParameterGroups;
                    for (_o = 0, _len6 = _ref5.length; _o < _len6; _o++) {
                      parameterGroup = _ref5[_o];
                      result = [];
                      _ref6 = parameterGroup.Collection.data;
                      for (_p = 0, _len7 = _ref6.length; _p < _len7; _p++) {
                        value = _ref6[_p];
                        key = getKey(collectionEntity, value);
                        currentValue = collectionEntity.data[key] || (collectionEntity.data[key] = newEntity(value, conceptualModel, collectionEntity, _this.modelExtensions));
                        if (!b64.compare(value.Timestamp, currentValue.Timestamp())) {
                          updateEntity(collectionEntity, value, currentValue);
                        }
                        result.push(currentValue);
                      }
                      parameterGroup.Collection.data = result;
                    }
                  }
                }
              }
            }
            return data;
          };
        })(this);
        this.changeData = (function(_this) {
          return function(id, type, value) {
            var currentValue, entityType, key;
            entityType = conceptualModel.entityTypes[type.split('.')[0]];
            if (entityType) {
              if (type.split('.').length === 2) {
                entityType = collectionType(conceptualModel, entityType, type.split('.')[1]);
              }
              key = getKey(entityType, value);
              currentValue = entityType.data[key] || (entityType.data[key] = newEntity(value, conceptualModel, entityType, modelExtensions));
              if (!b64.compare(ko.utils.unwrapObservable(value.Timestamp), ko.utils.unwrapObservable(currentValue.Timestamp))) {
                updateEntity(entityType, value, currentValue);
              }
              return {
                id: id,
                type: type,
                value: currentValue
              };
            }
          };
        })(this);
        this.deleteData = function(id, type, value) {
          var currentValue, entityType, key;
          entityType = conceptualModel.entityTypes[type.split('.')[0]];
          if (entityType) {
            if (type.split('.').length === 2) {
              entityType = collectionType(conceptualModel, entityType, type.split('.')[1]);
            }
            key = getKey(entityType, value);
            currentValue = entityType.data[key];
            delete entityType.data[key];
            return {
              id: id,
              type: type,
              value: currentValue
            };
          }
        };
      }

      return Store;

    })();
  });

}).call(this);
