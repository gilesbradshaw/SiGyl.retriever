(function() {
  define(["linq", "Q"], function(linq, Q) {
    var utils;
    utils = {
      process: function(object, func) {
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
      },
      processModel: function(conceptualModel) {
        conceptualModel.entityTypes = {};
        utils.process(conceptualModel.entityType, function(entityType) {
          entityType.model = conceptualModel;
          entityType.data = {};
          conceptualModel.entityTypes[entityType.name] = entityType;
          entityType.navigationProperties = {};
          return utils.process(entityType.navigationProperty, function(navigationProperty) {
            return entityType.navigationProperties[navigationProperty.name] = navigationProperty;
          });
        });
        conceptualModel.associations = {};
        utils.process(conceptualModel.association, function(association) {
          return conceptualModel.associations[association.name] = association;
        });
        return conceptualModel;
      },
      getPrincipal: function(entityType, property) {
        var association, navigationProperty, referentialConstraint, relationship, ret;
        navigationProperty = entityType.navigationProperties[property];
        relationship = navigationProperty.relationship.split('.')[1];
        association = entityType.model.associations[relationship];
        referentialConstraint = association.referentialConstraint.principal;
        return ret = {
          id: function() {
            return referentialConstraint.propertyRef.name;
          },
          end: function() {
            return linq.From(association.end).Single(function(e) {
              return e.role === referentialConstraint.role;
            });
          },
          type: function() {
            return ret.end().type.split('.')[2];
          },
          entityType: function() {
            return entityType.model.entityTypes[ret.type()];
          }
        };
      },
      getDependent: function(entityType, property) {
        var association, navigationProperty, referentialConstraint, relationship, ret;
        navigationProperty = entityType.navigationProperties[property];
        relationship = navigationProperty.relationship.split('.')[1];
        association = entityType.model.associations[relationship];
        referentialConstraint = association.referentialConstraint.dependent;
        return ret = {
          id: function() {
            return referentialConstraint.propertyRef.name;
          },
          end: function() {
            return linq.From(association.end).Single(function(e) {
              return e.role === referentialConstraint.role;
            });
          },
          type: function() {
            return ret.end().type.split('.')[2];
          },
          entityType: function() {
            return entityType.model.entityTypes[ret.type()];
          }
        };
      }
    };
    return {
      initMe: function() {
        return Q();
      },
      getMe: function() {
        return utils;
      }
    };
  });

}).call(this);
