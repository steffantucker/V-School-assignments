var square = document.getElementById('square');
var color = square.style.backgroundColor;

square.addEventListener('mouseenter', () => {color = square.style.backgroundColor; square.style.backgroundColor = 'blue'});
square.addEventListener('mouseleave', () => square.style.backgroundColor = color);
square.addEventListener('mousedown', () => square.style.backgroundColor = 'red');
square.addEventListener('mouseup', () => square.style.backgroundColor = 'yellow');
square.addEventListener('dblclick', () => square.style.backgroundColor = 'green');
window.addEventListener('wheel', () => {console.log('scroll'); square.style.backgroundColor = 'orange'});
window.addEventListener('keyup', keyboardColors);

function keyboardColors(e) {
  switch (e.key) {
    case 'a':
      square.style.backgroundColor = 'aqua';
      break;
    case 'b':
      square.style.backgroundColor = 'brown';
      break;
    case 'c':
      square.style.backgroundColor = 'coral';
      break;
    case 'd':
      square.style.backgroundColor = 'darkorange';
      break;
    case 'f':
      square.style.backgroundColor = 'firebrick';
      break;
    case 'g':
      square.style.backgroundColor = 'gold';
      break;
    case 'i':
      square.style.backgroundColor = 'ivory';
      break;
    case 'k':
      square.style.backgroundColor = 'khaki';
      break;
    case 'l':
      square.style.backgroundColor = 'lavender';
      break;
    case 'm':
      square.style.backgroundColor = 'mintcream';
      break;
    case 'n':
      square.style.backgroundColor = 'navajowhite';
      break;
    case 'o':
      square.style.backgroundColor = 'oldlace'
      break;
    case 'p':
      square.style.backgroundColor = 'peachpuff';
      break;
    case 'r':
      square.style.backgroundColor = 'rebeccapurple';
      break;
    case 's':
      square.style.backgroundColor = 'salmon';
      break;
    case 't':
      square.style.backgroundColor = 'turquoise';
      break;
    case 'v':
      square.style.backgroundColor = 'violet';
      break;
    case 'w':
      square.style.backgroundColor = 'wheat';
      break;
    case 'y':
      square.style.backgroundColor = 'yellowgreen';
      break;
  }
}