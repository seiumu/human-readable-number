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
      "eighteen",
      "nineteen",
      "twenty",
  ];
  const tens = [
      "ten",
      "twenty",
      "thirty",
      "forty",
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
            a = upTo20[a] + " hundred";
        }
		var copyb = b;
      	var copyc = c;
        if (b === 0 || isNaN(b)) {
            b = "";
        } else if (a === ""){
            b = tens[b - 1];
        } else{
            b = " " + tens[b - 1];
        }

        if (c === 0) {
            c = "";
        } else {
            c = " " + upTo20[c];
        }
        
        if (copyb === 1) {
          b = " " + upTo20[copyb*10+copyc];
          c = "";
        } else{} 
        var result = a + b + c;
        console.log(result);
        return result;
    }
}