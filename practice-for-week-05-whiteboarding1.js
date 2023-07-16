const log = console.log;

//commonFactors
const commonFactors = (num1, num2) => {
  const resultArr = [];
  let start = 1;
  let end;
  if (num1 <= num2) {
    end = num1;
  } else {
    end = num2;
  }
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
