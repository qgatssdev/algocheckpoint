var str = '';
function algo(str) {
  for (i = 0; i < str.length; i++) {}
  console.log('The length of the sentence is ' + str.length);
  console.log(
    'The number of words in the sentence is ' + str.split(' ').length
  );
  console.log(
    'The number of vowels in the sentence is ' +
      (str.match(/[aeiou]/gi) || []).length
  );
}

console.log(algo('kdfkdf jkdkd kdkdk'));
