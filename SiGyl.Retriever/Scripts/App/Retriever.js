(function() {
  define(["q", "linq"], function(Q, linq) {
    var Retriever, rindex;
    rindex = 0;
    return Retriever = (function() {
      function Retriever(source, store, listener) {
        var rtDesc;
        this.retrieve = function(tokens) {
          var collectionJoins, deferred, i, joins, myRindex;
          myRindex = rindex++;
          deferred = Q.defer();
          joins = linq.From(tokens).Aggregate([], function(a, b) {
            if (b.retrieveRequestMerge) {
              return b.retrieveRequestMerge(a);
            } else {
              return a;
            }
          }) || [];
          collectionJoins = linq.From(tokens).Aggregate([], function(a, b) {
            if (b.collectionRetrieveRequestMerge) {
              return b.collectionRetrieveRequestMerge(a);
            } else {
              return a;
            }
          }) || [];
          i = source.invoke("join", myRindex++, joins, collectionJoins);
          i["catch"](function(error) {
            return deferred.reject(error);
          });
          i.done(function(x) {
            return deferred.resolve(store.mergeData(x));
          });
          return deferred.promise;
        };
        this.unlisten = function(unlistens, collectionUnlistens) {
          var deferred, i;
          deferred = Q.defer();
          i = source.invoke("leave", unlistens, collectionUnlistens);
          i.done(function(x) {
            return deferred.resolve(x);
          });
          i["catch"](function(error) {
            return deferred.reject(error);
          });
          i["finally"](function() {});
          return deferred.promise;
        };
        rtDesc = 0;
        source.on("change", (function(_this) {
          return function(id, type, data) {
            var changed;
            if (changed = store.changeData(id, type, data)) {
              listener.addData(_this, changed);
              return listener.cycle();
            }
          };
        })(this));
        source.on("delete", (function(_this) {
          return function(id, type, data) {
            var todelete;
            todelete = store.deleteData(id, type, data);
            if (todelete) {
              listener.deleteData(_this, todelete);
              return listener.cycle();
            }
          };
        })(this));
      }

      return Retriever;

    })();
  });

}).call(this);
