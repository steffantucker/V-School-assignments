// https://coursework.vschool.io/loops-arrays/
const createEvenArray = highestNum => {
  let t = [];
  for (let i = 2; i <= highestNum; i += 2)
    t.push(i);
  return t;
}

const addOdds = evensOnlyArray => {
  let l = evensOnlyArray.length;
  evensOnlyArray.push(1);
  for (let i = 0; i < l; i++)
    evensOnlyArray.push(evensOnlyArray[i] + 1);
  return evensOnlyArray;
}

let array = [];
console.log(array = createEvenArray(10));
console.log(array = addOdds(array));

console.log(array.sort((a, b) => a - b));