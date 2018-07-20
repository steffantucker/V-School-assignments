console.log('Preliminaries:');
console.log('1.');
for (let i = 0; i < 10; i++)
  console.log(i);
console.log('2.');
for (let i = 9; i >= 0; i--)
  console.log(i);
console.log('3.');
let fruit = ["banana", "orange", "apple", "kiwi"];
for (let i = 0; i < fruit.length; i++)
  console.log(fruit[i]);
console.log('Bronze medal:');
console.log('1.');
let arr = [];
for (let i = 0; i < 10; i++)
  arr.push(i);
console.log(arr);
console.log('2.');
for (let i = 0; i <= 100; i += 2)
  console.log(i);
console.log('3.');
arr = [];
fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for (let i = 0; i < fruit.length; i += 2)
  console.log(fruit[i]);
console.log(arr);
console.log('Silver medal');
console.log('1.');
var peopleArray = [  
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];
for (let i = 0; i < peopleArray.length; i++)
  console.log(peopleArray[i].name);
console.log('2.');
let names = [], occupations = [];
for (let i = 0; i < peopleArray.length; i++) {
  names.push(peopleArray[i].name);
  occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);
console.log('3.')
names = [];
occupations = [];
let o = false, n = false;
for (let i = 0; i < peopleArray.length; i++) {
  if (peopleArray[i].name === 'Harrison Ford')
    n = true;
  if (peopleArray[i].occupation === 'Singer')
    o = true;
  if (o)
    occupations.push(peopleArray[i].occupation);
  if (n)
    names.push(peopleArray[i].name);
}
console.log(occupations);
console.log(names);
console.log('Gold medal');
console.log('1.');
arr = [];
for (let i = 0; i < 3; i++) {
  let temp = [];
  for (let j = 0; j < 3; j++)
    temp.push(0);
  arr.push(temp);
}
console.log(arr);
console.log('2.');
arr = [];
for (let i = 0; i < 3; i++) {
  let temp = [];
  for (let j = 0; j < 3; j++)
    temp.push(i);
  arr.push(temp);
}
console.log(arr);
console.log('3.');
arr = [];
for (let i = 0; i < 3; i++) {
  let temp = [];
  for (let j = 0; j < 3; j++)
    temp.push(j);
  arr.push(temp);
}
console.log(arr);
console.log('4.');
arr = [];
for (let i = 0; i < 3; i++) {
  let temp = [];
  for (let j = 0; j < 3; j++)
    temp.push(j !== 0 ? 'x' : 0);
  arr.push(temp);
}
console.log(arr);
