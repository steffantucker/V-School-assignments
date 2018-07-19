'use strict'
// Prelims
console.log("Preliminaries:")
console.log("1.");
if (5 > 3)
  console.log("is greater than");
console.log("2.");
if ("cat".length === 3)
  console.log("is the length");
console.log("3.");
if ("cat" === "dog")
  console.log("the same");
else
  console.log("not the same");

// Bronze medal
console.log("\nBronze medal:")
console.log("1.");
var person = {
  name: "Bobby",
  age: 12
};
if (person.age >= 18)
  console.log(`${person.name} is allowed to go to the movie`);
else
  console.log(`${person.name} is not allowed to go to the movie`);
console.log("2.");
if (person.name[0] === 'B')
  console.log(`${person.name} is allowed to go to the movie`);
else
  console.log(`${person.name} is not allowed to go to the movie`);
console.log("3.");
if (person.age >= 18 && person.name[0] === 'B')
  console.log(`${person.name} is allowed to go to the movie`);
else
  console.log(`${person.name} is not allowed to go to the movie`);

// Silver medal
console.log("\nSilver medal");
console.log("1.");
if (1 === '1')
  console.log('strict');
else if (1 == '1')
  console.log('loose');
else
  console.log('not equal at all');
console.log("2.");
if ((1 <= 2 && 2 === 4) || (3 * 4 > 10 && 5 + 10 > 10))
  console.log('yes')

// Gold medal
console.log("\nGold medal");
console.log("1.");
if (typeof "dog" === "string")
  console.log("'dog' is a String");
else
  console.log("'dog' is not a String");
console.log("2.");
if (typeof "true" === "boolean")
  console.log("'true' is a Boolean");
else
  console.log("'true' is not a Boolean");
console.log("3.");
if (typeof a !== 'undefined')
  console.log("a has been defined");
else
  console.log("a has not been defined")
console.log("4.");
if ('a' < 12)
  console.log("'a' is less");
else
  console.log("'a' is greater");
console.log("5.");
var oddOrEven = 120;
oddOrEven % 2 === 0 ? console.log(`${oddOrEven} is even`) : console.log(`${oddOrEven} is odd`);