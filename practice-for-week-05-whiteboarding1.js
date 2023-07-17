const log = console.log;

//oddWordsOut
const oddWordsOut = str => {
  const words = str.split(' ');
  const evens = words.filter(word => word.length % 2 === 0)
  return evens.join(' ');
}
//Time: O(N)
//Space: O(N)
log('oddWordsOut test cases:')
console.log(oddWordsOut('go to the store and buy milk'));  // => 'go to milk'
console.log(oddWordsOut('what is the answer'));  // => 'what is answer'
log('\n');

//mindPsaAndQs
const mindPsAndQs = str => {
  let longestStr = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if(str[i] === 'P' || str[i] === 'Q') {
      count++;
    } else {
      count = 0;
    }
    if (count > longestStr) {
      longestStr = count;
    }
    }
  return longestStr;
}

//Time: O(N)
//Space: O(1)
log('mindPsaAndQs test cases:')
log(mindPsAndQs('BOOTCAMP'));  // => 1
log(mindPsAndQs('APCDQQPPC'));  // => 4
log(mindPsAndQs('PQPQ'));  // => 4
log(mindPsAndQs('PPPXQPPPQ'));  // => 5
log('\n');

//commonFactors
const commonFactors = (num1, num2) => {
  const resultArr = [];
  let start = 1;
  const end = Math.min(num1, num2);
  while (start <= end) {
    if (num1 % start === 0 && num2 % start === 0) {
      resultArr.push(start);
    }
    start++;
  }
  return resultArr;
}
//Time: O(N)
//Space: O(N)
log('commonFactors test cases:')
log(commonFactors(12, 50));  // => [ 1, 2 ]
log(commonFactors(6, 24));  // => [ 1, 2, 3, 6 ]
log(commonFactors(11, 22));  // => [ 1, 11 ]
log(commonFactors(45, 60));  // => [ 1, 3, 5, 15 ]
log('\n');



//commonPrimeFactors
const commonPrimeFactors = (num1, num2) => {
  const resultArr = commonFactors(num1, num2);
  return resultArr.filter(num => isPrime(num));
}
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
//Time: O(N)
//Space: O(N)
log('commonPrimeFactors test cases:')
log(commonPrimeFactors(12, 50));  // => [ 2 ]
log(commonPrimeFactors(6, 24));  // => [ 2, 3 ]
log(commonPrimeFactors(11,22));  // => [ 11 ]
log(commonPrimeFactors(45, 60));  // => [ 3, 5 ]
log('\n');



//splitHalfArray
const splitHalfArray = array => {
  const length = array.length;
  const halfPoint = Math.floor(length/2);
  if (length % 2 === 0) {
    return [[...array.slice(0, halfPoint)], [...array.slice(halfPoint, length)]];
  } else {
    return [[...array.slice(0, halfPoint)], [...array.slice(halfPoint + 1, length)]];
  }
}
//Time complexity: O(N)
//Space complexity: O(N)
log('splitHalfArray test cases:')
log(splitHalfArray([1, 2, 3, 4, 5]));
  // => [ [ 1, 2 ], [ 4, 5 ] ]
log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
log('\n');

//threeUniqueVowels
const threeUniqueVowels = string => {
  let uniqueCount = 0;
  const vowelObj = {
    'a' : 0,
    'e' : 0,
    'i' : 0,
    'o' : 0,
    'u' : 0
  }
  for (let char of string) {
    if (vowelObj.hasOwnProperty(char) && vowelObj[char] === 0) {
      uniqueCount++;
      vowelObj[char]++;
    }
  }
  return uniqueCount >= 3;
}
//Time complexity: O(N)
//Space complexity: O(1)
log('threeUniqueVowels test cases:')
log(threeUniqueVowels('delicious'));  // => true
log(threeUniqueVowels('the bootcamp'))  // => true
log(threeUniqueVowels('bootcamp'));  // => false
log(threeUniqueVowels('dog'));  // => false
log(threeUniqueVowels('go home'));  // => false
log('\n');


//vowelShift
const vowelShift = string => {
  let resultStr = '';
  const vowelMap = {
    'a' : 'e',
    'e' : 'i',
    'i' : 'o',
    'o' : 'u',
    'u' : 'a'
  }
  for (const char of string) {
    if(vowelMap.hasOwnProperty(char)) {
      resultStr += vowelMap[char];
    } else {
      resultStr += char;
    }
  }
  return resultStr;
}
//Time complexity: O(N)
//Space complexity: O(N)
log('vowelShift test cases:')
log(vowelShift('bootcamp'));  // => 'buutcemp'
log(vowelShift('hello world'));  // => 'hillu wurld'
log(vowelShift('on the hunt'));  // => 'un thi hant'
log('\n');

//hasSymmetry
const hasSymmetry = array => {
  let start = 0;
  let end = array.length - 1;
  while (end > start) {
    if(array[start] !== array[end]) return false;
    start++;
    end--;
  }
  return true;
}
//Time complexity: O(N/2) or O(N); 1/2 is ignored.
//Space complexity: O(1)
log('hasSymmetry test cases:')
log(hasSymmetry([1, 2, 3, 3, 2, 1])) // => true
log(hasSymmetry([1, 2, 3, 3, 4, 1])) // => false
log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])) // => true
log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])) // => false
log('\n');



//evenSumArray
const evenSumArray = array => array.map(element => evenSum(element));
//evenSumArray helper function
function evenSum(num) {
  const halfed = Math.floor(num / 2);
  return halfed * (halfed + 1);
}
//Time complexity: O(N)
//Space complexity: O(N)
log('evenSumArray test cases:')
log(evenSumArray([6, 7, 5])) // => [ 12, 12, 6 ]
log(evenSumArray([2, 8, 3, 5])) // => [ 2, 20, 2, 6 ]
log('\n');



//numsToWords
const numsToWords = string => {
  let resultStr = '';
  const numsDict = {
    '1' : 'One',
    '2' : 'Two',
    '3' : 'Three',
    '4' : 'Four',
    '5' : 'Five',
    '6' : 'Six',
    '7' : 'Seven',
    '8' : 'Eight',
    '9' : 'Nine',
    '0' : 'Zero'
  }
  for (const char of string) {
    resultStr += numsDict[char];
  }
  return resultStr;
}
//Time Complexity: O(N)
//Space Complexity: O(1)
log('numsToWords test cases:')
log(numsToWords('42')) // => 'FourTwo'
log(numsToWords('123')) // => 'OneTwoThree'
log(numsToWords('159598')) // => 'OneFiveNineFiveNineEight'
log('\n')



//moreDotLessDash
const moreDotLessDash = string => {
  let dashCount = 0;
  let dotCount = 0;
  for (const char of string) {
    if (char === '.') dotCount++;
    if (char === '-') dashCount++;
  }
  return dotCount > dashCount;
}
//Time Complexity = O(N) based on # of char
//Space Complexity = O(1)
log('moreDotLessDash test cases:')
log(moreDotLessDash('2-D arrays are fun. I think.'));  // => true
log(moreDotLessDash('.-.-.'));  // => true
log(moreDotLessDash('.-'));  // => false
log(moreDotLessDash('..--'));  // => false
