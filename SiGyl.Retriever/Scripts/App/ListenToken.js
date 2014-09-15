(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(["jquery", "knockout", "linq"], function($, ko, linq) {
    var ListenToken, collectionRetrieveRequestMerge, doCollectionRetrieveRequestMerge, doRetrieveRequestMerge, retrieveRequestMerge;
    doRetrieveRequestMerge = (function(_this) {
      return function(listenToken, retrieveRequests) {
        var ret;
        if (listenToken._getRetrieveRequest) {
          ret = listenToken._getRetrieveRequest(retrieveRequests);
          if (listenToken._modifyRetrieveRequest) {
            listenToken._modifyRetrieveRequest(ret);
          }
        }
        return retrieveRequests;
      };
    })(this);
    retrieveRequestMerge = (function(_this) {
      return function(listenToken, retrieveRequests) {
        listenToken.cachedRetrieveRequests = [];
        doRetrieveRequestMerge(listenToken, listenToken.cachedRetrieveRequests);
        doRetrieveRequestMerge(listenToken, retrieveRequests);
        return retrieveRequests;
      };
    })(this);
    doCollectionRetrieveRequestMerge = (function(_this) {
      return function(listenToken, collectionRetrieveRequests) {
        var ret;
        if (listenToken._getCollectionRetrieveRequest) {
          ret = listenToken._getCollectionRetrieveRequest(collectionRetrieveRequests);
          if (listenToken._modifyCollectionRetrieveRequest) {
            listenToken._modifyCollectionRetrieveRequest(ret);
          }
        }
        return collectionRetrieveRequests;
      };
    })(this);
    collectionRetrieveRequestMerge = (function(_this) {
      return function(listenToken, collectionRetrieveRequests) {
        listenToken.cachedCollectionRetrieveRequests = [];
        doCollectionRetrieveRequestMerge(listenToken, listenToken.cachedCollectionRetrieveRequests);
        doCollectionRetrieveRequestMerge(listenToken, collectionRetrieveRequests);
        return collectionRetrieveRequests;
      };
    })(this);
    ListenToken = (function() {
      var getListen, ltcount;

      function ListenToken(retriever, data) {
        this.retriever = retriever;
        this.data = data;
        this.modifyCollectionRetrieveRequest = __bind(this.modifyCollectionRetrieveRequest, this);
        this.getCollectionRetrieveRequest = __bind(this.getCollectionRetrieveRequest, this);
        this.modifyRetrieveRequest = __bind(this.modifyRetrieveRequest, this);
        this.getRetrieveRequest = __bind(this.getRetrieveRequest, this);
        this.getProcessMetaData = __bind(this.getProcessMetaData, this);
        this.getDataMerge = __bind(this.getDataMerge, this);
        this.extend = __bind(this.extend, this);
        this.queueDeleteData = __bind(this.queueDeleteData, this);
        this.deleteData = __bind(this.deleteData, this);
        this.queueAddData = __bind(this.queueAddData, this);
        this.addData = __bind(this.addData, this);
        this.cancelIdUnlisten = __bind(this.cancelIdUnlisten, this);
        this.processMetaData = __bind(this.processMetaData, this);
        this.collectionRetrieveRequestMerge = __bind(this.collectionRetrieveRequestMerge, this);
        this.retrieveRequestMerge = __bind(this.retrieveRequestMerge, this);
      }

      getListen = function(e) {
        return linq.From(e.ids).SelectMany(function(ee) {
          return ee.ParameterGroups;
        }).SelectMany(function(ee) {
          return ee.Parameters;
        }).Where(function(ee) {
          return ee.Name === 'id' && ee.Id === 'id';
        }).SelectMany(function(ee) {
          return ee.Values;
        }).Where(function(ee) {
          return ee.Name === 'id';
        }).Select(function(ee) {
          return ee.Value;
        }).ToArray();
      };

      ListenToken.getUnlistens = function(unlistens, cancellers) {
        var cancelIds, collectionCancelIds, collectionUnlistenIds, getCollectionListen, ret, unlistenIds;
        unlistenIds = unlistens.SelectMany(function(u) {
          return u.cachedRetrieveRequests;
        }).GroupBy((function(u) {
          return u.type;
        }), getListen);
        if (cancellers) {
          cancelIds = cancellers.SelectMany(function(u) {
            return u.cachedRetrieveRequests;
          }).GroupBy((function(u) {
            return u.type;
          }), getListen);
        } else {
          cancelIds = linq.From([]);
        }
        unlistenIds = unlistenIds.Select(function(u) {
          return {
            type: u.Key(),
            ids: u.SelectMany().Where(function(uu) {
              return !cancelIds.Where(function(c) {
                return c.Key() === u.Key();
              }).Any(function(cc) {
                return cc.Any(function(ccc) {
                  return ccc.indexOf(uu) > -1;
                });
              });
            }).ToArray()
          };
        }).ToArray();
        getCollectionListen = function(e) {
          return linq.From(e.collections).GroupBy((function(ee) {
            return ee.collection;
          }), getListen);
        };
        collectionUnlistenIds = unlistens.SelectMany(function(u) {
          return u.cachedCollectionRetrieveRequests;
        }).GroupBy((function(u) {
          return u.type;
        }), getCollectionListen);
        if (cancellers) {
          collectionCancelIds = cancellers.SelectMany(function(u) {
            return u.cachedCollectionRetrieveRequests;
          }).GroupBy((function(u) {
            return u.type;
          }), getCollectionListen);
        } else {
          collectionCancelIds = linq.From([]);
        }
        collectionCancelIds = collectionCancelIds.Select(function(u) {
          return {
            type: u.Key(),
            ids: u.SelectMany(function(uu) {
              return uu.Select(function(uuu) {
                return {
                  collection: uuu.Key(),
                  ids: uuu.SelectMany()
                };
              });
            })
          };
        });
        collectionUnlistenIds = collectionUnlistenIds.Select(function(u) {
          return {
            type: u.Key(),
            ids: u.SelectMany(function(uu) {
              return uu.Select(function(uuu) {
                return {
                  collection: uuu.Key(),
                  ids: uuu.SelectMany().Where(function(i) {
                    return !collectionCancelIds.Any(function(cc) {
                      return cc.type === u.Key() && cc.ids.Any(function(ccc) {
                        return ccc.collection === uuu.Key() && ccc.ids.Any(function(cccc) {
                          return cccc === i;
                        });
                      });
                    });
                  }).ToArray()
                };
              }).ToArray();
            }).ToArray()
          };
        }).ToArray();
        ret = {
          ids: unlistenIds,
          collections: collectionUnlistenIds
        };
        return ret;
      };

      ltcount = 0;

      ListenToken.prototype.retrieveRequestMerge = function(retrieveRequests) {
        return retrieveRequestMerge(this, retrieveRequests);
      };

      ListenToken.prototype.collectionRetrieveRequestMerge = function(collectionRetrieveRequests) {
        return collectionRetrieveRequestMerge(this, collectionRetrieveRequests);
      };

      ListenToken.prototype.processMetaData = function(metaData) {
        if (this._getProcessMetaData) {
          this._getProcessMetaData(metaData);
        }
        return metaData;
      };

      ListenToken.prototype.cancelIdUnlisten = function(requests) {
        var myRequest, myRequests, myValues, parameter, request, value, values, _i, _j, _k, _len, _len1, _len2, _ref;
        myRequests = [];
        this.retrieveRequestMerge(myRequests);
        for (_i = 0, _len = myRequests.length; _i < _len; _i++) {
          myRequest = myRequests[_i];
          request = linq.From(requests).SingleOrDefault(void 0, function(x) {
            return x.type === myRequest.type;
          });
          if (request) {
            myValues = linq.From(myRequest.ids).SelectMany(function(x) {
              return x.ParameterGroups;
            }).SelectMany(function(x) {
              return x.Parameters;
            }).Where(function(x) {
              return x.Id === 'id' && x.Name === 'id';
            }).SelectMany(function(p) {
              return p.Values;
            }).Where(function(v) {
              return v.Name === 'id';
            }).Select(function(v) {
              return v.Value;
            }).ToArray();
            _ref = linq.From(request.ids).SelectMany(function(p) {
              return p.ParameterGroups;
            }).SelectMany(function(p) {
              return p.Parameters;
            }).Where(function(p) {
              return p.Name === 'id' && p.Id === 'id';
            }).ToArray();
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
              parameter = _ref[_j];
              values = linq.From(parameter.Values).Where(function(v) {
                return v.Name = 'id' && myValues.indexOf(v.Value) > -1;
              }).ToArray();
              for (_k = 0, _len2 = values.length; _k < _len2; _k++) {
                value = values[_k];
                parameter.Values.splice(parameter.Values.indexOf(value), 1);
              }
            }
          }
        }
        return requests;
      };

      ListenToken.prototype.cancelCollectionUnlisten = function(requests) {
        var collection, myCollection, myRequest, myRequests, myValues, parameter, request, value, values, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1;
        myRequests = [];
        this.collectionRetrieveRequestMerge(myRequests);
        for (_i = 0, _len = myRequests.length; _i < _len; _i++) {
          myRequest = myRequests[_i];
          request = linq.From(requests).SingleOrDefault(void 0, function(x) {
            return x.type === myRequest.type;
          });
          if (request) {
            _ref = myRequest.collections;
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
              myCollection = _ref[_j];
              collection = linq.From(request.collections).SingleOrDefault(void 0, function(x) {
                return x.collection === myCollection.collection;
              });
              if (collection) {
                myValues = linq.From(myCollection.ids).SelectMany(function(x) {
                  return x.ParameterGroups;
                }).SelectMany(function(x) {
                  return x.Parameters;
                }).Where(function(x) {
                  return x.Id === 'id' && x.Name === 'id';
                }).SelectMany(function(p) {
                  return p.Values;
                }).Where(function(v) {
                  return v.Name === 'id';
                }).Select(function(v) {
                  return v.Value;
                }).ToArray();
                _ref1 = linq.From(collection.ids).SelectMany(function(p) {
                  return p.ParameterGroups;
                }).SelectMany(function(p) {
                  return p.Parameters;
                }).Where(function(p) {
                  return p.Name === 'id' && p.Id === 'id';
                }).ToArray();
                for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
                  parameter = _ref1[_k];
                  values = linq.From(parameter.Values).Where(function(v) {
                    return v.Name = 'id' && myValues.indexOf(v.Value) > -1;
                  }).ToArray();
                  for (_l = 0, _len3 = values.length; _l < _len3; _l++) {
                    value = values[_l];
                    parameter.Values.splice(parameter.Values.indexOf(value), 1);
                  }
                }
              }
            }
          }
        }
        return requests;
      };

      ListenToken.prototype.compare = function(token) {
        var cids, collectionRequests, cparam, cparams, cvalue, idRequests, ids, myCollectionRequests, myIdRequests, parameter, parameters, value, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _m, _n, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
        if (this.mixin || token.mixin) {
          return false;
        }
        if (this.retriever !== token.retriever) {
          return false;
        }
        myIdRequests = this.cachedRetrieveRequests || this.retrieveRequestMerge([]);
        idRequests = token.cachedRetrieveRequests || token.retrieveRequestMerge([]);
        if (idRequests.length > 1 || myIdRequests.length > 1) {
          throw "illegal request #1";
        }
        if (idRequests.length !== myIdRequests.length) {
          return false;
        }
        if ((idRequests.length === (_ref = myIdRequests.length) && _ref === 1)) {
          if (idRequests[0].type !== myIdRequests[0].type) {
            return false;
          }
          if (idRequests[0].ids.length !== 1 || myIdRequests[0].ids.length !== 1) {
            throw "illegal request #2";
          }
          if (idRequests[0].ids[0].Id !== myIdRequests[0].ids[0].Id) {
            return false;
          }
          if (idRequests[0].ids[0].ParameterGroups.length !== 1 || myIdRequests[0].ids[0].ParameterGroups.length !== 1) {
            throw "illegal request #3";
          }
          ids = linq.From(idRequests[0].ids[0].ParameterGroups[0].Parameters).Where(function(x) {
            return x.Id === 'id';
          }).SelectMany(function(x) {
            return x.Values;
          }).Where(function(x) {
            return x.Name === 'id';
          }).Select(function(x) {
            return x.Value;
          }).ToArray();
          cids = linq.From(myIdRequests[0].ids[0].ParameterGroups[0].Parameters).Where(function(x) {
            return x.Id === 'id';
          }).SelectMany(function(x) {
            return x.Values;
          }).Where(function(x) {
            return x.Name === 'id';
          }).Select(function(x) {
            return x.Value;
          }).ToArray();
          if (ids.length !== cids.length || linq.From(ids).Any(function(x) {
            return cids.indexOf(x) < 0;
          })) {
            return false;
          }
          cparams = linq.From(myIdRequests[0].ids[0].ParameterGroups[0].Parameters).Where(function(x) {
            return x.Id !== 'id';
          }).ToArray();
          _ref1 = linq.From(idRequests[0].ids[0].ParameterGroups[0].Parameters).Where(function(x) {
            return x.Id !== 'id';
          }).ToArray();
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            parameters = _ref1[_i];
            if (linq.From(cparams).Any(function(p) {
              return !linq.From(parameters).Any(function(pp) {
                return pp.Id === p.Id && pp.Name === p.Name;
              });
            })) {
              return false;
            }
            if (linq.From(parameters).Any(function(p) {
              return !linq.From(cparams).Any(function(pp) {
                return pp.Id === p.Id && pp.Name === p.Name;
              });
            })) {
              return false;
            }
            for (_j = 0, _len1 = parameters.length; _j < _len1; _j++) {
              parameter = parameters[_j];
              cparam = linq.From(cparams).Single(function(p) {
                return p.Id === parameter.Id && p.Name === parameter.Name;
              });
              _ref2 = parameter.Values;
              for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                value = _ref2[_k];
                cvalue = linq.From(cparam.Values).SingleOrDefault(void 0, function(v) {
                  return v.Name === value.Name;
                });
                if (!cvalue || cvalue.Value !== value.Value) {
                  return false;
                }
              }
            }
          }
        }
        myCollectionRequests = this.cachedCollectionRetrieveRequests || this.collectionRetrieveRequestMerge([]);
        collectionRequests = token.cachedCollectionRetrieveRequests || token.collectionRetrieveRequestMerge([]);
        if (collectionRequests.length > 1 || myCollectionRequests.length > 1) {
          throw "illegal collection request #1";
        }
        if (collectionRequests.length !== myCollectionRequests.length) {
          return false;
        }
        if ((collectionRequests.length === (_ref3 = myCollectionRequests.length) && _ref3 === 1)) {
          if (collectionRequests[0].type !== myCollectionRequests[0].type) {
            return false;
          }
          if (collectionRequests[0].collections.length !== 1 || myCollectionRequests[0].collections.length !== 1) {
            throw "illegal collection request #2";
          }
          if (collectionRequests[0].collections[0].collection !== myCollectionRequests[0].collections[0].collection) {
            return false;
          }
          if (collectionRequests[0].collections[0].ids.length !== 1 || myCollectionRequests[0].collections[0].ids.length !== 1) {
            throw "illegal collection request #3";
          }
          if (collectionRequests[0].collections[0].ids[0].Id !== myCollectionRequests[0].collections[0].ids[0].Id) {
            return false;
          }
          if (collectionRequests[0].collections[0].ids[0].ParameterGroups.length !== 1 || myCollectionRequests[0].collections[0].ids[0].ParameterGroups.length !== 1) {
            throw "illegal collection request #3";
          }
          ids = linq.From(collectionRequests[0].collections[0].ids[0].ParameterGroups[0].Parameters).Where(function(x) {
            return x.Id === 'id';
          }).SelectMany(function(x) {
            return x.Values;
          }).Where(function(x) {
            return x.Name === 'id';
          }).Select(function(x) {
            return x.Value;
          }).ToArray();
          cids = linq.From(myCollectionRequests[0].collections[0].ids[0].ParameterGroups[0].Parameters).Where(function(x) {
            return x.Id === 'id';
          }).SelectMany(function(x) {
            return x.Values;
          }).Where(function(x) {
            return x.Name === 'id';
          }).Select(function(x) {
            return x.Value;
          }).ToArray();
          if (ids.length !== cids.length || linq.From(ids).Any(function(x) {
            return cids.indexOf(x) < 0;
          })) {
            return false;
          }
          cparams = linq.From(myCollectionRequests[0].collections[0].ids[0].ParameterGroups[0].Parameters).Where(function(x) {
            return x.Id !== 'id';
          }).ToArray();
          _ref4 = linq.From(collectionRequests[0].collections[0].ids[0].ParameterGroups[0].Parameters).Where(function(x) {
            return x.Id !== 'id';
          }).ToArray();
          for (_l = 0, _len3 = _ref4.length; _l < _len3; _l++) {
            parameters = _ref4[_l];
            if (linq.From(cparams).Any(function(p) {
              return !linq.From(parameters).Any(function(pp) {
                return pp.Id === p.Id && pp.Name === p.Name;
              });
            })) {
              return false;
            }
            if (linq.From(parameters).Any(function(p) {
              return !linq.From(cparams).Any(function(pp) {
                return pp.Id === p.Id && pp.Name === p.Name;
              });
            })) {
              return false;
            }
            for (_m = 0, _len4 = parameters.length; _m < _len4; _m++) {
              parameter = parameters[_m];
              cparam = linq.From(cparams).Single(function(p) {
                return p.Id === parameter.Id && p.Name === parameter.Name;
              });
              _ref5 = parameter.Values;
              for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
                value = _ref5[_n];
                cvalue = linq.From(cparam.Values).SingleOrDefault(void 0, function(v) {
                  return v.Name === value.Name;
                });
                if (!cvalue || cvalue.Value !== value.Value) {
                  return false;
                }
              }
            }
          }
        }
        return true;
      };

      ListenToken.prototype.addData = function() {};

      ListenToken.prototype.queueAddData = function() {};

      ListenToken.prototype.deleteData = function() {};

      ListenToken.prototype.queueDeleteData = function() {};

      ListenToken.prototype.extend = function(extend) {
        this.data.extend(extend);
        return this;
      };

      ListenToken.prototype.getDataMerge = function(_dataMerge) {
        this.dataMerge = _dataMerge;
        return this;
      };

      ListenToken.prototype.getProcessMetaData = function(_getProcessMetaData) {
        this._getProcessMetaData = _getProcessMetaData;
        return this;
      };

      ListenToken.prototype.getRetrieveRequest = function(_getRetrieveRequest) {
        this.cachedRetrieveRequests = void 0;
        this._getRetrieveRequest = _getRetrieveRequest;
        return this;
      };

      ListenToken.prototype.modifyRetrieveRequest = function(_modifyRetrieveRequest) {
        this._modifyRetrieveRequest = _modifyRetrieveRequest;
        return this;
      };

      ListenToken.prototype.getCollectionRetrieveRequest = function(_getCollectionRetrieveRequest) {
        this.cachedCollectionRetrieveRequests = void 0;
        this._getCollectionRetrieveRequest = _getCollectionRetrieveRequest;
        return this;
      };

      ListenToken.prototype.modifyCollectionRetrieveRequest = function(_modifyCollectionRetrieveRequest) {
        this._modifyCollectionRetrieveRequest = _modifyCollectionRetrieveRequest;
        return this;
      };

      return ListenToken;

    })();
    return {
      getMe: function() {
        return ListenToken;
      }
    };
  });

}).call(this);
