'use strict';

const LOOKUP = {
  million: 1000000,
  thousand: 1000,
  hundred: 100
};

const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const TEENS = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const LIMIT = LOOKUP['million'] * 1000 - 1;

function limitCheck(number) {
  if (number >= LIMIT) {
    throw new Error('Provided number is bigger than limit of ' + LIMIT);
  }
}

function convertOnes(number) {
  if (number < 10) {
    return ONES[number];
  } else if (number < 20) {
    return TEENS[number - 10];
  } else {
    return TENS[Math.floor(number / 10)] + ONES[number % 10];
  }
}

function convert(number) {
  limitCheck(number);
  const result = Object.keys(LOOKUP).reduce((result, item) => {
    if (number >= LOOKUP[item]) {
      result.push(convert(Math.floor(number / LOOKUP[item])) + ' ' + item);
      number = number - Math.floor(number / LOOKUP[item]) * LOOKUP[item];
      return result;
    } else {
      return result;
    }
  }, []);

  result.push(convertOnes(number));
  return result.join(' ');
}

module.exports = convert;

console.log(convert(5));
console.log(convert(11));
console.log(convert(10));
console.log(convert(22));
console.log(convert(225));
console.log(convert(260));
console.log(convert(7452));
console.log(convert(317452));
console.log(convert(1234567));
console.log(convert(999999999));
// console.log(convert(9999999990)); // Larger than limit
