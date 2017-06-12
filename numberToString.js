'use strict';

const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const TEENS = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const LIMIT = 100000;

const lookup = {
  thousand: 1000,
  hundred: 100
};

function limitCheck(number) {
  if (number >= LIMIT) {
    throw new Error('Provided number is bigger than limit of ' + LIMIT);
  }
}

function convertThousands(number) {
  limitCheck(number);
  if (number >= 1000) {
    return convertOnes(Math.floor(number / 1000)) + ' thousand ' + convertHundreds(number % 1000);
  } else {
    return convertHundreds(number);
  }
}

function convertHundreds(number) {
  if (number >= 100) {
    return convertOnes(Math.floor(number / 100)) + ' hundred ' + convertOnes(number % 100);
  } else {
    return convertOnes(number);
  }
}

function convertOnes(number) {
  console.log(number);
  if (number < 10) {
    return ONES[number];
  } else if (number < 20) {
    return TEENS[number - 10];
  } else {
    return TENS[Math.floor(number / 10)] + ONES[number % 10];
  }
}

function convert(number) {

  console.log(Object.keys(lookup));
  return Object.keys(lookup).reduce((result, item) => {
    console.log('first ' + result + ' ' + item);
   if (number >= lookup[result]) {
     console.log(number);
     console.log(lookup[result]);
     return result += convertOnes(Math.floor(number / lookup[result])) + ` ${result} `;
   } else {
     return result;
   }
  });
}

module.exports = convert;

console.log(convert(5));
console.log(convert(11));
console.log(convert(10));
console.log(convert(22));
console.log(convert(225));
console.log(convert(260));
console.log(convert(7452));
