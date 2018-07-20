function sum(a, b){
  return a + b;
}
console.log(sum(4, 5));

function max(a, b, c) {
  return Math.max(a, b, c);
}
console.log(max(4, 5, 100));

function oddOrEven(num) {
  return num % 2 === 0 ? "even" : "odd";
}
console.log(oddOrEven(6));

function stringWeirdness(str) {
  if (str.length > 20)
    return str.substring(0, Math.floor(str.length / 2));
  return str + str;
}
console.log(stringWeirdness("This is"));

console.log("Optional");
function fibonacci(n) {
  let prev = 0, next = 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += next;
    let t = next;
    next += prev;
    prev = t;
  }
  return sum;
}
console.log(fibonacci(3));

function quadratic(a, b, c) {
  let part2 = Math.sqrt(b * b - 4 * a * c);
  let denomiator = 2 * a;
  return [(0 - b + part2) / denomiator, (0 - b - part2) / denomiator]
}
console.log(quadratic(1, 3, -4));

function frequentLetter(str) {
  let letters = {};
  for (let i = 0; i < str.length; i++) {
    if (letters[str[i].toLowerCase()] === undefined)
      letters[str[i].toLowerCase()] = 1;
    else
      letters[str[i].toLowerCase()]++;
  }
  letters[' '] = 0;
  let largest = 0, letter = '';
  let larray = Object.entries(letters);
  for (let i = 0; i < larray.length; i++) {
    if (larray[i][1] > largest){
      letter = larray[i][0];
      largest = larray[i][1];
    }
  }
  return letter;
}
console.log(frequentLetter("In theory this should return e as that is the most common letter but this will probably return t"));