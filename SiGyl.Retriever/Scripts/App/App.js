(function() {
  requirejs.config({
    baseUrl: '../scripts',
    map: {
      '*': {
        ko: 'knockout'
      }
    },
    shim: {
      breeze: ['Q', 'jquery', 'knockout']
    },
    paths: {
      linq: "linqjs-amd",
      sinon: "sinon-1.9.1",
      Q: "q",
      jquery: "jquery-2.1.1",
      retriever: "app/retriever",
      breeze: "breeze.debug",
      knockout: "knockout-3.2.0",
      breezeretriever: "App/BreezeRetriever",
      breezeEntityManagers: "App/BreezeEntityManagers"
    }
  });

  require(["linq", "retriever", "Q", "breezeretriever", "sinon"], function(linq, Retriever, Q, breezeRetriever) {
    QUnit.test("check linq", function(assert) {
      return assert.ok(linq, 'linq installed');
    });
    QUnit.test("check sinon", function(assert) {
      return assert.ok(sinon, 'sinon installed');
    });
    QUnit.test("handles change and delete data callbacks from source", sinon.test(function(assert) {
      var listener, r, source, store;
      source = {
        "on": sinon.spy()
      };
      store = {
        changeData: sinon.stub().returns("stored data"),
        deleteData: sinon.stub().returns("deleted data")
      };
      listener = {
        addData: sinon.spy(),
        deleteData: sinon.spy(),
        cycle: sinon.spy()
      };
      r = new Retriever(source, store, listener);
      assert.ok(source["on"].calledTwice, "source on change and delete");
      linq.From(source["on"].args).Single(function(a) {
        return a[0] === "change";
      })[1]("id", "type", "data");
      assert.ok(store.changeData.calledOnce, "store change data called");
      assert.ok(store.changeData.args[0][0] === "id" && store.changeData.args[0][1] === "type" && store.changeData.args[0][2] === "data", "correct data stored");
      assert.ok(listener.addData.calledOnce, "listener add data");
      assert.ok(listener.addData.args[0][0] === r);
      assert.ok(listener.addData.args[0][1] === "stored data");
      assert.ok(listener.cycle.calledOnce);
      linq.From(source["on"].args).Single(function(a) {
        return a[0] === "delete";
      })[1]("id", "type", "data");
      assert.ok(store.deleteData.calledOnce, "store delete data called");
      assert.ok(store.deleteData.args[0][0] === "id" && store.deleteData.args[0][1] === "type" && store.deleteData.args[0][2] === "data", "correct data delete");
      assert.ok(listener.deleteData.calledOnce, "listener delete data");
      assert.ok(listener.deleteData.args[0][0] === r);
      assert.ok(listener.deleteData.args[0][1] === "deleted data");
      return assert.ok(listener.cycle.calledTwice);
    }));
    QUnit.asyncTest("if no tokens require fetching source join is not called", sinon.test(function(assert) {
      var pr, promise, r, source, store;
      promise = {
        done: this.spy(),
        "catch": this.spy(),
        "finally": this.spy()
      };
      source = {
        "on": function() {},
        invoke: sinon.stub().returns(promise)
      };
      store = {
        mergeData: sinon.stub().returns("ok!!")
      };
      r = new Retriever(source, store, "listener");
      pr = r.retrieve(["token", "token"]);
      assert.ok(source.invoke.calledOnce, "source invoke not called");
      assert.equal(source.invoke.args[0][0], "join", "source  join");
      assert.equal(source.invoke.args[0][2].length, 0, "no joins");
      assert.equal(source.invoke.args[0][3].length, 0, "no collection joins");
      promise.done.args[0][0]("result!");
      return pr.done(function(x) {
        assert.equal(store.mergeData.args[0][0], "result!", "data merged");
        assert.equal(x, 'ok!!');
        return QUnit.start();
      });
    }));
    QUnit.asyncTest("source join fails result", sinon.test(function(assert) {
      var pr, promise, r, source, store;
      this.clock.restore();
      promise = {
        done: this.spy(),
        "catch": this.spy()
      };
      source = {
        "on": function() {},
        invoke: sinon.stub().returns(promise)
      };
      store = {
        mergeData: sinon.stub().returns("ok!!")
      };
      r = new Retriever(source, store, "listener");
      pr = r.retrieve([]);
      pr["catch"](function() {
        assert.ok(!store.mergeData.called, "no data merged");
        return QUnit.start();
      });
      return setTimeout(function() {
        return promise["catch"].args[0][0]("failed");
      }, 100);
    }));
    QUnit.test("joins called", sinon.test(function(assert) {
      var pr, promise, r, source;
      promise = {
        done: this.spy(),
        "catch": this.spy()
      };
      source = {
        "on": function() {},
        invoke: sinon.stub().returns(promise)
      };
      r = new Retriever(source, "store", "listener");
      pr = r.retrieve([
        {
          retrieveRequestMerge: function() {
            return "join1:";
          },
          collectionRetrieveRequestMerge: function() {
            return "collectionjoin1:";
          }
        }, {
          retrieveRequestMerge: function(x) {
            return x + "join2";
          },
          collectionRetrieveRequestMerge: function(x) {
            return x + "collectionjoin2";
          }
        }
      ]);
      assert.ok(source.invoke.calledOnce, "source invoke not called");
      assert.equal(source.invoke.args[0][0], "join", "source  join");
      assert.equal(source.invoke.args[0][2], "join1:join2", "joins");
      return assert.equal(source.invoke.args[0][3], "collectionjoin1:collectionjoin2", "collection joins");
    }));
    QUnit.asyncTest("unlistens called", sinon.test(function(assert) {
      var pr, promise, r, source;
      promise = {
        done: this.spy(),
        "catch": this.spy(),
        "finally": this.spy()
      };
      source = {
        "on": function() {},
        invoke: sinon.stub().returns(promise)
      };
      r = new Retriever(source, "store", "listener");
      pr = r.unlisten("unlistens", "collectionUnlistens");
      assert.ok(source.invoke.calledOnce, "source invoke not called");
      assert.equal(source.invoke.args[0][0], "leave", "source  leave");
      assert.equal(source.invoke.args[0][1], "unlistens", "unlistens");
      assert.equal(source.invoke.args[0][2], "collectionUnlistens", "collectionUnlistens");
      promise["done"].args[0][0]("ok");
      return pr.done(function(x) {
        assert.equal(x, "ok");
        return QUnit.start();
      });
    }));
    QUnit.asyncTest("unlistens called with fail", sinon.test(function(assert) {
      var pr, promise, r, source;
      promise = {
        done: this.spy(),
        "catch": this.spy(),
        "finally": this.spy()
      };
      source = {
        "on": function() {},
        invoke: sinon.stub().returns(promise)
      };
      r = new Retriever(source, "store", "listener");
      pr = r.unlisten("unlistens", "collectionUnlistens");
      promise["catch"].args[0][0]("nok");
      return pr["catch"](function(x) {
        assert.equal(x, "nok");
        return QUnit.start();
      });
    }));
    QUnit.asyncTest("breezeRetrieve get", sinon.test(function(assert) {
      var promise;
      this.server.restore();
      promise = breezeRetriever.get([
        {
          "ids": [
            {
              "Id": "1",
              "ParameterGroups": [
                {
                  "Name": "Root:Application:0",
                  "Parameters": [
                    {
                      "Name": "id",
                      "Id": "id",
                      "Values": [
                        {
                          "Name": "id",
                          "Value": "1"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "type": "Application"
        }
      ]);
      promise.done(function(data) {
        assert.ok(data[0].Type === "Application", "application returned");
        assert.ok(data.length === 1);
        assert.ok(data[0].Ids[0].Key === 1);
        assert.ok(data[0].Ids.length === 1);
        assert.ok(data[0].Ids[0].ParameterGroups.length === 1);
        assert.ok(data[0].Ids[0].ParameterGroups[0].Name === "Root:Application:0");
        assert.ok(data[0].Ids[0].ParameterGroups[0].Value.length === 1);
        assert.ok(data[0].Ids[0].ParameterGroups[0].Value[0].Id() === 1);
        assert.ok(data[0].Ids[0].ParameterGroups[0].Value[0].Timestamp() === "AAAAAAAGgBo=");
        return QUnit.start();
      });
      return promise["catch"](function() {
        assert.ok(false, "retrieve failed");
        return QUnit.start();
      });
    }));
    QUnit.asyncTest("breezeRetrieve get collection", sinon.test(function(assert) {
      var promise;
      this.server.restore();
      promise = breezeRetriever.getCollection([
        {
          "collections": [
            {
              "collection": "Batches",
              "ids": [
                {
                  "Id": 1,
                  "IdProperty": "Id",
                  "ParameterGroups": [
                    {
                      "Name": "Collection:HistoryZone:Batches:12",
                      "Parameters": [
                        {
                          "Name": "id",
                          "Id": "id",
                          "Values": [
                            {
                              "Name": "id",
                              "Value": 1
                            }
                          ]
                        }, {
                          "Name": "order",
                          "Id": "order",
                          "Values": [
                            {
                              "Name": "propertyName",
                              "Value": "Id"
                            }, {
                              "Name": "isDescending",
                              "Value": false
                            }
                          ]
                        }, {
                          "Name": "filter",
                          "Id": "filter",
                          "Values": [
                            {
                              "Name": "property",
                              "Value": "Id"
                            }, {
                              "Name": "operator",
                              "Value": "<"
                            }, {
                              "Name": "value",
                              "Value": "22"
                            }
                          ]
                        }, {
                          "Name": "page",
                          "Id": "page",
                          "Values": [
                            {
                              "Name": "page",
                              "Value": "2"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "type": "HistoryZone"
        }
      ]);
      promise.done(function(data) {
        assert.ok(true);
        return QUnit.start();
      });
      return promise["catch"](function() {
        assert.ok(false, "retrieve failed");
        return QUnit.start();
      });
    }));
    QUnit.test("joins called1", sinon.test(function(assert) {
      var joins, pr, promise, r, source;
      promise = {
        done: this.spy(),
        "catch": this.spy()
      };
      source = {
        "on": function() {},
        invoke: sinon.stub().returns(promise)
      };
      r = new Retriever(source, "store", "listener");
      joins = [
        {
          "ids": [
            {
              "Id": "1",
              "ParameterGroups": [
                {
                  "Name": "Root:Application:0",
                  "Parameters": [
                    {
                      "Name": "id",
                      "Id": "id",
                      "Values": [
                        {
                          "Name": "id",
                          "Value": "1"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "type": "Application"
        }
      ];
      pr = r.retrieve([
        {
          retrieveRequestMerge: function() {
            return joins;
          }
        }
      ]);
      assert.ok(source.invoke.calledOnce, "source invoke not called");
      assert.equal(source.invoke.args[0][0], "join", "source  join");
      return assert.equal(source.invoke.args[0][2], joins, "joins");
    }));
    return QUnit.test("colelction joins called1", sinon.test(function(assert) {
      var collectionJoins, pr, promise, r, ret, source;
      promise = {
        done: this.spy(),
        "catch": this.spy()
      };
      source = {
        "on": function() {},
        invoke: sinon.stub().returns(promise)
      };
      r = new Retriever(source, "store", "listener");
      collectionJoins = [
        {
          "collections": [
            {
              "collection": "Batches",
              "ids": [
                {
                  "Id": 1,
                  "IdProperty": "Id",
                  "ParameterGroups": [
                    {
                      "Name": "Collection:HistoryZone:Batches:12",
                      "Parameters": [
                        {
                          "Name": "id",
                          "Id": "id",
                          "Values": [
                            {
                              "Name": "id",
                              "Value": 1
                            }
                          ]
                        }, {
                          "Name": "order",
                          "Id": "order",
                          "Values": [
                            {
                              "Name": "propertyName",
                              "Value": "Id"
                            }, {
                              "Name": "isDescending",
                              "Value": false
                            }
                          ]
                        }, {
                          "Name": "filter",
                          "Id": "filter",
                          "Values": [
                            {
                              "Name": "property",
                              "Value": "Id"
                            }, {
                              "Name": "operator",
                              "Value": "<"
                            }, {
                              "Name": "value",
                              "Value": "22"
                            }
                          ]
                        }, {
                          "Name": "page",
                          "Id": "page",
                          "Values": [
                            {
                              "Name": "page",
                              "Value": "2"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "type": "HistoryZone"
        }
      ];
      pr = r.retrieve([
        {
          collectionRetrieveRequestMerge: function() {
            return collectionJoins;
          }
        }
      ]);
      assert.ok(source.invoke.calledOnce, "source invoke not called");
      assert.equal(source.invoke.args[0][0], "join", "source  join");
      assert.equal(source.invoke.args[0][3], collectionJoins, "collectionJoins");
      return ret = [
        {
          "Type": "HistoryZone",
          "Ids": [],
          "Collections": [
            {
              "Collection": "Batches",
              "Ids": [
                {
                  "Key": "1",
                  "ParameterGroups": [
                    {
                      "Name": "Collection:HistoryZone:Batches:12",
                      "Collection": {
                        "data": [
                          {
                            "ZoneId": 1,
                            "Zone": null,
                            "FormulaId": 1,
                            "FormulaPath": "Self Check.DRY_SC10:1.0.DRY_SC10:1.0",
                            "UnitProcedures": null,
                            "States": null,
                            "MyParentId": 1,
                            "Commands": null,
                            "RuntimeId": 1,
                            "Comment": null
                          }, "ConfigurationParentType", null, {
                            "ConfigurationParentId": 1
                          }, {
                            "MyCommandId": null,
                            "MyCommand": null,
                            "Name": "newbatch"
                          }, "Description", "Self Check Drying....bbb", {
                            "Timestamp": "AAAAAAACmRQ=",
                            "CreatedOn": "2014-03-04T01:40:26.88",
                            "ModifiedOn": "2014-07-25T01:50:49.75",
                            "UserIdCreated": null,
                            "Exceptions": [],
                            "Id": 1
                          }
                        ],
                        "metaData": {
                          "count": 21
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ];
    }));
  });

}).call(this);
