(function() {
  define(["jquery", "knockout", "listenToken", "observableExtensions.extender", "linq"], function($, ko, ListenToken, ext, linq) {
    ko.extenders.mixinTo = function(target, options) {
      target.mixinTo = function(mixin, initialiser) {
        if (mixin) {
          target._mixinTo = mixin;
        }
        if (initialiser) {
          initialiser(target);
        }
        return function() {
          return target;
        };
      };
      return target;
    };
    return ko.extenders.mixin = function(target, options) {
      target.mixin = function(mixin, initialiser) {
        if (initialiser) {
          initialiser(target);
        }
        target._extendListenToken(function(extended) {
          return function() {
            var lt, oldMixin;
            lt = extended();
            oldMixin = lt.mixin;
            lt.mixin = function(x) {
              if (oldMixin) {
                x = oldMixin(x);
              }
              return mixin(x);
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
