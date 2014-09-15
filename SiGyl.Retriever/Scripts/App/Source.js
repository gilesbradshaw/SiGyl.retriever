(function() {
  define([], function() {
    var source;
    source = {
      invoke: function() {
        return {
          done: function() {},
          "catch": function() {}
        };
      },
      "on": function() {}
    };
    return {
      getMe: function() {
        return source;
      },
      initMe: function() {}
    };
  });

}).call(this);
