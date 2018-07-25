let fruit = ['banana', 'apple', 'orange', 'watermelon'];
let vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];

console.log(`fruit: ${fruit}`)
console.log(`vegie: ${vegetables}\n`)

vegetables.pop();
console.log(`fruit: ${fruit}`)
console.log(`vegie: ${vegetables}\n`)
fruit.shift();
console.log(`fruit: ${fruit}`)
console.log(`vegie: ${vegetables}\n`)
fruit.push(fruit.indexOf('orange'));
console.log(`fruit: ${fruit}`)
console.log(`vegie: ${vegetables}\n`)
console.log(vegetables.length);
vegetables.push(vegetables.length)
console.log(`fruit: ${fruit}`)
console.log(`vegie: ${vegetables}\n`)
let food = fruit.concat(vegetables);
console.log(` food: ${food}\n`);
food.splice(4, 2);
console.log(` food: ${food}\n`);
food.reverse();
console.log(` food: ${food}\n`);
console.log(food.toString());