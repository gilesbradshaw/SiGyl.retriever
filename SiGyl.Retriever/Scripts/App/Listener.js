(function() {
  define(["jquery", "knockout", "listenToken", "linq", "Q"], function($, ko, ListenToken, linq, Q) {
    var complete, completeTimeOut, completeTimer, completing, cycle, cycling, listener, _completed, _cycled, _cycling, _listening, _unlistening;
    _unlistening = {};
    _listening = {};
    _cycled = {};
    _completed = {};
    _cycling = {};
    cycling = false;
    completing = false;
    completeTimer = void 0;
    completeTimeOut = 5000;
    cycle = function() {
      var key, listenToken, retrievals, thisCycle, x;
      for (key in _listening) {
        listenToken = _listening[key];
        delete _listening[listenToken.key];
        _cycling[listenToken.key] = listenToken;
      }
      x = linq.From(_cycling).GroupBy(function(x) {
        return x.Value.retriever;
      });
      retrievals = x.Where(function(xx) {
        return xx.Key();
      }).Select(function(xx) {
        var pr, retrieveParams, retriever;
        retrieveParams = linq.From(xx.source).Select(function(xxx) {
          return xxx.Value;
        }).ToArray();
        retriever = xx.Key();
        pr = retriever.retrieve(retrieveParams);
        return pr.then(function(retrieveData) {
          var listener, _i, _len, _ref, _results;
          if (retrieveData) {
            _ref = xx.source;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              listener = _ref[_i];
              listener.Value.dataMerge(retrieveData);
              if (listener.Value.dataReceived) {
                _results.push(listener.Value.dataReceived(listener.Value.dataReceived() + 1));
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          }
        }).fail(function(error) {
          return alert(("retrieval error " + (xx.Key()) + " ") + error);
        });
      }).ToArray();
      thisCycle = Q.all(retrievals);
      thisCycle.done(function(retrieveData) {
        for (key in _cycling) {
          listenToken = _cycling[key];
          delete _cycling[listenToken.key];
          _cycled[listenToken.key] = listenToken;
        }
        if (Object.keys(_listening).length) {
          return cycle();
        } else {
          cycling = false;
          if (completeTimer) {
            clearTimeout(completeTimer);
            if (completeTimeOut > 0) {
              completeTimeOut -= 100;
            }
          }
          return completeTimer = setTimeout(function() {
            if (!Object.keys(_listening).length) {
              if (!completing) {
                completeTimeOut = 5000;
                return complete();
              }
            }
          }, completeTimeOut);
        }
      });
      return thisCycle.fail(function(error) {
        return alert(error);
      });
    };
    complete = (function(_this) {
      return function() {
        var cancellers, key, listenToken, unlisteners, unlistens, value, x, ___, _____;
        completing = true;
        for (key in _cycled) {
          listenToken = _cycled[key];
          delete _cycled[listenToken.key];
          _completed[listenToken.key] = listenToken;
        }
        for (key in _unlistening) {
          value = _unlistening[key];
          delete _completed[value.key];
          if (linq.From(_completed).Any(function(x) {
            return value.compare(x.Value);
          })) {
            delete _unlistening[key];
          }
        }
        unlisteners = linq.From(_unlistening).GroupBy((function(x) {
          return x.Value.retriever;
        }), function(x) {
          return x.Value;
        });
        cancellers = linq.From(_completed).Where(function(x) {
          return !_unlistening[x.Key];
        }).GroupBy((function(x) {
          return x.Value.retriever;
        }), function(x) {
          return x.Value;
        });
        ___ = cancellers.ToArray();
        if (unlisteners.Any()) {
          _____ = unlisteners.ToArray();
          x = 1;
        }
        unlistens = unlisteners.Select(function(u) {
          var ret;
          ret = {
            retriever: u.Key(),
            unlistens: ListenToken.getMe().getUnlistens(u, cancellers.Where(function(c) {
              return c.Key() === u.Key();
            }).SingleOrDefault(void 0, function(x) {
              return x.Key() === u.Key();
            }))
          };
          return ret;
        }).Select(function(u) {
          return u.retriever.unlisten(linq.From(u.unlistens.ids).Select(function(uu) {
            return {
              type: uu.type,
              ids: [
                {
                  Id: 0,
                  ParameterGroups: [
                    {
                      Name: '',
                      Parameters: [
                        {
                          Name: 'id',
                          Id: 'id',
                          Values: linq.From(uu.ids).Select(function(i) {
                            return {
                              Name: 'id',
                              Value: i
                            };
                          }).ToArray()
                        }
                      ]
                    }
                  ]
                }
              ]
            };
          }).ToArray(), linq.From(u.unlistens.collections).Select(function(uu) {
            return {
              type: uu.type,
              collections: linq.From(uu.ids).Select(function(uu) {
                return {
                  collection: uu.collection,
                  ids: [
                    {
                      Id: 0,
                      ParameterGroups: [
                        {
                          Name: '',
                          Parameters: [
                            {
                              Name: 'id',
                              Id: 'id',
                              Values: linq.From(uu.ids).Select(function(i) {
                                return {
                                  Name: 'id',
                                  Value: i
                                };
                              }).ToArray()
                            }
                          ]
                        }
                      ]
                    }
                  ]
                };
              }).ToArray()
            };
          }).ToArray());
        }).ToArray();
        return $.when.apply($, unlistens).done(function() {
          for (key in _unlistening) {
            listenToken = _unlistening[key];
            delete _unlistening[listenToken.key];
          }
          completing = false;
          if (Object.keys(_listening).length) {
            return listener.cycle();
          }
        }).fail(function(error) {
          return alert(' ....' + error);
        });
      };
    })(this);
    listener = {
      listening: function() {
        return _listening;
      },
      cycled: function() {
        return _cycled;
      },
      cycling: function() {
        return _cycling;
      },
      unlistening: function() {
        return _unlistening;
      },
      completed: function() {
        return _completed;
      },
      listen: (function(_this) {
        return function(listenToken) {
          var cached, key, recycling, relistening, value;
          recycling = listenToken.recycling;
          relistening = listenToken.relistening;
          listenToken.recycling = false;
          listenToken.relistening = false;
          listenToken.cachedCollectionRetrieveRequests = void 0;
          listenToken.cachedRetrieveRequests = void 0;
          if (_unlistening[listenToken.key]) {
            delete _unlistening[listenToken.key];
          }
          if (!_listening[listenToken.key] && (!_cycling[listenToken.key] || recycling)) {
            if (_cycling[listenToken.key]) {
              delete _cycling[listenToken.key];
            }
            for (key in _completed) {
              value = _completed[key];
              if (!relistening) {
                if (listenToken.compare(value)) {
                  _completed[listenToken.key] = listenToken;
                  cached = true;
                  if (!listenToken.data()) {
                    cached = false;
                  } else {
                    if (value.data().length !== void 0) {
                      if (listenToken.data().length !== value.data().length || linq.From(listenToken.data()).Any(function(x) {
                        return !linq.From(value.data()).Any(function(v) {
                          return v.Id() === x.Id();
                        });
                      })) {
                        cached = false;
                      }
                    } else {
                      if (!listenToken.data().Id || listenToken.data().Id() !== value.data().Id()) {
                        cached = false;
                      }
                    }
                  }
                  if (!cached) {
                    listenToken.data(value.data());
                  }
                  return listener;
                }
              }
            }
            if (_cycled[listenToken.key]) {
              delete _cycled[listenToken.key];
            }
            _listening[listenToken.key] = listenToken;
          }
          listener.cycle();
          return listener;
        };
      })(this),
      unlisten: function(listenToken) {
        if (_listening[listenToken.key]) {
          delete _listening[listenToken.key];
        }
        _unlistening[listenToken.key] = listenToken;
        listener.cycle();
        return listener;
      },
      cycle: function() {
        if (!cycling && !completing) {
          cycling = true;
          cycle();
        }
        return listener;
      },
      deleteData: function(retriever, data) {
        linq.From(_completed).Where(function(x) {
          return x.Value.retriever === retriever && x.Value.type === data.type;
        }).Select(function(x) {
          return x.Value.deleteData(data);
        }).ToArray();
        linq.From(_cycled).Where(function(x) {
          return x.Value.retriever === retriever && x.Value.type === data.type;
        }).Select(function(x) {
          return x.Value.deleteData(data);
        }).ToArray();
        return linq.From(_cycling).Where(function(x) {
          return x.Value.retriever === retriever && x.Value.type === data.type;
        }).Select(function(x) {
          return x.Value.queueDeleteData(data);
        }).ToArray();
      },
      addData: function(retriever, data) {
        linq.From(_completed).Where(function(x) {
          return x.Value.retriever === retriever && x.Value.type === data.type;
        }).Select(function(x) {
          return x.Value.addData(data);
        }).ToArray();
        linq.From(_cycled).Where(function(x) {
          return x.Value.retriever === retriever && x.Value.type === data.type;
        }).Select(function(x) {
          return x.Value.addData(data);
        }).ToArray();
        return linq.From(_cycling).Where(function(x) {
          return x.Value.retriever === retriever && x.Value.type === data.type;
        }).Select(function(x) {
          return x.Value.queueAddData(data);
        }).ToArray();
      }
    };
    return {
      getMe: function() {
        return listener;
      },
      initMe: function() {
        _unlistening = {};
        _listening = {};
        _cycling = {};
        _cycled = {};
        _completed = {};
        cycling = false;
        completing = false;
        if (completeTimer) {
          return clearTimeout(completeTimer);
        }
      }
    };
  });

}).call(this);
