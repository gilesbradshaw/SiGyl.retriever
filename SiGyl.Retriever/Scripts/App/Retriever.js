(function() {
  define(["Q", "linq", "breezeretriever", "listener", "source", "observableExtensions", "rx.binding"], function(Q, linq, breezeRetriever, listener, source, ObservableExtensions, rx) {
    var retrieveSubjects, retriever, rindex;
    rindex = 0;
    retrieveSubjects = {};
    retriever = {
      subscriber: function(subscriptionDefinition) {
        var subject;
        if (!retrieveSubjects[subscriptionDefinition]) {
          subject = rx.Observable.create(function(observer) {
            retrieveSubjects[subscriptionDefinition].observer = observer;
            return function() {
              delete retrieveSubjects[subscriptionDefinition];
              return source.getMe().invoke("NewLeave", subscriptionDefinition);
            };
          });
          retrieveSubjects[subscriptionDefinition] = {
            subject: subject,
            share: subject.share(),
            subscriptionDeferred: Q.defer()
          };
          source.getMe().invoke("NewJoin", subscriptionDefinition).done(function() {
            if (retrieveSubjects[subscriptionDefinition]) {
              return retrieveSubjects[subscriptionDefinition].subscriptionDeferred.resolve(function() {
                return retrieveSubjects[subscriptionDefinition].share;
              });
            }
          }).fail(function(err) {
            if (retrieveSubjects[subscriptionDefinition]) {
              return retrieveSubjects[subscriptionDefinition].subscriptionDeferred.reject(err);
            }
          });
        }
        return retrieveSubjects[subscriptionDefinition].subscriptionDeferred.promise;
      },
      retrieve: function(tokens) {
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
        i = source.getMe().invoke("join", myRindex++, joins, collectionJoins);
        i.fail(function(error) {
          return deferred.reject(error);
        });
        i.done(function(x) {
          var doBreeze;
          doBreeze = Q.all([breezeRetriever.getMe().get(joins), breezeRetriever.getMe().getCollection(collectionJoins)]);
          doBreeze["catch"](function(error) {
            return deferred.rejectError;
          });
          return doBreeze.done(function(res) {
            var r, r1, results, _i, _j, _len, _len1, _ref, _ref1;
            results = [];
            _ref = res[0];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              r = _ref[_i];
              r1 = linq.From(res[1]).SingleOrDefault(void 0, function(rr) {
                return rr.Type === r.Type;
              });
              if (r1) {
                r.Ids = r.Ids || r1.Ids;
                r.Collections = r.Collections || r1.Collections;
              }
              results.push(r);
            }
            _ref1 = res[1];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              r = _ref1[_j];
              if (!linq.From(res[0]).Any(function(rr) {
                return rr.Type === r.Type;
              })) {
                results.push(r);
              }
            }
            return deferred.resolve(results);
          });
        });
        return deferred.promise;
      },
      unlisten: function(unlistens, collectionUnlistens) {
        var deferred, i;
        deferred = Q.defer();
        i = source.getMe().invoke("leave", unlistens, collectionUnlistens);
        i.done(function(x) {
          return deferred.resolve(x);
        });
        i.fail(function(error) {
          return deferred.reject(error);
        });
        i["finally"](function() {});
        return deferred.promise;
      }
    };
    return {
      getMe: function() {
        return retriever;
      },
      initMe: function(urls) {
        return breezeRetriever.initMe(urls).then(function() {
          rindex = 0;
          return source.initMe().then(function() {
            source.getMe().on("change", function(id, type, data) {
              return breezeRetriever.getMe().changeData(id, type, data).done(function(changed) {
                if (retrieveSubjects["" + type + ":.:" + id]) {
                  retrieveSubjects["" + type + ":.:" + id].observer.onNext({
                    change: changed.value
                  });
                }
                if (changed) {
                  listener.getMe().addData(retriever, changed);
                  return listener.getMe().cycle();
                }
              });
            });
            return source.getMe().on("delete", function(id, type, data) {
              return breezeRetriever.getMe().deleteData(id, type, data).done(function(toDelete) {
                if (toDelete) {
                  listener.getMe().deleteData(retriever, toDelete);
                }
                return listener.getMe().cycle();
              });
            });
          });
        });
      }
    };
  });

}).call(this);
