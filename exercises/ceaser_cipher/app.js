var cin = require('readline-sync');
// 97-122 (a-z)
var message = cin.question('Message: ');
var shift = cin.questionInt('Shift: ');
function ceasarCipher(message, shift) {
  return message.split('').map(v => (v.toLowerCase().charCodeAt(0) < 123 && v.toLowerCase().charCodeAt(0) > 90) ? String.fromCharCode(((v.toLowerCase().charCodeAt(0) + shift - 97) % 26) + 97) : v).join('');
}

console.log(ceasarCipher(message, shift));