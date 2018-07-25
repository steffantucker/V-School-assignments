// 3 unique functions using: 
//  .concat       x
//  .indexOf      x
//  .lastIndexOf  x
//  .match
//  .replace
//  .slice        x
//  .split        x
//  .toLowerCase  x
//  .toUpperCase
//  .substr

function allInstances(str, s) {
  let i = str.indexOf(s);
  let instances = [i];
  while (i !== str.lastIndexOf(s)) {
    i = str.indexOf(s, i + 1);
    instances.push(i);
  }
  return instances;
}

console.log(allInstances('abcdeffghijffklmnfofpqrstuvfwxyz', 'f'));

function removeAllInstances(str, s) {
  let newStr = str.slice(0);
  while (newStr.indexOf(s) !== -1) {
    newStr = newStr.slice(0, newStr.indexOf(s)).concat(newStr.slice(newStr.indexOf(s) + s.length + 1));
  }
  return newStr;
}

console.log(removeAllInstances('abcdeffghijffklmnfofpqrstuvfwxyz', 'f'));

function upperCaseOnly (str, char) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) 
      arr[i] = arr[i].toUpperCase();
  }
  return arr.join('');
}
console.log(upperCaseOnly('abcdeffghijffklmnfofpqrstuvfwxyz', 'f'));

