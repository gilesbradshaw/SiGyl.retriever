(function() {
  define(["Q"], function(Q) {
    var ObservableExtensions;
    ObservableExtensions = (function() {
      function ObservableExtensions() {
        this.interModelRelationObservable = function() {
          return "interModelRelationObservable";
        };
        this.manyObservable = function() {
          return "manyObservable";
        };
        this.flexibleRelationObservable = function() {
          return "flexibleObservable";
        };
        this.singleObservable = function() {
          return "singleObservable";
        };
      }

      ObservableExtensions.create = function(key, model) {
        var deferred;
        deferred = Q.defer();
        setTimeout(function() {
          ObservableExtensions.modelExtensions[key] = new ObservableExtensions(model);
          return deferred.resolve();
        }, 100);
        return deferred.promise;
      };

      return ObservableExtensions;

    })();
    return {
      getMe: function() {
        return ObservableExtensions;
      },
      initMe: function() {
        return ObservableExtensions.modelExtensions = {};
      }
    };
  });

}).call(this);
