document.add.addnum1.addEventListener('keypress', addEvent);
document.add.addnum2.addEventListener('keypress', addEvent);
document.add.addEventListener('submit', addEvent)
document.subtract.subnum1.addEventListener('keypress', subEvent)
document.subtract.subnum2.addEventListener('keypress', subEvent)
document.subtract.addEventListener('submit', subEvent)
document.multiply.multnum1.addEventListener('keypress', multEvent)
document.multiply.multnum2.addEventListener('keypress', multEvent)
document.multiply.addEventListener('submit', multEvent)
function addEvent(e) {
  e.preventDefault();

  if (/[0-9]/.test(Number(e.key))) {
    e.target.value += e.key;
    document.getElementById('addanswer').innerText = Number(document.add.addnum1.value) + Number(document.add.addnum2.value)
    
  }
}

function subEvent(e) {
  e.preventDefault();

  if (/[0-9]/.test(Number(e.key))) {
    e.target.value += e.key;
    document.getElementById('subanswer').innerText = Number(document.subtract.subnum1.value) - Number(document.subtract.subnum2.value)
    
  }
}

function multEvent(e) {
  e.preventDefault();

  if (/[0-9]/.test(Number(e.key))) {
    e.target.value += e.key;
    document.getElementById('multanswer').innerText = Number(document.multiply.multnum1.value) * Number(document.multiply.multnum2.value)
    
  }
}