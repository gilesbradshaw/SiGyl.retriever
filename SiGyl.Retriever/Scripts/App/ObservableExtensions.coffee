
define [
	"Q"
],(Q) ->
	
	class ObservableExtensions
		constructor:()->
			@interModelRelationObservable=-> "interModelRelationObservable"
			@manyObservable=-> "manyObservable"
			@flexibleRelationObservable=-> "flexibleObservable"
			@singleObservable=-> "singleObservable"
		
		@create=(key,model)=>
			deferred= Q.defer()
			setTimeout(()=>
				@modelExtensions[key]= new ObservableExtensions model
				deferred.resolve()
			100)
			#require ["retriever","listener"], (retriever,listener)=>
			#	@modelExtensions[key]= new ObservableExtensions model, retriever.getMe(),listener
				
			deferred.promise


	getMe:->ObservableExtensions
	initMe:->
		ObservableExtensions.modelExtensions={}
		Q()