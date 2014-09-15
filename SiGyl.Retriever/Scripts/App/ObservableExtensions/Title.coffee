
define [
	"jquery"
	"knockout"
	"listenToken"
	"observableExtensions.extender"
	"linq"
],($,ko,ListenToken,ext,linq) ->

	ko.extenders.title=(target, options)->
		target.title=(name, initialiser)->
			myPagerInfo=undefined
			oldAddPagerInfo=target._addPagerInfo
			target._addPagerInfo=(filter)->
				if oldAddPagerInfo
					oldAddPagerInfo(filter)
				myPagerInfo = ext.getMyPagerInfo target,"title",name
				myPagerInfo.isVisible = ko.observable true
				myPagerInfo.isEnabled = ko.observable true
			target._addPagerInfo.source="target"
			if initialiser
				initialiser target
			-> target
		target


