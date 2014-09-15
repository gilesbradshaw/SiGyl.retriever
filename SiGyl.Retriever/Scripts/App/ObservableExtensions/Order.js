(function() {
  define(["jquery", "knockout", "listenToken", "observableExtensions.extender", "linq"], function($, ko, ListenToken, ext, linq) {
    var updatePagerInfo;
    updatePagerInfo = function(myPagerInfo, name, _propertyName, _isDescending) {
      var isd;
      isd = _isDescending() || (ext.getMyFilterValue(myPagerInfo, "order", name, "isDescending")) || false;
      if (isd === "false") {
        isd = false;
      }
      myPagerInfo.currentProperty(_propertyName() || (ext.getMyFilterValue(myPagerInfo, "order", name, "propertyName")) || 'Id');
      myPagerInfo.currentIsDescending(isd);
      return {
        Name: "order",
        Id: name,
        Values: [
          {
            Name: 'propertyName',
            Value: myPagerInfo.currentProperty()
          }, {
            Name: 'isDescending',
            Value: myPagerInfo.currentIsDescending()
          }
        ]
      };
    };
    ko.extenders.order = function(target, options) {
      target.order = function(name, initialiser) {
        var convert, entityType, isVisible, lt, myPagerInfo, oldAddPagerInfo, _isDescending, _propertyName;
        myPagerInfo = void 0;
        lt = void 0;
        oldAddPagerInfo = target._addPagerInfo;
        target._addPagerInfo = function(filter) {
          if (oldAddPagerInfo) {
            oldAddPagerInfo(filter);
          }
          myPagerInfo = ext.getMyPagerInfo(target, "order", name);
          if (myPagerInfo.filter) {
            myPagerInfo.set = function() {
              filter(this);
              lt.listen();
              return lt.cycle();
            };
            myPagerInfo.isVisible = ko.pureComputed(function() {
              return isVisible;
            });
            myPagerInfo.properties = $.Enumerable.From(entityType.properties).Where(function(x) {
              return x.Values === null;
            }).Select(function(x) {
              return x.name;
            }).ToArray();
            myPagerInfo.property = ko.observable(ext.getMyFilterValue(myPagerInfo, "order", name, "propertyName"));
            myPagerInfo.currentProperty = ko.observable(ext.getMyFilterValue(myPagerInfo, "order", name, "propertyName"));
            myPagerInfo.currentIsDescending = ko.observable((ext.getMyFilterValue(myPagerInfo, "order", name, "isDescending")) === "true");
            myPagerInfo.isDescending = ko.observable((ext.getMyFilterValue(myPagerInfo, "order", name, "isDescending")) === "true");
            myPagerInfo.url = ko.pureComputed(function() {
              return ext.getMyFilterUrl(myPagerInfo.filter, 'order', name, {
                propertyName: myPagerInfo.property(),
                isDescending: myPagerInfo.isDescending()
              });
            });
            return delete target.addPagerInfo;
          }
        };
        _propertyName = ko.observable();
        _isDescending = ko.observable();
        isVisible = true;
        entityType = options.entityType();
        convert = function(type, value) {
          if (value && type === 'DateTime') {
            return getDate(value);
          } else {
            return value;
          }
        };
        if (initialiser) {
          initialiser(target);
        }
        target._extendListenToken(function(extended) {
          return function() {
            var oldCanAddData, oldmod;
            lt = extended();
            oldCanAddData = lt.canAddData;
            lt.canAddData = function(addData, completeData) {
              var type;
              if (oldCanAddData(addData, completeData)) {
                if (myPagerInfo.property()) {
                  type = $.Enumerable.From(entityType.properties).Single(function(x) {
                    return x.name === myPagerInfo.property();
                  }).clrType;
                  completeData.sort(function(a, b) {
                    if (convert(a[myPagerInfo.property()]() === convert(b[myPagerInfo.property()]()))) {
                      return 0;
                    }
                    if (convert(a[myPagerInfo.property()]() > convert(b[myPagerInfo.property()]()) && myPagerInfo.isDescending())) {
                      return 1;
                    }
                    if (convert(a[myPagerInfo.property()]() < convert(b[myPagerInfo.property()]()) && !myPagerInfo.isDescending())) {
                      return 1;
                    } else {
                      return -1;
                    }
                  });
                }
                return completeData;
              }
            };
            oldmod = lt._modifyCollectionRetrieveRequest;
            lt._modifyCollectionRetrieveRequest = function(parameters) {
              if (oldmod) {
                oldmod(parameters);
              }
              return parameters.push(updatePagerInfo(myPagerInfo, name, _propertyName, _isDescending));
            };
            return lt;
          };
        });
        return function(propertyName, isDescending) {
          isVisible = !_propertyName;
          _propertyName(propertyName);
          _isDescending(isDescending);
          return target;
        };
      };
      return target;
    };
    return ko.extenders.idPush = function(target, options) {
      target.idPush = function(id) {
        target._extendListenToken(function(extended) {
          return function() {
            var lt, oldmod;
            lt = extended();
            oldmod = lt._modifyCollectionRetrieveRequest;
            lt._modifyCollectionRetrieveRequest = function(parameters) {
              if (oldmod) {
                oldmod(parameters);
              }
              return $.Enumerable.From(parameters).Single(function(x) {
                return x.Name === 'id';
              }).Values.push({
                Name: 'id',
                Value: id
              });
            };
            return lt;
          };
        });
        return function() {
          return target;
        };
      };
      return target;
    };
  });

}).call(this);
