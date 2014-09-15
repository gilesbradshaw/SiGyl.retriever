(function() {
  define(["jquery", "knockout", "listenToken", "linq"], function($, ko, ListenToken, linq) {
    return {
      getMyPagerInfo: function(me, type, name, filter) {
        var isRoot, myPagerInfo, trigger, typeInfo;
        if (!me._pagerInfo) {
          me._pagerInfo = ko.observableArray();
          me._pagerInfo.filter = filter;
        }
        typeInfo = $.Enumerable.From(me._pagerInfo()).SingleOrDefault(void 0, function(x) {
          return x.name === type;
        });
        if (!typeInfo) {
          typeInfo = {
            name: type,
            pagers: ko.observableArray()
          };
          me._pagerInfo.push(typeInfo);
        }
        myPagerInfo = $.Enumerable.From(typeInfo.pagers()).SingleOrDefault(void 0, function(x) {
          return x.name === name;
        });
        if (!myPagerInfo) {
          trigger = ko.observable(0);
          setTimeout((function() {
            return trigger(trigger() + 1);
          }), 1);
          if (me._pagerInfo.filter) {
            isRoot = me._pagerInfo.filter._isRoot;
          } else {
            isRoot = false;
          }
          myPagerInfo = {
            name: name,
            isRoot: isRoot,
            filter: me._pagerInfo.filter,
            isVisible: ko.observable(),
            configure: ko.observable(),
            toggleConfigure: function(me) {
              return me.configure(!me.configure());
            },
            disable: ko.pureComputed(function() {
              var filters, myFilter;
              if (trigger()) {
                if (me._pagerInfo.filter && me._pagerInfo.filter) {
                  filters = me._pagerInfo.filter().split('*');
                  myFilter = $.Enumerable.From(filters).FirstOrDefault(void 0, function(x) {
                    return x.split(':')[0] === type && x.split(':')[1] === name;
                  });
                  if (myFilter) {
                    filters.splice(filters.indexOf(myFilter), 1);
                  }
                  return filters.join('*');
                } else {
                  return "_";
                }
              }
            }),
            isEnabled: ko.pureComputed(function() {
              if (trigger()) {
                if (me._pagerInfo.filter && me._pagerInfo.filter()) {
                  return $.Enumerable.From(me._pagerInfo.filter().split('*')).FirstOrDefault(void 0, function(x) {
                    return x.split(':')[0] === type && x.split(':')[1] === name;
                  });
                }
              }
            })
          };
          typeInfo.pagers.push(myPagerInfo);
        }
        return myPagerInfo;
      },
      getMyFilterValue: function(pagerInfo, type, name, value) {
        var filter, myFilter, myValue;
        if (pagerInfo && pagerInfo.filter) {
          filter = pagerInfo.filter;
          myFilter = $.Enumerable.From(filter().split('*')).FirstOrDefault(void 0, function(x) {
            return x.split(':')[0] === type && x.split(':')[1] === name;
          });
          if (myFilter) {
            myValue = $.Enumerable.From(myFilter.split(':')).FirstOrDefault(void 0, function(x) {
              return x.split('|').length === 2 && x.split('|')[0] === value;
            });
            if (myValue) {
              return myValue.split('|')[1];
            }
          }
        }
      },
      getMyFilterUrl: function(filter, type, name, values) {
        var filters, key, myFilter, newFilter, value;
        filters = filter().split('*');
        myFilter = $.Enumerable.From(filters).FirstOrDefault(void 0, function(x) {
          return x.split(':')[0] === type && x.split(':')[1] === name;
        });
        newFilter = "" + type + ":" + name;
        for (key in values) {
          value = values[key];
          if (value !== void 0) {
            newFilter += ":" + key + "|" + value;
          }
        }
        if (myFilter) {
          filters[filters.indexOf(myFilter)] = newFilter;
        } else {
          filters.push(newFilter);
        }
        return filters.join('*');
      }
    };
  });

}).call(this);
