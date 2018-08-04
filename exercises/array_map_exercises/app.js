function doubleNumbers(arr) {
	return arr.map(v => v * 2);
}
console.log(doubleNumbers([2, 5, 100]));

function stringItUp(arr) {
	return arr.map(v => v.toString());
}
console.log(stringItUp([2, 5, 100]));

function capitalizeNames(arr) {
	return arr.map(v => v[0].toUpperCase() + v.slice(1).toLowerCase());
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

function namesOnly(arr){
	return arr.map(v => v.name);
}

console.log(namesOnly([  
	{
			name: "Angelina Jolie",
			age: 80
	},
	{
			name: "Eric Jones",
			age: 2
	},
	{
			name: "Paris Hilton",
			age: 5
	},
	{
			name: "Kayne West",
			age: 16
	},
	{
			name: "Bob Ziroll",
			age: 100
	}
]))

function makeStrings(arr){
	return arr.map(v => {
		if (v.age <= 16) 
			return `${v.name} is under age!!`
		return `${v.name} can go to The Matrix`});
}
console.log(makeStrings([  
	{
			name: "Angelina Jolie",
			age: 80
	},
	{
			name: "Eric Jones",
			age: 2
	},
	{
			name: "Paris Hilton",
			age: 5
	},
	{
			name: "Kayne West",
			age: 16
	},
	{
			name: "Bob Ziroll",
			age: 100
	}
]))

function readyToPutInTheDOM(arr){
	return arr.map(v => `<h1>${v.name}</h1><h2>${v.age}</h2>`)
}
console.log(readyToPutInTheDOM([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))