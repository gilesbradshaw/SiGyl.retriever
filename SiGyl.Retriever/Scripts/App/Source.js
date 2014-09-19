(function() {
  define(["jquery", "Q", "sigr"], function($, Q) {
    var crossConnection, crossProxy, source;
    crossConnection = $.hubConnection("http://localhost:41374/");
    crossProxy = crossConnection.createHubProxy("superBatch");
    source = {
      invoke: function(method, spec) {
        return crossProxy.invoke(method, spec);
      },
      "on": function(event, callback) {
        return crossProxy.on(event, callback);
      }
    };
    return {
      getMe: function() {
        return source;
      },
      initMe: function() {
        return crossConnection.start();
      }
    };
  });

}).call(this);
