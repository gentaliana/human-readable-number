module.exports = function toReadable(number) {
    const numOne = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const numTen = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const numTeen = [
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
    ];
    if (number === 0) return "zero";
    const numberToTen = (number) => {
        if (number < 10) return numOne[number];
        else if (number < 20 && number >= 10) return numTeen[number - 10];
        else
            return `${numTen[Math.floor(number / 10)]} ${
                numOne[number % 10]
            }`.trimRight();
    };
    if (number > 99)
        return `${numOne[Math.floor(number / 100)]} hundred ${numberToTen(
            number % 100
        )}`.trimRight();
    else return numberToTen(number);
};
