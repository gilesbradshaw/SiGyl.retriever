(function() {
  requirejs.config({
    baseUrl: '../scripts',
    map: {
      '*': {
        ko: 'knockout'
      }
    },
    shim: {
      breeze: ['Q', 'jquery', 'knockout'],
      sinonie: ['sinon']
    },
    paths: {
      linq: "linqjs-amd",
      sinon: "sinon-1.10.3",
      sinonie: "sinon-ie-1.10.3",
      Q: "q",
      jquery: "jquery-2.1.1",
      retriever: "app/retriever",
      breeze: "breeze.debug",
      knockout: "knockout-3.2.0.debug",
      "knockout.mapping": "knockout.mapping-latest",
      breezeretriever: "App/BreezeRetriever",
      breezeEntityManagers: "App/BreezeEntityManagers",
      store: "App/store",
      b64: "App/b64",
      listener: "App/Listener",
      source: "App/Source",
      storeTemp: "App/storeTemp",
      observableExtensions: "app/observableExtensions",
      configurationMetaData: "App/metadata/configuration",
      runtimeMetaData: "App/metadata/runtime",
      historyMetaData: "App/metadata/history",
      utils: "App/utils"
    }
  });

  require(["linq", "retriever", "Q", "breezeretriever", "listener", "source", "storeTemp", "configurationMetaData", "runtimeMetaData", "historyMetaData", "sinon", "sinonie"], function(linq, Retriever, Q, breezeRetriever, listener, source, storeTemp, configurationMetaData, runtimeMetaData, historyMetaData) {
    QUnit.test("check linq", function(assert) {
      return assert.ok(linq, 'linq installed');
    });
    QUnit.test("check sinon", function(assert) {
      return assert.ok(sinon, 'sinon installed');
    });
    QUnit.asyncTest("if no tokens require fetching source join is not called", sinon.test(function(assert) {
      var breezeDeferreds, pr, promise, r, sourceStub, stubbedBreezeRetriever;
      promise = {
        done: this.spy(),
        "catch": this.spy(),
        "finally": this.spy()
      };
      sourceStub = {
        "on": function() {},
        invoke: sinon.stub().returns(promise)
      };
      this.stub(source, "getMe", function() {
        return sourceStub;
      });
      breezeDeferreds = {
        get: Q.defer(),
        getCollection: Q.defer()
      };
      stubbedBreezeRetriever = {
        get: this.stub().returns(breezeDeferreds.get.promise),
        getCollection: this.stub().returns(breezeDeferreds.getCollection.promise)
      };
      this.stub(breezeRetriever, "getMe", function() {
        return stubbedBreezeRetriever;
      });
      r = Retriever.getMe();
      pr = r.retrieve(["token", "token"]);
      assert.ok(sourceStub.invoke.calledOnce, "source invoke called");
      assert.equal(sourceStub.invoke.args[0][0], "join", "source  join");
      assert.equal(sourceStub.invoke.args[0][2].length, 0, "no joins");
      assert.equal(sourceStub.invoke.args[0][3].length, 0, "no collection joins");
      promise.done.args[0][0]("result!");
      assert.ok(breezeRetriever.getMe().get.calledOnce, "breezeRetiever get called");
      assert.ok(breezeRetriever.getMe().getCollection.calledOnce, "breezeRetiever getCollection called");
      pr.done(function(x) {
        assert.equal(x.length, 0);
        return QUnit.start();
      });
      breezeDeferreds.get.resolve([]);
      return breezeDeferreds.getCollection.resolve([]);
    }));
    QUnit.asyncTest("source join fails result", sinon.test(function(assert) {
      var pr, promise, r, sourceStub, storeStub;
      this.clock.restore();
      promise = {
        done: this.spy(),
        "catch": this.spy(),
        "yup": "!yup"
      };
      sourceStub = {
        "on": function() {},
        invoke: sinon.stub().returns(promise)
      };
      this.stub(source, "getMe", function() {
        return sourceStub;
      });
      storeStub = {
        mergeData: sinon.stub().returns("ok!!")
      };
      this.stub(storeTemp, "getMe", function() {
        return storeStub;
      });
      r = Retriever.getMe();
      pr = r.retrieve([]);
      pr["catch"](function() {
        assert.ok(!storeStub.mergeData.called, "no data merged");
        return QUnit.start();
      });
      return setTimeout(function() {
        return promise["catch"].args[0][0]("failed");
      }, 100);
    }));
    QUnit.test("joins called", sinon.test(function(assert) {
      var pr, promise, r, sourceStub;
      promise = {
        done: this.spy(),
        "catch": this.spy()
      };
      sourceStub = {
        "on": function() {},
        invoke: sinon.stub().returns(promise)
      };
      this.stub(source, "getMe", function() {
        return sourceStub;
      });
      r = Retriever.getMe();
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
      assert.ok(sourceStub.invoke.calledOnce, "source invoke not called");
      assert.equal(sourceStub.invoke.args[0][0], "join", "source  join");
      assert.equal(sourceStub.invoke.args[0][2], "join1:join2", "joins");
      return assert.equal(sourceStub.invoke.args[0][3], "collectionjoin1:collectionjoin2", "collection joins");
    }));
    QUnit.asyncTest("unlistens called", sinon.test(function(assert) {
      var pr, promise, r, sourceStub;
      promise = {
        done: this.spy(),
        "catch": this.spy(),
        "finally": this.spy()
      };
      sourceStub = {
        "on": function() {},
        invoke: sinon.stub().returns(promise)
      };
      this.stub(source, "getMe", function() {
        return sourceStub;
      });
      r = Retriever.getMe();
      pr = r.unlisten("unlistens", "collectionUnlistens");
      assert.ok(sourceStub.invoke.calledOnce, "source invoke not called");
      assert.equal(sourceStub.invoke.args[0][0], "leave", "source  leave");
      assert.equal(sourceStub.invoke.args[0][1], "unlistens", "unlistens");
      assert.equal(sourceStub.invoke.args[0][2], "collectionUnlistens", "collectionUnlistens");
      promise["done"].args[0][0]("ok");
      return pr.done(function(x) {
        assert.equal(x, "ok");
        return QUnit.start();
      });
    }));
    QUnit.asyncTest("unlistens called with fail", sinon.test(function(assert) {
      var pr, promise, r, sourceStub;
      promise = {
        done: this.spy(),
        "catch": this.spy(),
        "finally": this.spy()
      };
      sourceStub = {
        "on": function() {},
        invoke: sinon.stub().returns(promise)
      };
      this.stub(source, "getMe", function() {
        return sourceStub;
      });
      r = Retriever.getMe();
      pr = r.unlisten("unlistens", "collectionUnlistens");
      promise["catch"].args[0][0]("nok");
      return pr["catch"](function(x) {
        assert.equal(x, "nok");
        return QUnit.start();
      });
    }));
    QUnit.asyncTest("breezeRetrieve get", function(assert) {
      var promise, server;
      server = sinon.fakeServer.create();
      breezeRetriever.initMe(["http://localhost:41374/breeze/configuration"]);
      server.respondWith("GET", "http://localhost:41374/breeze/configuration/Metadata", JSON.stringify(configurationMetaData.getMe()));
      server.respond();
      server.respondWith("GET", "http://localhost:41374/breeze/configuration/Applications?$filter=Id%20eq%201", '[{"$id":"1","$type":"SiGyl.Models.Areas.Configuration.Sys.Application, SiGyl.Models.Areas.Configuration","Enterprises":null,"MyParentId":null,"Name":"7","Description":"e","Timestamp":{"$type":"System.Byte[], mscorlib","$value":"AAAAAAAGj7E="},"CreatedOn":"2012-11-27T14:39:17.217","ModifiedOn":"2014-08-23T00:24:55.067","UserIdCreated":null,"Exceptions":[],"Id":1}]');
      promise = breezeRetriever.getMe().get([
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
        assert.ok(data[0].Ids[0].ParameterGroups[0].Value[0].Timestamp() === "AAAAAAAGj7E=");
        server.restore();
        return QUnit.start();
      });
      promise["catch"](function() {
        assert.ok(false, "retrieve failed");
        server.restore();
        return QUnit.start();
      });
      return setTimeout(function() {
        return server.respond();
      }, 100);
    });
    QUnit.asyncTest("breezeRetrieve get collection", function(assert) {
      var promise, server;
      server = sinon.fakeServer.create();
      breezeRetriever.initMe(["http://localhost:41374/breeze/history"]);
      server.respondWith("GET", "http://localhost:41374/breeze/history/Metadata", JSON.stringify(historyMetaData.getMe()));
      server.respond();
      server.respondWith("GET", "http://localhost:41374/breeze/history/Batches?$filter=(ZoneId%20eq%201)%20and%20(Id%20lt%2022)&$orderby=Id&$skip=20&$top=10&$inlinecount=allpages", '{"$id":"1","$type":"Breeze.WebApi2.QueryResult, Breeze.WebApi2","Results":[{"$id":"2","$type":"SiGyl.Models.Areas.History.Batches.HistoryBatch, SiGyl.Models.Areas.History","ZoneId":1,"Zone":null,"FormulaId":1,"FormulaPath":"Self Check.DRY_SC10:1.0.DRY_SC10:1.0","UnitProcedures":null,"States":null,"MyParentId":1,"Commands":null,"RuntimeId":21,"Comment":null,"ConfigurationParentType":null,"ConfigurationParentId":1,"MyCommandId":null,"MyCommand":null,"Name":"gggg","Description":"Self Check Drying....bbb","Timestamp":{"$type":"System.Byte[], mscorlib","$value":"AAAAAAACIjk="},"CreatedOn":"2014-08-19T22:15:36.543","ModifiedOn":"2014-08-19T22:15:36.517","UserIdCreated":null,"Exceptions":[],"Id":21}],"InlineCount":21}');
      promise = breezeRetriever.getMe().getCollection([
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
        server.restore();
        return QUnit.start();
      });
      promise["catch"](function() {
        assert.ok(false, "retrieve failed");
        server.restore();
        return QUnit.start();
      });
      return setTimeout(function() {
        return server.respond();
      }, 100);
    });
    QUnit.test("joins called1", sinon.test(function(assert) {
      var joins, pr, promise, r, sourceStub;
      promise = {
        done: this.spy(),
        "catch": this.spy()
      };
      sourceStub = {
        "on": function() {},
        invoke: sinon.stub().returns(promise)
      };
      this.stub(source, "getMe", function() {
        return sourceStub;
      });
      r = Retriever.getMe();
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
      assert.ok(sourceStub.invoke.calledOnce, "source invoke not called");
      assert.equal(sourceStub.invoke.args[0][0], "join", "source  join");
      return assert.equal(sourceStub.invoke.args[0][2], joins, "joins");
    }));
    return QUnit.test("collection joins called1", sinon.test(function(assert) {
      var collectionJoins, pr, promise, r, ret, sourceStub;
      promise = {
        done: this.spy(),
        "catch": this.spy()
      };
      sourceStub = {
        "on": function() {},
        invoke: sinon.stub().returns(promise)
      };
      this.stub(source, "getMe", function() {
        return sourceStub;
      });
      r = Retriever.getMe();
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
      assert.ok(sourceStub.invoke.calledOnce, "source invoke not called");
      assert.equal(sourceStub.invoke.args[0][0], "join", "source  join");
      assert.equal(sourceStub.invoke.args[0][3], collectionJoins, "collectionJoins");
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
                        "metadata": {
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
