(function() {
  define(["jquery", "knockout", "listenToken", "observableExtensions.extender", "linq"], function($, ko, ListenToken, ext, linq) {
    return ko.extenders.page = function(target, options) {
      target.page = function(name, initialiser) {
        var lt, myPagerInfo, myParameter, oldAddPagerInfo;
        myParameter = ko.observable();
        myPagerInfo = void 0;
        lt = void 0;
        oldAddPagerInfo = target._addPagerInfo;
        target._addPagerInfo = function(filter) {
          if (oldAddPagerInfo) {
            oldAddPagerInfo(filter);
          }
          myPagerInfo = ext.getMyPagerInfo(target, "page", name);
          if (myPagerInfo.filter) {
            return myPagerInfo.pages = {
              set: function() {
                filter(this);
                lt.listen();
                return lt.cycle();
              },
              first: {
                isEnabled: ko.observable(),
                value: ko.observable(1),
                url: ko.observable(ext.getMyFilterUrl(myPagerInfo.filter, 'page', name, {
                  page: 1
                }))
              },
              previous: {
                isEnabled: ko.observable(),
                value: ko.observable(1),
                url: ko.observable()
              },
              current: {
                value: ko.observable(),
                url: ko.observable()
              },
              next: {
                isEnabled: ko.observable(),
                value: ko.observable(),
                url: ko.observable()
              },
              last: {
                isEnabled: ko.observable(),
                value: ko.observable(),
                url: ko.observable()
              }
            };
          }
        };
        if (initialiser) {
          initialiser(target);
        }
        target._extendListenToken(function(extended) {
          return function() {
            var oldCanAddData, oldmeta, oldmod;
            lt = extended();
            oldCanAddData = lt.canAddData;
            lt.canAddData = function(addData, completeData) {
              var ret;
              if (oldCanAddData(addData, completeData)) {
                if (completeData.length > 1 && completeData.indexOf(addData.value) === 0) {
                  lt.reListening = true;
                  options.listener.listen(lt);
                  options.listener.cycle();
                  return false;
                }
                ret = true;
                if (completeData.indexOf(addData.value) >= 10) {
                  ret = false;
                } else {
                  if (completeData.length >= 10) {
                    lt.data.peek().splice(10, completeData.length - 10);
                  }
                }
                myPagerInfo.metadata || (myPagerInfo.metadata = {
                  count: 0
                });
                myPagerInfo.metadata.count += 1;
                lt._getProcessMetaData(myPagerInfo.metadata);
                return ret;
              }
            };
            oldmod = lt._modifyCollectionRetrieveRequest;
            lt._modifyCollectionRetrieveRequest = function(parameters) {
              if (oldmod) {
                oldmod(parameters);
              }
              return parameters.push({
                Name: "page",
                Id: name,
                Values: [
                  {
                    Name: 'page',
                    Value: myParameter() || (ext.getMyFilterValue(myPagerInfo, "page", name, "page")) || 1
                  }
                ]
              });
            };
            oldmeta = lt._getProcessMetaData;
            lt._getProcessMetaData = function(metadata) {
              var currentPage;
              if (oldmeta) {
                oldmeta(metadata);
              }
              myPagerInfo = ext.getMyPagerInfo(target, "page", name);
              currentPage = myParameter() || Number(ext.getMyFilterValue(myPagerInfo, "page", name, "page")) || 1;
              myPagerInfo.isVisible(!myParameter());
              myPagerInfo.pages.first.url(ext.getMyFilterUrl(myPagerInfo.filter, 'page', name, {
                page: 1
              }));
              myPagerInfo.pages.first.isEnabled(currentPage > 1);
              myPagerInfo.pages.previous.isEnabled(currentPage > 2);
              myPagerInfo.pages.previous.url(ext.getMyFilterUrl(myPagerInfo.filter, 'page', name, {
                page: currentPage - 1
              }));
              myPagerInfo.pages.previous.value(currentPage - 1);
              myPagerInfo.pages.current.value(currentPage);
              myPagerInfo.pages.current.url(ext.getMyFilterUrl(myPagerInfo.filter, 'page', name, {
                page: currentPage
              }));
              myPagerInfo.pages.next.value(currentPage + 1);
              myPagerInfo.pages.next.url(ext.getMyFilterUrl(myPagerInfo.filter, 'page', name, {
                page: currentPage + 1
              }));
              myPagerInfo.pages.next.isEnabled(currentPage + 1 < (Math.ceil(metadata.count / 10)));
              myPagerInfo.pages.last.url(ext.getMyFilterUrl(myPagerInfo.filter, 'page', name, {
                page: Math.ceil(metadata.count / 10)
              }));
              myPagerInfo.pages.last.value(Math.ceil(metadata.count / 10));
              myPagerInfo.pages.last.isEnabled(currentPage < (Math.ceil(metadata.count / 10)));
              return myPagerInfo.metadata = metadata;
            };
            return lt;
          };
        });
        return function(parameter) {
          myParameter(parameter);
          return target;
        };
      };
      return target;
    };
  });

}).call(this);
