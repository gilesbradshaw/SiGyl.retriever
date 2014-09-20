(function() {
  define(["knockout"], function(ko) {
    return ko.extenders.listener = function(target, options) {
      var oldSubscribe, subscribeActions, subscriptions;
      if (options.subscribeActions) {
        subscribeActions = options.subscribeActions(target);
      }
      oldSubscribe = target.subscribe.bind(target);
      subscriptions = [];
      target.subscribe = function(callback, callbackTarget, event) {
        var oldDispose, ret;
        ret = oldSubscribe(callback, callbackTarget, event);
        if (subscribeActions && subscribeActions.subscribePing) {
          subscribeActions.subscribePing(ret);
        }
        if (subscribeActions && !subscriptions.length && subscribeActions.onSubscribe) {
          subscribeActions.onSubscribe();
        }
        subscriptions.push(ret);
        oldDispose = ret.dispose;
        ret.dispose = function() {
          if (subscribeActions && subscribeActions.disposePing) {
            subscribeActions.disposePing(ret);
          }
          subscriptions.splice(subscriptions.indexOf(ret), 1);
          oldDispose.bind(this)();
          if (subscribeActions && !subscriptions.length && subscribeActions.onDispose) {
            return subscribeActions.onDispose();
          }
        };
        return ret;
      };
      return target;
    };
  });

}).call(this);
