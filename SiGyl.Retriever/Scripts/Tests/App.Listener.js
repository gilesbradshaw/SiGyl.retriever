(function() {
  var listenToken;

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
      listener: "App/Listener"
    }
  });

  listenToken = {
    getUnlistens: function() {}
  };

  define("listenToken", [], function() {
    return {
      getMe: function() {
        return listenToken;
      }
    };
  });

  require(["linq", "Q", "listener", "sinon", "sinonie"], function(linq, Q, listener) {
    QUnit.asyncTest("listen to a token should retrieve it and merge it", sinon.test(function(assert) {
      var retrieve, retrieveFunc, tested;
      this.clock.restore();
      listener.initMe();
      tested = listener.getMe();
      tested.unlistening()[1] = "unlisten";
      retrieveFunc = void 0;
      listenToken = {
        key: 1,
        dataMerge: this.spy(),
        dataReceived: this.stub().returns(1),
        retriever: {
          retrieve: this.stub().returns((retrieve = Q.defer()).promise)
        }
      };
      tested.listen(listenToken);
      assert.ok(!(1 in tested.unlistening()), "unlistening deleted");
      assert.ok(!(1 in tested.listening()), "no listening");
      assert.ok(!(1 in tested.cycled()), "no cycled");
      assert.ok(!(1 in tested.completed()), "no completed");
      assert.ok(tested.cycling()[1] === listenToken, "listening to listenToken");
      assert.ok(listenToken.retriever.retrieve.args[0][0][0] === listenToken, "listen token passed to retriever");
      retrieve.resolve("retrieveData");
      return setTimeout(function() {
        assert.ok(!(1 in tested.unlistening()), "unlistening deleted");
        assert.ok(!(1 in tested.listening()), "no listening");
        assert.ok(!(1 in tested.cycling()), "no cycling");
        assert.ok(!(1 in tested.completed()), "no completed");
        assert.ok(tested.cycled()[1] === listenToken, "listentoken cycled");
        assert.ok(listenToken.dataMerge.args[0][0] === "retrieveData");
        assert.ok(listenToken.dataReceived.args[1][0] === 2, 'data received incremented');
        return QUnit.start();
      }, 100);
    }));
    return QUnit.asyncTest("listen to multiple tokens should retrieve them and merge them", sinon.test(function(assert) {
      var listenToken1, retrieve, retrieve1, retrieveFunc, retriever, retriever1, tested;
      this.clock.restore();
      listener.initMe();
      tested = listener.getMe();
      retrieveFunc = void 0;
      retriever = {
        retrieve: this.stub().returns((retrieve = Q.defer()).promise)
      };
      retriever1 = {
        retrieve: this.stub().returns((retrieve1 = Q.defer()).promise)
      };
      listenToken = {
        key: 1,
        dataMerge: this.spy(),
        dataReceived: this.stub().returns(1),
        retriever: retriever
      };
      listenToken1 = {
        key: 2,
        dataMerge: this.spy(),
        dataReceived: this.stub().returns(2),
        retriever: retriever1
      };
      tested.listen(listenToken);
      assert.ok(retriever.retrieve.args[0][0][0] === listenToken, "listen token passed to retriever");
      tested.listen(listenToken1);
      assert.ok(retriever1.retrieve.args[0][0].length === 0, "no second listen yet");
      retrieve.resolve("retrieveData");
      return setTimeout(function() {
        assert.ok(listenToken.dataMerge.args[0][0] === "retrieveData");
        assert.ok(listenToken.dataReceived.args[1][0] === 2, 'data received incremented');
        retrieve1.resolve("retrieveData1");
        return setTimeout(function() {
          assert.ok(listenToken1.dataMerge.args[0][0] === "retrieveData1");
          assert.ok(listenToken1.dataReceived.args[1][0] === 3, 'data received incremented');
          return QUnit.start();
        }, 100);
      }, 100);
    }));
  });

}).call(this);
