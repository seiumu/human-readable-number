module.exports = function toReadable(number) {
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
      "seventeen",
      "eightteen",
      "ninetineen",
      "twenty",
  ];
  const tens = [
      "ten",
      "twenty",
      "thirty",
      "fourty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
  ];

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
            a = upTo20[a] + " hundred ";
        }

        if (b === 0 || isNaN(b)) {
            b = "";
        } else {
            b = tens[b-1] + " ";
        }

        if (c === 0) {
            c = "";
            b = b.slice(0, -1);
        } else {
            c = upTo20[c];
        }

        var result = a + b + c;
        console.log(result);
        return result;
    }
}
