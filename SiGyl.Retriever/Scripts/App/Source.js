(function() {
  define(["jquery", "sigr"], function($) {
    var crossConnection, crossProxy, hubStart, source;
    crossConnection = $.hubConnection("http://localhost:41374/");
    crossProxy = crossConnection.createHubProxy("superBatch");
    hubStart = crossConnection.start();
    source = {
      invoke: function(method, rindex, joins, collectionJoins) {
        return hubStart.then(function() {
          return crossProxy.invoke(method, rindex, joins, collectionJoins);
        });
      },
      "on": function(event, callback) {
        return crossProxy.on(event, callback);
      }
    };
    return {
      getMe: function() {
        return source;
      },
      initMe: function() {}
    };
  });

}).call(this);
