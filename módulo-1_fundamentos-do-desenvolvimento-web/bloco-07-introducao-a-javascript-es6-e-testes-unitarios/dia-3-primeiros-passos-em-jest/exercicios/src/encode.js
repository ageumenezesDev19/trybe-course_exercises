const encode = (string) => {
    let theEncode = "1";
    if (string != null) {
        for (let i = 0; i < string.length; i += 1) {
            if (string[i] === "a") {
              theEncode += "1";
            } else if (string[i] === "e") {
              theEncode += "2";
            } else if (string[i] === "i") {
              theEncode += "3";
            } else if (string[i] === "o") {
              theEncode += "4";
            } else if (string[i] === "u") {
              theEncode += "5";
            } else {
              theEncode += string[i];
            }
          }
      
          theEncode = theEncode.substring(1, theEncode.length);
          return theEncode;
    }

  // -> substring(startIndex, endIndex) -> fonte: https://www.delftstack.com/pt/howto/javascript/javascript-remove-first-character-from-string/
}

console.log(encode('abcdefgh'));

module.exports = encode;
