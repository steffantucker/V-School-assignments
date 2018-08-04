function largest (arr) {
	return arr.reduce((a, v) => a > v ? a : v, 0);
}

function lettersWithStrings(arr, str) {
	return arr.filter(v => ~v.indexOf(str));
}

function isDivisible(num1, num2) {
	return !(num1 % num2);
}

console.log(largest([3,5,2,8,1]));
console.log(lettersWithStrings(['#3','$$$','C%4!','Hey!'], '!'));
console.log(isDivisible(4, 2));
console.log(isDivisible(9, 3));
console.log(isDivisible(15, 4));