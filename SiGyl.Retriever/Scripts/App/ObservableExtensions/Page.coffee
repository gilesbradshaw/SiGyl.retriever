
define [
	"jquery"
	"knockout"
	"listenToken"
	"observableExtensions.extender"
	"linq"
],($,ko,ListenToken,ext,linq) ->


	ko.extenders.page=(target, options)->
		target.page=(name, initialiser)->
			myParameter=ko.observable()
			myPagerInfo=undefined
			lt=undefined
			oldAddPagerInfo=target._addPagerInfo
			target._addPagerInfo=(filter)->
				if oldAddPagerInfo
					oldAddPagerInfo(filter)
				myPagerInfo =ext.getMyPagerInfo target,"page",name
				if myPagerInfo.filter
					myPagerInfo.pages=
						set:()->
							filter @
							#lt.relistening = true
							lt.listen()
							lt.cycle()
						first:
							isEnabled:ko.observable()
							value:ko.observable 1
							url:ko.observable ext.getMyFilterUrl(myPagerInfo.filter,'page',name,
								page:1
							)
						previous:
							isEnabled:ko.observable()
							value:ko.observable 1
							url:ko.observable()
						current:
							value:ko.observable()
							url:ko.observable()
						next:
							isEnabled:ko.observable()
							value:ko.observable()
							url:ko.observable()

						last:
							isEnabled:ko.observable()
							value:ko.observable()
							url:ko.observable()
			if initialiser
				initialiser target
			target._extendListenToken (extended)-> 
				->
					lt= extended()
					oldCanAddData = lt.canAddData
					lt.canAddData = (addData, completeData)->
						if oldCanAddData addData, completeData
							if completeData.length>1 and completeData.indexOf(addData.value) is 0
								lt.reListening=true
								options.listener.listen lt
								options.listener.cycle()
								return false
							ret = true
							if completeData.indexOf(addData.value) >=10
								ret= false
							else
								if completeData.length>=10
									lt.data.peek().splice 10, completeData.length-10
							myPagerInfo.metaData or = 
								count:0
							myPagerInfo.metaData.count+=1
							lt._getProcessMetaData myPagerInfo.metaData

							return ret
							
						

					oldmod = lt._modifyCollectionRetrieveRequest
					lt._modifyCollectionRetrieveRequest = (parameters)->
						if oldmod
							oldmod parameters
						parameters.push
							Name:"page"
							Id:name
							Values:[
								Name:'page'
								Value:myParameter() or (ext.getMyFilterValue myPagerInfo, "page", name, "page") or 1
							]
					oldmeta = lt._getProcessMetaData
					lt._getProcessMetaData = (metaData)->
						if oldmeta
							oldmeta metaData
						myPagerInfo = ext.getMyPagerInfo(target,"page",name)
						currentPage =myParameter() or  Number((ext.getMyFilterValue myPagerInfo, "page", name, "page")) or 1


						

						myPagerInfo.isVisible !myParameter()
						myPagerInfo.pages.first.url ext.getMyFilterUrl(myPagerInfo.filter,'page',name,
							page:1
						)
						myPagerInfo.pages.first.isEnabled currentPage > 1
						myPagerInfo.pages.previous.isEnabled currentPage > 2
						myPagerInfo.pages.previous.url  ext.getMyFilterUrl(myPagerInfo.filter,'page',name,
							page:currentPage-1
						)
						myPagerInfo.pages.previous.value currentPage-1
						myPagerInfo.pages.current.value currentPage
						myPagerInfo.pages.current.url ext.getMyFilterUrl(myPagerInfo.filter,'page',name,
							page:currentPage
						)
						myPagerInfo.pages.next.value currentPage+1
						myPagerInfo.pages.next.url ext.getMyFilterUrl(myPagerInfo.filter,'page',name,
							page:currentPage+1
						)
						myPagerInfo.pages.next.isEnabled currentPage+1 < (Math.ceil metaData.count/10)
						
						myPagerInfo.pages.last.url ext.getMyFilterUrl(myPagerInfo.filter,'page',name,
							page:(Math.ceil metaData.count/10)
						)
						myPagerInfo.pages.last.value (Math.ceil metaData.count/10)
						myPagerInfo.pages.last.isEnabled currentPage < (Math.ceil metaData.count/10)

						myPagerInfo.metaData=metaData
						
					lt
			(parameter)->
				myParameter parameter
				target
		target
