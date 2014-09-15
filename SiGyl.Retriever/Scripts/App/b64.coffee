lookup = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

define [], () ->

	decode = (elt) ->
		code = elt.charCodeAt(0)
		return 62  if code is PLUS # '+'
		return 63  if code is SLASH # '/'
		return -1  if code < NUMBER #no match
		return code - NUMBER + 26 + 26  if code < NUMBER + 10
		return code - UPPER  if code < UPPER + 26
		code - LOWER + 26  if code < LOWER + 26
	b64ToByteArray = (b64) ->
		
		# the number of equal signs (place holders)
		# if there are two placeholders, than the two characters before it
		# represent one byte
		# if there is only one, then the three characters before it represent 2 bytes
		# this is just a cheap hack to not do indexOf twice
		
		# base64 is 4/3 + up to two characters of the original data
		
		# if there are placeholders, only get up to the last complete 4 chars
		push = (v) ->
			arr[L++] = v
			return
		i = undefined
		j = undefined
		l = undefined
		tmp = undefined
		placeHolders = undefined
		arr = undefined
		throw new Error("Invalid string. Length must be a multiple of 4")  if b64.length % 4 > 0
		len = b64.length
		placeHolders = (if "=" is b64.charAt(len - 2) then 2 else (if "=" is b64.charAt(len - 1) then 1 else 0))
		arr = new Arr(b64.length * 3 / 4 - placeHolders)
		l = (if placeHolders > 0 then b64.length - 4 else b64.length)
		L = 0
		i = 0
		j = 0

		while i < l
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push (tmp & 0xFF0000) >> 16
			push (tmp & 0xFF00) >> 8
			push tmp & 0xFF
			i += 4
			j += 3
		if placeHolders is 2
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push tmp & 0xFF
		else if placeHolders is 1
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push (tmp >> 8) & 0xFF
			push tmp & 0xFF
		arr
	uint8ToBase64 = (uint8) ->
		# if we have 1 byte left, pad 2 bytes
		encode = (num) ->
			lookup.charAt num
		tripletToBase64 = (num) ->
			encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		i = undefined
		extraBytes = uint8.length % 3
		output = ""
		temp = undefined
		length = undefined
		
		# go through the array every three bytes, we'll deal with trailing stuff later
		i = 0
		length = uint8.length - extraBytes

		while i < length
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
			i += 3
		
		# pad the end with zeros, but make sure to not forget the extra bytes
		switch extraBytes
			when 1
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += "=="
			when 2
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += "="
		output
	"use strict"
	Arr = (if (typeof Uint8Array isnt "undefined") then Uint8Array else Array)
	PLUS = "+".charCodeAt(0)
	SLASH = "/".charCodeAt(0)
	NUMBER = "0".charCodeAt(0)
	LOWER = "a".charCodeAt(0)
	UPPER = "A".charCodeAt(0)
	toByteArray:b64ToByteArray
	fromByteArray:uint8ToBase64
	compare:(from,to)->
		if from is to
			return true
		bfrom = b64ToByteArray from
		bto= b64ToByteArray to
		for key, value of bfrom
			if value < bto[key]
				return true
			if value > bto[key]
				return false
		return false
