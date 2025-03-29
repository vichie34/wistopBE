import { toASCII, ucs2 } from "punycode";

var originalPunycode = window.punycode;

// fake
var fakePunycode = {
    // `decode` function
    decode: function (input) {
        return input;
    },

    // `encode` function
    encode: function (input) {
        return input;
    },

     // `toASCII` function
     toASCII: function (input) {
        return input;
    },
     // `ucs2` function
     ucs2: function (input) {
        return input;
    },
    // version property
    version: '1.4.1'
};
console.log(originalPunycode);
module.exports = fakePunycode; 