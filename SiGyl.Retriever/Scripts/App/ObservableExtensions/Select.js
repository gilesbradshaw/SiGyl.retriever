(function() {
  define(["jquery", "knockout", "listenToken", "observableExtensions.extender", "linq"], function($, ko, ListenToken, ext, linq) {
    return ko.extenders.select = function(target, options) {
      target.select = function(collection, initialiser) {
        var foreignKey, historyType, listenToken, myType, oldOnDisposed, ret, targetSubscription;
        listenToken = void 0;
        targetSubscription = void 0;
        myType = options.entityType().name;
        if (collection.split('.')[0] === '_histories') {
          foreignKey = "RuntimeId";
          historyType = collection.split('.')[1];
          if (!$.Enumerable.From(options.entityType().histories).Any(function(h) {
            return h.name === historyType;
          })) {
            throw "select did not find a history of type " + historyType + " for " + myType;
          }
          ret = new options.observableExtensions.observableExtensions.history.rootObservable(0, historyType);
        } else {
          foreignKey = $.Enumerable.From(options.entityType().navigationProperties).Single(function(np) {
            return np.name === collection;
          }).to.referentialConstraints[0].to[0];
          ret = new options.manyObservable({
            Id: function() {
              return 0;
            }
          }, options.entityType().name, collection, options.entityType()).base()();
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
            var firstSubscription, oldcmod, oldmod;
            firstSubscription = true;
            if (!targetSubscription) {
              targetSubscription = target.subscribe(function(x) {
                if (targetSubscription) {
                  listenToken.recycling = firstSubscription;
                  listenToken.relistening = true;
                  firstSubscription = false;
                  options.listener.listen(listenToken);
                  return options.listener.cycle();
                }
              });
            }
            listenToken = extended();
            oldcmod = listenToken._modifyCollectionRetrieveRequest;
            listenToken._modifyCollectionRetrieveRequest = function(parameters) {
              if (oldcmod) {
                oldcmod(parameters);
              }
              if (target()) {
                ret = $.Enumerable.From(parameters).Single(function(p) {
                  return p.Name === 'id';
                }).Values = [
                  {
                    Name: 'id',
                    Value: target().Id()
                  }
                ];
              }
              return ret;
            };
            oldmod = listenToken._modifyRetrieveRequest;
            listenToken._modifyRetrieveRequest = function(parameters) {
              if (oldmod) {
                oldmod(parameters);
              }
              if (target()) {
                ret = $.Enumerable.From(parameters).Single(function(p) {
                  return p.Name === 'id';
                }).Values = [
                  {
                    Name: 'id',
                    Value: target().Id()
                  }
                ];
              }
              return ret;
            };
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
