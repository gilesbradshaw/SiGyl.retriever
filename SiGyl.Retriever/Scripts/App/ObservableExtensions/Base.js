(function() {
  define(["jquery", "knockout", "listenToken", "observableExtensions.extender", "linq"], function($, ko, ListenToken, ext, linq) {
    ko.extenders.base = function(target, options) {
      target.base = target.any = function(name, initialiser) {
        var doMyFilterSubscribe, myFilter, myFilterSubscription, myListenExtension, myListenToken, myPagerInfo, myTrigger, ret, tokenToExtend, _filter;
        myListenToken = void 0;
        myFilterSubscription = void 0;
        doMyFilterSubscribe = function() {};
        myFilter = void 0;
        _filter = void 0;
        myTrigger = ko.observable(0);
        ret = ko.pureComputed({
          deferEvaluation: true,
          read: function() {
            if (myTrigger()) {
              if (myListenToken) {
                return myListenToken.data();
              }
            }
          }
        });
        myPagerInfo = void 0;
        ret._addPagerInfo = function(filter) {
          myPagerInfo = ext.getMyPagerInfo(ret, "base", "filter", filter);
          _filter = filter;
          if (filter) {
            myFilter = ko.observable(filter.peek());
            doMyFilterSubscribe = (function() {
              if (!myFilterSubscription) {
                return myFilterSubscription = filter.subscribe(function(x) {
                  myFilter(x);
                  return options.listen(myListenToken);
                });
              }
            });
            doMyFilterSubscribe();
          } else {
            myFilter = ko.observable();
          }
          return delete ret._addPagerInfo;
        };
        ret._addPagerInfo.source = "base";
        ret.__getListenToken = options.getListenToken;
        if (initialiser) {
          initialiser(target);
        }
        myListenExtension = {
          listener: {
            subscribeActions: function() {
              var myInitialSubscribe;
              myInitialSubscribe = void 0;
              return {
                onSubscribe: function() {
                  name = name;
                  myListenToken = ret.__getListenToken();
                  myInitialSubscribe = myListenToken.data.subscribe(function(x) {
                    myTrigger(myTrigger() + 1);
                    if (myInitialSubscribe) {
                      myInitialSubscribe.dispose();
                      return myInitialSubscribe = void 0;
                    }
                  });
                  (myListenToken.listen = function() {
                    return options.listen(myListenToken);
                  })();
                  myListenToken.cycle = options.cycle;
                  if (myListenToken.data.peek() && myListenToken.data.peek().length) {
                    myTrigger(myTrigger() + 1);
                  }
                  return doMyFilterSubscribe();
                },
                disposePing: function() {},
                subscribePing: function() {},
                onDispose: function() {
                  if (myFilterSubscription) {
                    name = name;
                    myFilterSubscription.dispose();
                    myFilterSubscription = void 0;
                  }
                  options.unlisten(myListenToken);
                  if (ret._onDisposed) {
                    ret._onDisposed();
                  }
                  if (myInitialSubscribe) {
                    myInitialSubscribe.dispose();
                    myInitialSubscribe = void 0;
                  }
                  return myListenToken = void 0;
                }
              };
            }
          }
        };
        tokenToExtend = ret.__getListenToken;
        ret._extendListenToken = function(extender) {
          return tokenToExtend = ret.__getListenToken = extender(tokenToExtend);
        };
        ret.extend($.extend(myListenExtension, options.extend()));
        return function() {
          return ret;
        };
      };
      return target;
    };
    return ko.extenders.extendListenToken = function(target, options) {
      target.extendListenToken = function(extender) {
        target._extendListenToken(function(extended) {
          return extender(extended);
        });
        return function() {
          return target;
        };
      };
      return target;
    };
  });

}).call(this);
