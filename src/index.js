module.exports = function toReadable(number) {
  if (number <= 20) {
    console.log(upTo20[number]);
    return upTo20[number];
  } else {
    var numtext = number.toString();
    var digits = number.toString().length;
    var a = Number(numtext[digits - 3]);
    var b = Number(numtext[digits - 2]);
    var c = Number(numtext[digits - 1]);
    if (isNaN(a)) {
      a = "";
    } else {
      a = first(a) + " hundred ";
    }

    if (b === 0 || isNaN(b)) {
      b = "";
    } else {
      b = second(b - 1) + " ";
    }

    if (c === 0) {
      c = "";
    } else {
      c = third(c);
    }

    var result = a + b + c;
    console.log(result);
    return result;
  }
};

const upTo20 = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "twenty",
];
const tens = [
  "ten",
  "twenty",
  "thirty",
  "fourty",
  "fifty",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function first(a) {
  return upTo20[a];
}
function second(b) {
  return tens[b];
}
function third(c) {
  return upTo20[c];
}

toReadable(99);
