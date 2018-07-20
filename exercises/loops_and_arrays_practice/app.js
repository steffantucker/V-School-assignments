var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
console.log("Computer count: " + officeItems.reduce((a, v) => v === 'computer'? a += 1 : a, 0));

var peopleWhoWantToSeeMadMaxFuryRoad = [  
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
];
peopleWhoWantToSeeMadMaxFuryRoad.forEach(v => {
  let str = "";
  if (v["age"] >= 18) {
    str = `${v["name"]} is old enough. `;
    if (v["gender"] === 'male')
      str += "He's good to see Mad Max Fury Road.";
    else
      str += "She's good to see Mad Max Fury Road.";
  }
  else {
    str = `${v["name"]} is not old enough to see Mad Max Fury Road. Don't let `;
    if (v["gender"] == 'male')
      str += 'him in.';
    else
      str += 'her in.';
  }
  console.log(str);
});

const switchCount = arr => arr.reduce((a, v) => a += v) % 2 == 0 ? "off" : "on";
let a = [[2, 5, 435, 4, 3], [1, 1, 1, 1, 3], [9, 3, 4, 2]];
for (let i = 0; i < a.length; i++)
  console.log(switchCount(a[i]));