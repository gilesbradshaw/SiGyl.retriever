(function() {
  var lookup;

  lookup = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  define([], function() {
    var Arr, LOWER, NUMBER, PLUS, SLASH, UPPER, b64ToByteArray, decode, uint8ToBase64;
    decode = function(elt) {
      var code;
      code = elt.charCodeAt(0);
      if (code === PLUS) {
        return 62;
      }
      if (code === SLASH) {
        return 63;
      }
      if (code < NUMBER) {
        return -1;
      }
      if (code < NUMBER + 10) {
        return code - NUMBER + 26 + 26;
      }
      if (code < UPPER + 26) {
        return code - UPPER;
      }
      if (code < LOWER + 26) {
        return code - LOWER + 26;
      }
    };
    b64ToByteArray = function(b64) {
      var L, arr, i, j, l, len, placeHolders, push, tmp;
      push = function(v) {
        arr[L++] = v;
      };
      i = void 0;
      j = void 0;
      l = void 0;
      tmp = void 0;
      placeHolders = void 0;
      arr = void 0;
      if (b64.length % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      len = b64.length;
      placeHolders = ("=" === b64.charAt(len - 2) ? 2 : ("=" === b64.charAt(len - 1) ? 1 : 0));
      arr = new Arr(b64.length * 3 / 4 - placeHolders);
      l = (placeHolders > 0 ? b64.length - 4 : b64.length);
      L = 0;
      i = 0;
      j = 0;
      while (i < l) {
        tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3));
        push((tmp & 0xFF0000) >> 16);
        push((tmp & 0xFF00) >> 8);
        push(tmp & 0xFF);
        i += 4;
        j += 3;
      }
      if (placeHolders === 2) {
        tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4);
        push(tmp & 0xFF);
      } else if (placeHolders === 1) {
        tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2);
        push((tmp >> 8) & 0xFF);
        push(tmp & 0xFF);
      }
      return arr;
    };
    uint8ToBase64 = function(uint8) {
      var encode, extraBytes, i, length, output, temp, tripletToBase64;
      encode = function(num) {
        return lookup.charAt(num);
      };
      tripletToBase64 = function(num) {
        return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
      };
      i = void 0;
      extraBytes = uint8.length % 3;
      output = "";
      temp = void 0;
      length = void 0;
      i = 0;
      length = uint8.length - extraBytes;
      while (i < length) {
        temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
        output += tripletToBase64(temp);
        i += 3;
      }
      switch (extraBytes) {
        case 1:
          temp = uint8[uint8.length - 1];
          output += encode(temp >> 2);
          output += encode((temp << 4) & 0x3F);
          output += "==";
          break;
        case 2:
          temp = (uint8[uint8.length - 2] << 8) + uint8[uint8.length - 1];
          output += encode(temp >> 10);
          output += encode((temp >> 4) & 0x3F);
          output += encode((temp << 2) & 0x3F);
          output += "=";
      }
      return output;
    };
    "use strict";
    Arr = (typeof Uint8Array !== "undefined" ? Uint8Array : Array);
    PLUS = "+".charCodeAt(0);
    SLASH = "/".charCodeAt(0);
    NUMBER = "0".charCodeAt(0);
    LOWER = "a".charCodeAt(0);
    UPPER = "A".charCodeAt(0);
    return {
      toByteArray: b64ToByteArray,
      fromByteArray: uint8ToBase64,
      compare: function(from, to) {
        var bfrom, bto, key, value;
        if (from === to) {
          return true;
        }
        bfrom = b64ToByteArray(from);
        bto = b64ToByteArray(to);
        for (key in bfrom) {
          value = bfrom[key];
          if (value < bto[key]) {
            return true;
          }
          if (value > bto[key]) {
            return false;
          }
        }
        return false;
      }
    };
  });

}).call(this);
