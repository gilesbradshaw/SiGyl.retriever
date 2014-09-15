
define [
	"jquery"
	"knockout"
	"listenToken"
	"observableExtensions.extender"
	"linq"
],($,ko,ListenToken,ext,linq) ->


	ko.extenders.mixinTo=(target, options)->
		target.mixinTo=(mixin, initialiser)->
			
			if mixin
				target._mixinTo=mixin
			if initialiser
				initialiser target
			->
				target
		target



	ko.extenders.mixin=(target, options)->
		target.mixin=(mixin, initialiser)->
			if initialiser
				initialiser target
			target._extendListenToken (extended)-> 
				->
					lt= extended()
					oldMixin = lt.mixin
					lt.mixin=(x)->
						if oldMixin
							x=oldMixin x
						mixin x
					lt
			->target
		target
