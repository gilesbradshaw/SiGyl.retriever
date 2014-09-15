(function() {
  define(["jquery", "knockout", "listenToken", "observableExtensions.extender", "linq"], function($, ko, ListenToken, ext, linq) {
    var getDate, updatePagerInfo;
    getDate = function(x) {
      if (!x) {
        return new Date(Date.parse('1/1/2200'));
      } else {
        if (typeof x === 'string') {
          return new Date(Date.parse(x.split('.')[0]));
        } else {
          return x;
        }
      }
    };
    updatePagerInfo = function(myPagerInfo, name, _operator, _property, _value) {
      myPagerInfo.currentOperator(_operator() || ext.getMyFilterValue(myPagerInfo, "filter", name, "operator"));
      myPagerInfo.currentProperty(_property() || ext.getMyFilterValue(myPagerInfo, "filter", name, "property"));
      myPagerInfo.currentValue(_value() || ext.getMyFilterValue(myPagerInfo, "filter", name, "value"));
      return {
        Name: "filter",
        Id: name,
        Values: [
          {
            Name: 'property',
            Value: myPagerInfo.currentProperty()
          }, {
            Name: 'operator',
            Value: myPagerInfo.currentOperator()
          }, {
            Name: 'value',
            Value: myPagerInfo.currentValue()
          }
        ]
      };
    };
    return ko.extenders.filter = function(target, options) {
      target.filter = function(name, initialiser) {
        var entityType, lt, myPagerInfo, oldAddPagerInfo, oldOnDisposed, valueSubscriber, _operator, _property, _value;
        _property = ko.observable();
        _operator = ko.observable();
        _value = ko.observable();
        entityType = options.entityType();
        lt = void 0;
        myPagerInfo = void 0;
        oldAddPagerInfo = target._addPagerInfo;
        target._addPagerInfo = function(filter) {
          if (oldAddPagerInfo) {
            oldAddPagerInfo(filter);
          }
          myPagerInfo = ext.getMyPagerInfo(target, "filter", name);
          myPagerInfo.operator = ko.observable();
          myPagerInfo.currentOperator = ko.observable();
          myPagerInfo.property = ko.observable();
          myPagerInfo.currentProperty = ko.observable();
          myPagerInfo.value = ko.observable();
          myPagerInfo.currentValue = ko.observable();
          myPagerInfo.properties = $.Enumerable.From(entityType.properties).Select(function(x) {
            return x.name;
          }).ToArray();
          if (myPagerInfo.filter) {
            myPagerInfo.set = function() {
              filter(this);
              lt.listen();
              return lt.cycle();
            };
            myPagerInfo.operator(ext.getMyFilterValue(myPagerInfo, "filter", name, "operator"));
            myPagerInfo.currentOperator(ext.getMyFilterValue(myPagerInfo, "filter", name, "operator"));
            myPagerInfo.property(ext.getMyFilterValue(myPagerInfo, "filter", name, "property"));
            myPagerInfo.currentProperty(ext.getMyFilterValue(myPagerInfo, "filter", name, "property"));
            myPagerInfo.value(ext.getMyFilterValue(myPagerInfo, "filter", name, "value"));
            myPagerInfo.currentValue(ext.getMyFilterValue(myPagerInfo, "filter", name, "value"));
            myPagerInfo.values = ko.pureComputed(function() {
              var thisProperty;
              if (myPagerInfo.property()) {
                thisProperty = $.Enumerable.From(entityType.properties).Single(function(x) {
                  return x.name === myPagerInfo.property();
                });
                return thisProperty.Values;
              }
            });
            myPagerInfo.operators = ko.pureComputed(function() {
              if (myPagerInfo.values()) {
                return ['==', '!='];
              } else {
                return ['>', '>=', '==', '<=', '<', '!='];
              }
            });
            myPagerInfo.url = ko.pureComputed(function() {
              return ext.getMyFilterUrl(myPagerInfo.filter, 'filter', name, {
                property: myPagerInfo.property(),
                operator: myPagerInfo.operator(),
                value: myPagerInfo.value()
              });
            });
          }
          return myPagerInfo.isVisible(!_property());
        };
        target._addPagerInfo.source = "filter";
        valueSubscriber = void 0;
        oldOnDisposed = target._onDisposed;
        target._onDisposed = function() {
          if (oldOnDisposed) {
            oldOnDisposed();
          }
          if (valueSubscriber) {
            return valueSubscriber.dispose();
          }
        };
        lt = void 0;
        if (initialiser) {
          initialiser(target);
        }
        target._extendListenToken(function(extended) {
          return function() {
            var oldCanAddData, oldcmod, oldmod;
            lt = extended();
            oldCanAddData = lt.canAddData;
            lt.canAddData = function(addData, completeData) {
              var operator, property, propertyValue, type, value;
              if (oldCanAddData(addData, completeData)) {
                property = _property() || ext.getMyFilterValue(myPagerInfo, "filter", name, "property");
                operator = _operator() || ext.getMyFilterValue(myPagerInfo, "filter", name, "operator");
                value = _value() || ext.getMyFilterValue(myPagerInfo, "filter", name, "value");
                if (property) {
                  type = $.Enumerable.From(entityType.properties).Single(function(x) {
                    return x.name === property;
                  }).clrType;
                  if (type === 'DateTime') {
                    if (addData.value[property]()) {
                      propertyValue = getDate(addData.value[property]());
                    }
                    if (value) {
                      value = getDate(value);
                    }
                  } else {
                    propertyValue = addData.value[property]();
                  }
                  if (typeof propertyValue === "number") {
                    value = Number(value);
                  }
                  if (typeof propertyValue === "boolean") {
                    value = value === true || value === "true";
                  }
                  if (value === null) {
                    value = void 0;
                  }
                  if (propertyValue === null) {
                    propertyValue = void 0;
                  }
                  if (!((!value && type === 'DateTime' && (operator === "<=" || operator === "<")) || (function() {
                    switch (operator) {
                      case '>':
                        return propertyValue > value;
                      case '>=':
                        return propertyValue >= value;
                      case '==':
                        return propertyValue === value;
                      case '<=':
                        return propertyValue <= value;
                      case '<':
                        return propertyValue < value;
                      case '!=':
                        return propertyValue !== value;
                    }
                  })())) {
                    completeData.splice(completeData.indexOf(addData.value), 1);
                    return false;
                  }
                }
                return true;
              }
            };
            oldmod = lt._modifyRetrieveRequest;
            lt._modifyRetrieveRequest = function(parameters) {
              if (oldmod) {
                oldmod(parameters);
              }
              return parameters.push(updatePagerInfo(myPagerInfo, name, _operator, _property, _value));
            };
            oldcmod = lt._modifyCollectionRetrieveRequest;
            lt._modifyCollectionRetrieveRequest = function(parameters) {
              if (oldcmod) {
                oldcmod(parameters);
              }
              return parameters.push(updatePagerInfo(myPagerInfo, name, _operator, _property, _value));
            };
            return lt;
          };
        });
        return function(property, operator, value) {
          _property(ko.utils.unwrapObservable(property));
          _operator(ko.utils.unwrapObservable(operator));
          _value(ko.utils.unwrapObservable(value));
          if (ko.isObservable(value)) {
            valueSubscriber = value.subscribe(function(x) {
              _value(x);
              if (lt) {
                return lt.listen();
              }
            });
          }
          return target;
        };
      };
      return target;
    };
  });

}).call(this);
