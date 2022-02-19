function decode(string) {
    // seu código aqui
    let decode = 1;
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] === "1") {
        decode += "a";
      } else if (string[i] === "2") {
        decode += "e";
      } else if (string[i] === "3") {
        decode += "i";
      } else if (string[i] === "4") {
        decode += "o";
      } else if (string[i] === "5") {
        decode += "u";
      } else {
        decode += string[i];
      }
    }

    decode = decode.substring(1, decode.length);
    return decode;
}

module.exports = decode;
