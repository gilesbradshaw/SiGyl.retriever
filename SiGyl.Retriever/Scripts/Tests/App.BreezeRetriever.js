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
      breeze: "breeze.debug",
      knockout: "knockout-3.2.0.debug",
      breezeretriever: "App/BreezeRetriever",
      breezeEntityManagers: "App/BreezeEntityManagers",
      store: "App/store",
      b64: "App/b64",
      source: "App/Source",
      observableExtensions: "app/observableExtensions",
      configurationMetaData: "tests/metaData/configuration",
      runtimeMetaData: "tests/metaData/runtime",
      historyMetaData: "tests/metaData/history"
    }
  });

  require(["linq", "Q", "breezeretriever", "source", "configurationMetaData", "runtimeMetaData", "historyMetaData", "sinon", "sinonie"], function(linq, Q, breezeRetriever, source, configurationMetaData, runtimeMetaData, historyMetaData) {
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
      }, 1000);
    });
    return QUnit.asyncTest("breezeRetrieve get collection", function(assert) {
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
      }, 1000);
    });
  });

}).call(this);
