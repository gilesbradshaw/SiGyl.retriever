
define [
	"jquery"
	"knockout"
	"linq"
],($,ko,linq) ->



	
	doRetrieveRequestMerge=(listenToken, retrieveRequests)=>
		if listenToken._getRetrieveRequest
			ret = listenToken._getRetrieveRequest retrieveRequests
			if listenToken._modifyRetrieveRequest
				listenToken._modifyRetrieveRequest ret 
		retrieveRequests

	retrieveRequestMerge=(listenToken, retrieveRequests)=>
		listenToken.cachedRetrieveRequests=[]
		doRetrieveRequestMerge listenToken, listenToken.cachedRetrieveRequests
		doRetrieveRequestMerge listenToken, retrieveRequests
		retrieveRequests


	doCollectionRetrieveRequestMerge=(listenToken,collectionRetrieveRequests)=>
		if listenToken._getCollectionRetrieveRequest
			ret = listenToken._getCollectionRetrieveRequest collectionRetrieveRequests
			if listenToken._modifyCollectionRetrieveRequest
				listenToken._modifyCollectionRetrieveRequest ret 
		collectionRetrieveRequests


	collectionRetrieveRequestMerge=(listenToken,collectionRetrieveRequests)=>
		listenToken.cachedCollectionRetrieveRequests=[]
		doCollectionRetrieveRequestMerge listenToken,listenToken.cachedCollectionRetrieveRequests
		doCollectionRetrieveRequestMerge listenToken,collectionRetrieveRequests
		collectionRetrieveRequests

	class ListenToken
		constructor:(@retriever, @data)->
		getListen=(e)-> linq.From(e.ids).SelectMany((ee)->ee.ParameterGroups).SelectMany((ee)->ee.Parameters).Where((ee)->ee.Name is'id' and ee.Id is 'id').SelectMany((ee)->ee.Values).Where((ee)->ee.Name is 'id').Select((ee)->ee.Value).ToArray()
		@getUnlistens=(unlistens,cancellers)->
			unlistenIds= unlistens.SelectMany((u)->u.cachedRetrieveRequests).GroupBy ((u)->u.type), getListen
			if cancellers
				cancelIds= cancellers.SelectMany((u)->u.cachedRetrieveRequests).GroupBy ((u)->u.type), getListen
			else
				cancelIds=linq.From []
			unlistenIds = unlistenIds.Select((u)->
				type:u.Key()
				ids:u.SelectMany().Where((uu)->!cancelIds.Where((c)->c.Key() is u.Key()).Any((cc)->cc.Any((ccc)->ccc.indexOf(uu)>-1))).ToArray()
			).ToArray()

			getCollectionListen=(e)-> linq.From(e.collections).GroupBy ((ee)->ee.collection), getListen
			collectionUnlistenIds= unlistens.SelectMany((u)->u.cachedCollectionRetrieveRequests).GroupBy ((u)->u.type), getCollectionListen

			if cancellers
				collectionCancelIds= cancellers.SelectMany((u)->u.cachedCollectionRetrieveRequests).GroupBy ((u)->u.type), getCollectionListen
			else
				collectionCancelIds=linq.From([])
			

			collectionCancelIds=collectionCancelIds.Select((u)->
				type:u.Key()
				ids:u.SelectMany((uu)-> 
					uu.Select((uuu) ->
						collection:uuu.Key()
						ids:uuu.SelectMany()
					)
				)
			)
			collectionUnlistenIds = collectionUnlistenIds.Select((u)->
				type:u.Key()
				ids:u.SelectMany((uu)-> 
					uu.Select((uuu) ->
						collection:uuu.Key()
						ids:uuu.SelectMany().Where((i)->!collectionCancelIds.Any((cc)->cc.type is u.Key() && cc.ids.Any((ccc)->ccc.collection is uuu.Key() && ccc.ids.Any((cccc) ->cccc is i)))).ToArray()
					).ToArray()
				).ToArray()
			).ToArray()


			ret=
				ids:unlistenIds
				collections:collectionUnlistenIds
			ret
		ltcount=0
		
		
		retrieveRequestMerge:(retrieveRequests)=>
			retrieveRequestMerge @, retrieveRequests
		collectionRetrieveRequestMerge:(collectionRetrieveRequests)=>
			collectionRetrieveRequestMerge @, collectionRetrieveRequests
		processMetaData:(metaData)=>
			if @_getProcessMetaData
				@_getProcessMetaData metaData
			metaData
		cancelIdUnlisten:(requests)=>
			myRequests=[]
			@retrieveRequestMerge myRequests
			for myRequest in myRequests
				request = linq.From(requests).SingleOrDefault(undefined,(x)->x.type is myRequest.type)
				if request
					myValues = linq.From(myRequest.ids).SelectMany((x)->x.ParameterGroups).SelectMany((x)->x.Parameters).Where((x)->x.Id is 'id' and x.Name is 'id').SelectMany((p)->p.Values).Where((v)->v.Name is 'id').Select((v)->v.Value).ToArray()

					for parameter in linq.From(request.ids).SelectMany((p)->p.ParameterGroups).SelectMany((p)->p.Parameters).Where((p)->p.Name is 'id' and p.Id is 'id').ToArray()
						values = linq.From(parameter.Values).Where((v)->v.Name='id' and myValues.indexOf(v.Value)>-1).ToArray()
						for value in values
							parameter.Values.splice parameter.Values.indexOf(value),1
			requests

			#cancels unlistens
		cancelCollectionUnlisten:(requests)->
			myRequests=[]
			@collectionRetrieveRequestMerge myRequests
			for myRequest in myRequests
				request = linq.From(requests).SingleOrDefault(undefined,(x)->x.type is myRequest.type)
				if request
					for myCollection in myRequest.collections
						collection = linq.From(request.collections).SingleOrDefault(undefined,(x)->x.collection is myCollection.collection)
						if collection
							myValues = linq.From(myCollection.ids).SelectMany((x)->x.ParameterGroups).SelectMany((x)->x.Parameters).Where((x)->x.Id is 'id' and x.Name is 'id').SelectMany((p)->p.Values).Where((v)->v.Name is 'id').Select((v)->v.Value).ToArray()

							for parameter in linq.From(collection.ids).SelectMany((p)->p.ParameterGroups).SelectMany((p)->p.Parameters).Where((p)->p.Name is 'id' and p.Id is 'id').ToArray()
								values = linq.From(parameter.Values).Where((v)->v.Name='id' and myValues.indexOf(v.Value)>-1).ToArray()
								for value in values
									parameter.Values.splice parameter.Values.indexOf(value),1
			requests

		
		compare:(token)->
			#mixin listentokens always compare false
			if this.mixin or token.mixin
				return false
			
			if @retriever isnt token.retriever
				return false

			myIdRequests = @cachedRetrieveRequests or @retrieveRequestMerge []
			idRequests = token.cachedRetrieveRequests or token.retrieveRequestMerge []
			

			#atm there is only ever one or none
			if idRequests.length>1 or myIdRequests.length >1
				throw "illegal request #1"

			if idRequests.length isnt myIdRequests.length
				return false
			if idRequests.length is myIdRequests.length is 1
				if idRequests[0].type isnt myIdRequests[0].type
					return false
				if idRequests[0].ids.length!=1 or myIdRequests[0].ids.length!=1
					throw "illegal request #2"
				if idRequests[0].ids[0].Id!= myIdRequests[0].ids[0].Id
					return false

				if idRequests[0].ids[0].ParameterGroups.length!=1 or myIdRequests[0].ids[0].ParameterGroups.length !=1
					throw "illegal request #3"
					

				ids = linq.From(idRequests[0].ids[0].ParameterGroups[0].Parameters).Where((x)->x.Id is 'id').SelectMany((x)->x.Values).Where((x)->x.Name is 'id').Select((x)->x.Value).ToArray()
				cids = linq.From(myIdRequests[0].ids[0].ParameterGroups[0].Parameters).Where((x)->x.Id is 'id').SelectMany((x)->x.Values).Where((x)->x.Name is 'id').Select((x)->x.Value).ToArray()
				if ids.length!=cids.length or linq.From(ids).Any((x)->cids.indexOf(x)<0)
					return false

				cparams = linq.From(myIdRequests[0].ids[0].ParameterGroups[0].Parameters).Where((x)->x.Id isnt 'id').ToArray()
				for parameters in linq.From(idRequests[0].ids[0].ParameterGroups[0].Parameters).Where((x)->x.Id isnt 'id').ToArray()
					if linq.From(cparams).Any((p)->!linq.From(parameters).Any((pp)->pp.Id==p.Id && pp.Name==p.Name))
						return false
					if linq.From(parameters).Any((p)->!linq.From(cparams).Any((pp)->pp.Id==p.Id && pp.Name==p.Name))
						return false
					for parameter in parameters
						cparam = linq.From(cparams).Single((p)->p.Id==parameter.Id && p.Name==parameter.Name)
						for value in parameter.Values
							cvalue = linq.From(cparam.Values).SingleOrDefault(undefined,(v)->v.Name is value.Name)
							if !cvalue or cvalue.Value isnt value.Value
								return false


			myCollectionRequests = @cachedCollectionRetrieveRequests or @collectionRetrieveRequestMerge []
			collectionRequests = token.cachedCollectionRetrieveRequests or token.collectionRetrieveRequestMerge []
			if collectionRequests.length>1 or myCollectionRequests.length >1
				throw "illegal collection request #1"
			if collectionRequests.length isnt myCollectionRequests.length
				return false
			if collectionRequests.length is myCollectionRequests.length is 1
				if collectionRequests[0].type isnt myCollectionRequests[0].type
					return false
				if collectionRequests[0].collections.length !=1 or  myCollectionRequests[0].collections.length !=1
					throw "illegal collection request #2"
				if collectionRequests[0].collections[0].collection isnt  myCollectionRequests[0].collections[0].collection
					return false
				
				if collectionRequests[0].collections[0].ids.length !=1 or  myCollectionRequests[0].collections[0].ids.length !=1
					throw "illegal collection request #3"
				if collectionRequests[0].collections[0].ids[0].Id isnt  myCollectionRequests[0].collections[0].ids[0].Id
					return false
				if collectionRequests[0].collections[0].ids[0].ParameterGroups.length isnt 1 or   myCollectionRequests[0].collections[0].ids[0].ParameterGroups.length isnt 1
					throw "illegal collection request #3"
				#atm isn't comparing parameters

				
				ids = linq.From(collectionRequests[0].collections[0].ids[0].ParameterGroups[0].Parameters).Where((x)->x.Id is 'id').SelectMany((x)->x.Values).Where((x)->x.Name is 'id').Select((x)->x.Value).ToArray()
				cids = linq.From(myCollectionRequests[0].collections[0].ids[0].ParameterGroups[0].Parameters).Where((x)->x.Id is 'id').SelectMany((x)->x.Values).Where((x)->x.Name is 'id').Select((x)->x.Value).ToArray()
				if ids.length!=cids.length or linq.From(ids).Any((x)->cids.indexOf(x)<0)
					return false
				cparams = linq.From(myCollectionRequests[0].collections[0].ids[0].ParameterGroups[0].Parameters).Where((x)->x.Id isnt 'id').ToArray()
				for parameters in linq.From(collectionRequests[0].collections[0].ids[0].ParameterGroups[0].Parameters).Where((x)->x.Id isnt 'id').ToArray()
					if linq.From(cparams).Any((p)->!linq.From(parameters).Any((pp)->pp.Id==p.Id && pp.Name==p.Name))
						return false
					if linq.From(parameters).Any((p)->!linq.From(cparams).Any((pp)->pp.Id==p.Id && pp.Name==p.Name))
						return false
					for parameter in parameters
						cparam = linq.From(cparams).Single((p)->p.Id==parameter.Id && p.Name==parameter.Name)
						for value in parameter.Values
							cvalue = linq.From(cparam.Values).SingleOrDefault(undefined,(v)->v.Name is value.Name)
							if !cvalue or cvalue.Value isnt value.Value
								return false
			return true




		extend:(extend)=>
			@data.extend extend
			@

		getDataMerge:(_dataMerge)=>
			@dataMerge = _dataMerge
			@


		getProcessMetaData:(_getProcessMetaData)=>
			@_getProcessMetaData = _getProcessMetaData
			@


		#sets a function to get a retrieve request from the current retrieve requests (or add one)
		getRetrieveRequest:(_getRetrieveRequest)=>
			@cachedRetrieveRequests=undefined
			@_getRetrieveRequest=_getRetrieveRequest
			@
		#sets a function to modify the retrieve request by adding infor for this listen token
		modifyRetrieveRequest:(_modifyRetrieveRequest)=>
			@_modifyRetrieveRequest=_modifyRetrieveRequest
			@


		#sets a function to get a collection retrieve request from the current retrieve requests (or add one)
		getCollectionRetrieveRequest:(_getCollectionRetrieveRequest)=>
			@cachedCollectionRetrieveRequests=undefined
			@_getCollectionRetrieveRequest=_getCollectionRetrieveRequest
			@
		#sets a function to modify the collection retrieve request by adding infor for this listen token
		modifyCollectionRetrieveRequest:(_modifyCollectionRetrieveRequest)=>
			@_modifyCollectionRetrieveRequest=_modifyCollectionRetrieveRequest
			@

	getMe:->
		ListenToken