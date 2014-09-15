(function() {
  define(["jquery", "knockout", "listenToken", "observableExtensions.extender", "linq"], function($, ko, ListenToken, ext, linq) {
    return ko.extenders.title = function(target, options) {
      target.title = function(name, initialiser) {
        var myPagerInfo, oldAddPagerInfo;
        myPagerInfo = void 0;
        oldAddPagerInfo = target._addPagerInfo;
        target._addPagerInfo = function(filter) {
          if (oldAddPagerInfo) {
            oldAddPagerInfo(filter);
          }
          myPagerInfo = ext.getMyPagerInfo(target, "title", name);
          myPagerInfo.isVisible = ko.observable(true);
          return myPagerInfo.isEnabled = ko.observable(true);
        };
        target._addPagerInfo.source = "target";
        if (initialiser) {
          initialiser(target);
        }
        return function() {
          return target;
        };
      };
      return target;
    };
  });

}).call(this);
