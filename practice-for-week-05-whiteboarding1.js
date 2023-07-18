const log = console.log;

//valueCounter
const valueCounter =


//elementCount
const elementCount = arr => {
  const countObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (countObj.hasOwnProperty(arr[i])) {
      countObj[arr[i]]++;
    } else {
      countObj[arr[i]] = 1;
    }
  }
  return countObj;
}

//Time: O(N)
//Space: O(N)
log('elementCount test cases:')
log(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 }
log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }
log('\n');



//nextTwoPrimes
const nextTwoPrimes = num => {
  const alreadyCalculated = {};
  if (alreadyCalculated.hasOwnProperty(num)) return alreadyCalculated[num];
  const twoPrimes = [];
  let nextNum = num + 1;
  while (twoPrimes.length < 2) {
    if(isPrime(nextNum)) {
      twoPrimes.push(nextNum)
    }
    nextNum++;
  }
  alreadyCalculated[num] = twoPrimes
  return alreadyCalculated[num];

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}
//Time: O(N)
//Space: O(2)
log('nextTwoPrimes test cases:')
log(nextTwoPrimes(2));  // => [ 3, 5 ]
log(nextTwoPrimes(3));  // => [ 5, 7 ]
log(nextTwoPrimes(7));  // => [ 11, 13 ]
log(nextTwoPrimes(8));  // => [ 11, 13 ]
log(nextTwoPrimes(20));  // => [ 23, 29 ]
log(nextTwoPrimes(97));  // => [ 101, 103 ]
log('\n');


//pairProduct
const pairProduct = (arr, num) => {
  const numStorage = {};
  const pairIndex = [];
  let index = 0
  while (index < arr.length) {
    const complementNum = num / arr[index]
    if (numStorage.hasOwnProperty(complementNum)) {
      pairIndex.push([numStorage[complementNum], index])
      delete numStorage[complementNum];
    } else {
      numStorage[arr[index]] = index;
    }
    index++;
  }
  return pairIndex;
}
//Time: O(N)
//Space: O(N)
log('pairProduct test cases:')
log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]
log('\n');



//twoDimensionalSize
const twoDimensionalSize = arr => {
  let count = 0;
  arr.forEach(row => count += row.length)
  return count;
}
//Time: O(N)
//Space: O(1)
log('twoDimensionalSize test cases:')
const arrA = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];
log(twoDimensionalSize(arrA));  // => 9

const arrB = [
  ['a'],
  ['b', 'c', 'd', 'e']
];
log(twoDimensionalSize(arrB));  // => 5
log('\n');



//longWordCount
const longWordCount = str => {
  let longerThanSeven = 0
  const strArr = str.split(' ');
  strArr.forEach(word => {
    if (word.length > 7) longerThanSeven++;
  })
  return longerThanSeven;
}
//Time: O(N)
//Space: O(N)
log('longWordCount test cases:')
log(longWordCount(""));  // => 0
log(longWordCount("short words only"));  // => 0
log(longWordCount("one reallylong word"));  // => 1
log(longWordCount("two reallylong words inthisstring"));  // => 2
log(longWordCount("allwordword longwordword wordswordword"));  // => 3
log(longWordCount("seventy schfifty five"));  // => 1
log('\n');

//factorial
const factorial = num => {
  factorialed = 1;
  while (num >= 1) {
    factorialed *= num
    num--;
  }
  return factorialed
}
//Time: O(N)
//Space: O(1)
log('factorial test cases:')
log(factorial(1));  // => 1
log(factorial(4));  // => 24
log(factorial(5));  // => 120
log(factorial(10));  // => 3628800
log('\n');

//lcm
const lcm = (num1, num2) => {
  return (num1 * num2) / gcd(num1, num2);

  function gcd(num1, num2) {
    while (num2 !== 0) {
      const temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    return num1;
  }
}
//Time: O(log min(num1, num2)) - Euclidean algorithm
//Space: O(1)
log('lcm test cases:')
log(lcm(2, 3));  // => 6
log(lcm(6, 10));  // => 30
log(lcm(24, 26));  // => 312
log('\n');

//hipsterfyWord
const hipsterfyWord = str => {
  const vowels = 'aeiouAEIOU'
  let lastVowelIndex;
  for (let i = str.length - 1; i > 0; i--) {
    if(vowels.includes(str[i])) {
      lastVowelIndex = i;
      break;
    }
  }
  if (lastVowelIndex) {
    return str.slice(0, lastVowelIndex) + str.slice(lastVowelIndex + 1);
  } else {
    return str;
  }
}
//Time: O(N)
//Space: O(1)
log('hipsterfyWord test cases:')
log(hipsterfyWord('proper')) // => 'propr'
log(hipsterfyWord('tonic')) // => 'tonc'
log(hipsterfyWord('PANTHER')) // => 'PANTHR'
log(hipsterfyWord('BACKWARDS')) // => 'BACKWRDS'
log('\n');



//hipsterfy
const hipsterfy = str => {
  const words = str.split(' ');
  words.forEach((word, index) => words[index] = hipsterfyWord(words[index]));
  return words.join(' ');
}

//Time: O(N x M) - N is the number of words in the input string and M is the average length of each word.
//Space: O(N)
log('hipsterfy test cases:')
log(hipsterfy("proper"));  // => "propr"
log(hipsterfy("proper tonic panther"));  // => "propr tonc panthr"
log(hipsterfy("towel flicker banana"));  // => "towl flickr banan"
log(hipsterfy("runner anaconda"));  // => "runnr anacond"
log(hipsterfy("turtle cheeseburger fries"));  // => "turtl cheeseburgr fris"
log('\n');



//objectToString
const objectToString = obj => {
  const resultArr = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) resultArr.push(key.repeat(obj[key]));
  }
  return resultArr.join('');
}

//Time: O(N)
//Space: O(N)
log('objectToString test cases:')
log(objectToString({ a : 2, b: 4, c: 1 })) // => 'aabbbbc'
log(objectToString({ b: 1, o: 2, t: 1 })) // => 'boot'
log('\n');


//shortestWord
const shortestWord = str => {
  const strArr = str.split(' ');
  let shortest = strArr[0].length;
  let shortestWord = strArr[0]
  strArr.forEach(word => {
    if (word.length < shortest) {
      shortestWord = word;
      shortest = word.length;
    }
  })
  return shortestWord;
}
//Time: O(N)
//Space: O(1)
log('shortestWord test cases:')
log(shortestWord('app academy is cool')) // => 'is'
log(shortestWord('programming bootcamp')) // => 'bootcamp'
log('\n');


//greatestCommonFactor
const greatestCommonFactor = (num1, num2) => {
  let smallerNum;
  if (num1 > num2) smallerNum = num2
  else smallerNum = num1;
  while(smallerNum > 0) {
    if (num1 % smallerNum === 0 && num2 % smallerNum === 0) {
      return smallerNum;
    }
    smallerNum--;
  }
  return 'No factors found'
}

//Time: O(N)
//Space: O(1)
log('greatestCommonFactor test cases:')
log(greatestCommonFactor(15, 25)) // => 5
log(greatestCommonFactor(16, 24)) // => 8
log(greatestCommonFactor(7, 11)) // => 1
log('\n');



//isPassing
const isPassing = array => {
  let totalScore = 0;
  array.forEach(test => {
    totalScore += test.score;
  })
  return totalScore/array.length >= 70;
}
//Time: O(N) - length of the array
//Space: O(1)
log('isPassing test cases:')
const assessments1 = [
  { number: 1, score: 60 },
  { number: 2, score: 90 },
  { number: 3, score: 80 },
  { number: 4, score: 100 },
  { number: 5, score: 85 }
];

log(isPassing(assessments1)) // => true
const assessments2 = [
  { number: 1, score: 60 },
  { number: 2, score: 20 },
  { number: 3, score: 45 }
];

log(isPassing(assessments2)) // => false
log('\n');



//valueConcat
const valueConcat = (array, obj) => {
  const resultArr = [];
  for (let i = 0; i < array.length; i++) {
    if(obj.hasOwnProperty(array[i])) {
      resultArr.push(array[i]+obj[array[i]])
    } else {
      resultArr.push(array[i])
    }
  }
  return resultArr;
}
//Time: O(N) - length of the array
//Space: O(1)
log('valueConcat test cases:')
const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
log(valueConcat(arr, obj)) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })) // => [ 'a', 'b2', 'c3' ]
log('\n');



//threeInARow
const threeInARow = array => {
  for (let i = 0; i < array.length - 3; i++) {
    if (array[i] === array[i + 1] && array[i + 1] === array[i + 2]) {
      return true;
    }
  }
  return false;
}

//Time: O(N) - length of the array
//Space: O(1)
log('threeInARow test cases:')
log(threeInARow([4, 3, 7, 7, 7, 13, 8]));  // => true;
log(threeInARow([10, 9, 20, 33, 3, 3]));  // => false;
log('\n');

//varialog(bleNameify
const variableNameify = array => {
  const convertedArr = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) convertedArr.push(array[i].toLowerCase())
    else convertedArr.push(array[i][0].toUpperCase() + array[i].slice(1).toLowerCase())
  }
  return convertedArr.join('');
}
//Time: O(N * M) - length of the input array and the average length of words.
//Space: O(N)
log('variableNameify test cases:')
log(variableNameify(['is', 'prime'])) // => 'isPrime'
log(variableNameify(['remove', 'last', 'vowel'])) // => 'removeLastVowel'
log(variableNameify(['MaX', 'VALUE'])) // => 'maxValue'
log('\n');


//threeIncreasing
const threeIncreasing = array => {
  for (let i = 0; i < array.length - 3; i++) {
    if (array[i] === array[i + 1] - 1 && array[i + 1] === array[i + 2] - 1) {
      return true;
    }
  }
  return false;}

//Time: O(N) - length of the array
//Space: O(1)
log('threeIncreasing test cases:')
log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));  // => true
log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));  // => false
log('\n');

//reverse2D
const reverse2D = array => {
  let reversedFlatArr = []
  for(let i = array.length - 1; i >= 0; i--) {
    for(let j = array[i].length - 1; j >= 0; j--) {
      reversedFlatArr.push(array[i][j]);
    }
  }
  return reversedFlatArr.join('');
}
//Time: O(N * M) - length of input array and length of nested array.
//Space: O(N) - length of input array
log('reverse2D test cases:')
const arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

log(reverse2D(arr1)) // => 'ihgfedcba'
const arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
log(reverse2D(arr2)) // => 'PatrickOscarMikeMattJulian'
log('\n');


//reverb
const reverb = str => {
  const vowels = 'aeiouAEIOU';
  for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.includes(str[i])) {
      return str + str.slice(i);
    }
  }
  return str;
}
//Time: O(N) - length of input string during for-loop
//Space: O(M) - length of the repeated portion of the string stored
log('reverb test cases:')
log(reverb('running'));  // => 'runninging'
log(reverb('wild'));  // => 'wildild'
log(reverb('debugged'));  // => 'debuggeded'
log(reverb('my'));  // => 'my'
log('\n');

//countRepeats
const countRepeats = str => {
  let count = 0;
  const letters = {}
  for (let i = 0; i < str.length; i++) {
    if(letters.hasOwnProperty(str[i])) letters[str[i]]++;
    else letters[str[i]] = 1;
  }
  for (const key in letters) {
    if (letters[key] > 1) count++
  }
  return count;
}
//Time: O(N) - length of input string (for loop)
//Space: O(M) - number of unique characters in input string stored in letters object.
log('countRepeats test cases:')
log(countRepeats('calvin')); // => 0
log(countRepeats('caaaalvin')); // => 1
log(countRepeats('pops')); // => 1
log(countRepeats('mississippi')); // => 3
log(countRepeats('hellobootcampprep')); // => 4
log('\n');

//pairsToString
const pairsToString = arr => {
  let resultArr = [];
  arr.forEach((pair) => {
    let localCount = pair[1]
    while(localCount > 0) {
      resultArr.push(pair[0]);
      localCount--;
    }
  })
  return resultArr.join('');
}
//Time: O(N)//pushing into the array instead of concatenating to string is more efficient.
//Space: O(N)
log('pairsToString test cases:')
const array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];
log(pairsToString(array1));  // => 'aaabcc'

const array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];
log(pairsToString(array2));  // => 'food!'
log('\n');

//countAdjacentSums
const countAdjacentSums = (arr, n) => {
  let count = 0;
  const adjacents = {}
  for (let i = 0; i < arr.length; i++) {
    if (adjacents[n - arr[i]]) count++
    adjacents[arr[i]] = 1;
  }
  return count;
}
//Time: O(N)
//Space: O(1)
log('countAdjacentSums test cases:')
log(countAdjacentSums([1, 5, 1], 6)) // => 2
log(countAdjacentSums([7, 2, 4, 6], 7)) // => 0
log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)) // => 3
log('\n');

//signFlipCount
const signFlipCount = (arr) => {
  let count = 0;
  arr.forEach((number, index) => {
    if(index !== 0 && ((arr[index] > 0 && arr[index - 1] < 0) || (arr[index - 1] > 0 && arr[index] < 0))) {
      count++
    }
  })
  return count;
}
//Time: O(N)
//Space: O(1)
log('signFlipCount test cases:')
log(signFlipCount([5, 6, 10, 3])); // => 0
log(signFlipCount([-12, 0, -3, -5])); // => 0
log(signFlipCount([-12, 10, -3, -5])); // => 2
log(signFlipCount([1, -2, -3, -4])); // => 1
log(signFlipCount([-1, 11.3, -3, 100])); // => 3
log('\n');

//powerSequence
const powerSequence = (num1, num2) => {
  const resultArr = [];
  let start = 1;
  while (start <= num2) {
    resultArr.push(num1 ** start);
    start++;
  }
  return resultArr;
}
//Time: O(N)
//Space: O(N)
log('powerSequence test cases:')
log(powerSequence(3, 4));  // => [ 3, 9, 27, 81 ]
log(powerSequence(2, 6));  // => [ 2, 4, 8, 16, 32, 64 ]
log(powerSequence(8, 3));  // => [ 8, 64, 512 ]
log('\n');

//collapseString
const collapseString = str => {
  let collapsed = ''
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i] !== str[i-1]) {
      collapsed += str[i]
    }
  }
  return collapsed;
}
//Time: O(N) - length of the input string
//Space: O(M) - length of the resulting collapsed string
log('collapseString test cases:')
log(collapseString('apple')); // => 'aple'
log(collapseString('AAAaalviiiiin!!!')); // => 'Aalvin!'
log(collapseString('hello   app academy')); // => 'helo ap academy'
log('\n');

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
