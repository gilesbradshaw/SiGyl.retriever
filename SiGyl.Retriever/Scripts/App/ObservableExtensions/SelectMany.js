(function() {
  define(["jquery", "knockout", "listenToken", "observableExtensions.extender", "linq"], function($, ko, ListenToken, ext, linq) {
    return ko.extenders.selectMany = function(target, options) {
      target.selectMany = function(collection, initialiser) {
        var foreignKey, historyType, listenToken, myType, oldOnDisposed, ret, targetSubscription;
        listenToken = void 0;
        targetSubscription = void 0;
        myType = options.entityType().name;
        target._addPagerInfo.source = "SelectMany";
        if (collection.split('.')[0] === '_histories') {
          foreignKey = "RuntimeId";
          historyType = collection.split('.')[1];
          if (!$.Enumerable.From(options.entityType().histories).Any(function(h) {
            return h.name === historyType;
          })) {
            throw "selectMany did not find a history of type " + historyType + " for " + myType;
          }
          ret = options.observableExtensions.observableExtensions.history.rootObservable(0, historyType);
        } else {
          foreignKey = $.Enumerable.From(options.entityType().navigationProperties).Single(function(np) {
            return np.name === collection;
          }).to.referentialConstraints[0].to[0];
          ret = options.manyObservable({
            Id: function() {
              return 0;
            }
          }, options.entityType().name, collection, options.entityType()).base("selectMany:" + collection)();
        }
        oldOnDisposed = ret._onDisposed;
        ret._onDisposed = function() {
          if (oldOnDisposed) {
            oldOnDisposed();
          }
          if (targetSubscription) {
            targetSubscription.dispose();
            return targetSubscription = void 0;
          }
        };
        if (initialiser) {
          initialiser(target);
        }
        ret._extendListenToken(function(extended) {
          return function() {
            var firstSubscription, modParameters, oldcmod, oldmod;
            firstSubscription = true;
            if (!targetSubscription) {
              targetSubscription = target.subscribe(function(x) {
                if (targetSubscription) {
                  listenToken.recycling = firstSubscription;
                  listenToken.recycling = true;
                  listenToken.relistening = true;
                  firstSubscription = false;
                  options.listener.listen(listenToken);
                  return options.listener.cycle();
                }
              });
            }
            listenToken = extended();
            oldcmod = listenToken._modifyCollectionRetrieveRequest;
            oldmod = listenToken._modifyRetrieveRequest;
            modParameters = function(old) {
              return function(parameters) {
                if (old) {
                  old(parameters);
                }
                ret = $.Enumerable.From(parameters).Single(function(p) {
                  return p.Name === 'id';
                }).Values = $.Enumerable.From(target()).Select(function(x) {
                  return {
                    Name: 'id',
                    Value: x.Id()
                  };
                }).ToArray();
                return ret;
              };
            };
            listenToken._modifyCollectionRetrieveRequest = modParameters(oldcmod);
            listenToken._modifyRetrieveRequest = modParameters(oldmod);
            listenToken.canAddData = function(addData, completeData) {
              var parameters;
              if (addData.type === ("" + myType + "." + collection)) {
                parameters = [];
                listenToken._modifyCollectionRetrieveRequest(parameters);
                ret = $.Enumerable.From($.Enumerable.From(parameters).Single(function(p) {
                  return p.Name === 'id';
                }).Values).Any((function(_this) {
                  return function(v) {
                    return v.Name === 'id' && v.Value === addData.value[foreignKey]();
                  };
                })(this));
                return ret;
              }
            };
            return listenToken;
          };
        })();
        return function() {
          return ret;
        };
      };
      return target;
    };
  });

}).call(this);
