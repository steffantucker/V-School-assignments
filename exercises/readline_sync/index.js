var cin = require('readline-sync');

var fname = cin.question("First name? ");
var lname = cin.question("Last name? ");
var favcolor = cin.question("Favorite color? ");
do {
  var memory = cin.question("Fondest memory? ");
  if (memory.length < 20) 
    console.log("I'm sorry, that's not enough information");
} while (memory.length < 20)
var num = cin.question("Favorite number? ");
console.clear();
console.log('\u001b[4m' + (`${fname} ${lname}`).toUpperCase());
console.log('\u001b[0mYour favorite color is ' + favcolor.length + ' characters');
console.log(`You've been heard saying:\n\t${memory.slice(Math.floor(memory.length / 2))}`);
console.log('But this never happened:\n\t\u001b[2m' + memory.slice(num) + '\u001b[0m');
