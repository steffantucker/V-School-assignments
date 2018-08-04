var wizards = [  
  {
    name: "Edwin Odesseiron",
    age: 37,
    alignment: "lawful evil"
  },
  {
    name: "Harry Potter",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Hermony Granger",
    age: 21,
    alignment: "lawful good"
  },
  {
    name: "Ronny the Bear",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Gandalf",
    age: 100,
    alignment: "neutral good"
  }
]

console.log(`${wizards.forEach(v => console.log(v.name))}`);
wizards.forEach(v => v.isAlive = true);
console.log(`neutral good wizards: ${wizards.filter(v => v.alignment === 'neutral good')}`);
console.log(`index of a lawful good: ${wizards.findIndex(v => v.alignment === 'lawful good')}`);
console.log(`everyone alive? ${wizards.every(v => v.isAlive)}`);
console.log(`is somebody neutral good? ${wizards.some(v => v.alignment === 'neutral good')}`);
wizards.forEach(v => v.alignment === 'neutral good' ? v.isAlive = v.isAlive : null);
console.log(`we killed somebody, is everyone alive? ${wizards.every(v => v.isAlive)}`);
console.log(`is someone still alive? ${wizards.some(v => v.isAlive)}`);