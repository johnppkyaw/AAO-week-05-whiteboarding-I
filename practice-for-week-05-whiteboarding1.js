const log = console.log;


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
