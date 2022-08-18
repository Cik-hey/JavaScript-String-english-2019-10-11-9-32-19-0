// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
var uppername = name.toUpperCase();
console.log(uppername);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
function capitalizeTheFirstLetterOfEachWord(words) {
   var separateWord = words.toLowerCase().split(' ');
   for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
      separateWord[i].substring(1);
   }
   return separateWord.join(' ');
}
console.log(capitalizeTheFirstLetterOfEachWord(sentence));

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
var extractedmoney = money.substring(1,3);
console.log(extractedmoney);
