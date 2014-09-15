
define [
	"jquery"
	"knockout"
	"listenToken"
	"linq"
],($,ko,ListenToken,linq) ->

	getMyPagerInfo:(me,type,name,filter)->
		if !me._pagerInfo
			me._pagerInfo= ko.observableArray()
			me._pagerInfo.filter=filter
		typeInfo = $.Enumerable.From(me._pagerInfo()).SingleOrDefault undefined, (x)->x.name is type
		if !typeInfo
			typeInfo=
				name:type
				pagers:ko.observableArray()
			me._pagerInfo.push typeInfo
		myPagerInfo = $.Enumerable.From(typeInfo.pagers()).SingleOrDefault undefined, (x)->x.name is name
		if !myPagerInfo
			#to stop an immediate subscription to filter
			trigger = ko.observable 0
			setTimeout((()-> trigger trigger()+1),1)
			if me._pagerInfo.filter
				isRoot=me._pagerInfo.filter._isRoot
			else
				isRoot=false
			myPagerInfo = 
				name:name
				isRoot:isRoot
				filter:me._pagerInfo.filter
				isVisible:ko.observable()
				configure:ko.observable()
				toggleConfigure: (me) -> me.configure !me.configure()
				disable:ko.pureComputed ()->
					if trigger()
						if me._pagerInfo.filter and  me._pagerInfo.filter
							filters = me._pagerInfo.filter().split('*')
							myFilter = $.Enumerable.From(filters).FirstOrDefault undefined, (x)->x.split(':')[0] is type and x.split(':')[1] is name
							if myFilter
								filters.splice filters.indexOf(myFilter),1
							filters.join '*'
						else
							"_"
				isEnabled:ko.pureComputed ()-> 
					if trigger()
						if me._pagerInfo.filter and me._pagerInfo.filter()
							$.Enumerable.From(me._pagerInfo.filter().split('*')).FirstOrDefault undefined, (x)->x.split(':')[0] is type and x.split(':')[1] is name
					
			typeInfo.pagers.push myPagerInfo
		myPagerInfo

	getMyFilterValue:(pagerInfo,type,name,value)->
		if pagerInfo and pagerInfo.filter
			filter = pagerInfo.filter
			myFilter =$.Enumerable.From(filter().split('*')).FirstOrDefault undefined, (x)->x.split(':')[0] is type and x.split(':')[1] is name
			if myFilter
				myValue = $.Enumerable.From(myFilter.split(':')).FirstOrDefault undefined, (x)->x.split('|').length is 2 and x.split('|')[0] is value
				if myValue
					myValue.split('|')[1]

	getMyFilterUrl:(filter,type,name,values)->
		filters = filter().split('*')
		myFilter = $.Enumerable.From(filters).FirstOrDefault undefined, (x)->x.split(':')[0] is type and x.split(':')[1] is name
		newFilter="#{type}:#{name}"
		for key,value of values
			if value isnt undefined
				newFilter+=":#{key}|#{value}"
		if myFilter
			filters[filters.indexOf(myFilter)]= newFilter
		else
			filters.push newFilter
		filters.join '*'