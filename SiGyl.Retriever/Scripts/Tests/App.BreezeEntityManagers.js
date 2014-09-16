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
      breezeEntityManagers: "App/BreezeEntityManagers",
      observableExtensions: "app/observableExtensions",
      configurationMetaData: "tests/metaData/configuration",
      runtimeMetaData: "tests/metaData/runtime",
      historyMetaData: "tests/metaData/history"
    }
  });

  require(["linq", "Q", "breezeEntityManagers", "configurationMetaData", "runtimeMetaData", "historyMetaData", "sinon", "sinonie"], function(linq, Q, breezeEntityManagers, configurationMetaData, runtimeMetaData, historyMetaData) {});

}).call(this);