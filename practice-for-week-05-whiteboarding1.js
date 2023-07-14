const log = console.log;





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
//Space Complexity - O(1)
log(moreDotLessDash('2-D arrays are fun. I think.'));  // => true
log(moreDotLessDash('.-.-.'));  // => true
log(moreDotLessDash('.-'));  // => false
log(moreDotLessDash('..--'));  // => false
