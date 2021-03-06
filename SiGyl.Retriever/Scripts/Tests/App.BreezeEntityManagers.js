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
      "knockout.mapping": "knockout.mapping-latest",
      breezeEntityManagers: "App/BreezeEntityManagers",
      observableExtensions: "app/observableExtensions",
      configurationMetaData: "tests/metadata/configuration",
      runtimeMetaData: "tests/metadata/runtime",
      historyMetaData: "tests/metadata/history",
      utils: "App/utils"
    }
  });

  require(["linq", "Q", "breezeEntityManagers", "configurationMetaData", "runtimeMetaData", "historyMetaData", "sinon", "sinonie"], function(linq, Q, breezeEntityManagers, configurationMetaData, runtimeMetaData, historyMetaData) {});

}).call(this);
