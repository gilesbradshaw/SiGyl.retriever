(function() {
  requirejs.config({
    baseUrl: '../scripts',
    map: {
      '*': {
        ko: 'knockout'
      }
    },
    shim: {
      sinonie: ['sinon']
    },
    paths: {
      linq: "linqjs-amd",
      sinon: "sinon-1.10.3",
      sinonie: "sinon-ie-1.10.3",
      Q: "q",
      jquery: "jquery-2.1.1",
      knockout: "knockout-3.2.0.debug",
      "knockout.mapping": "knockout.mapping-latest",
      listenToken: "App/ListenToken",
      utils: "App/utils"
    }
  });

  require(["linq", "Q", "listenToken", "sinon", "sinonie"], function(linq, Q, listenToken) {
    return QUnit.test("checkt", sinon.test(function(assert) {
      return assert.ok(listenToken);
    }));
  });

}).call(this);
