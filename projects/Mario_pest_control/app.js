document.getElementById('goombaup').addEventListener('click', goombaUpClick)
document.getElementById('goombadown').addEventListener('click', goombaDownClick)
document.getElementById('bobup').addEventListener('click', bobUpClick)
document.getElementById('bobdown').addEventListener('click', bobDownClick)
document.getElementById('cheepup').addEventListener('click', cheepUpClick)
document.getElementById('cheepdown').addEventListener('click', cheepDownClick)
document.baddietotals.addEventListener('submit', getTotal)

function goombaUpClick (e) {
  document.baddietotals.goombacount.value = Number(document.baddietotals.goombacount.value) + 1;
}
function bobUpClick (e) {
  document.baddietotals.bobombcount.value = Number(document.baddietotals.bobombcount.value) + 1;
}
function cheepUpClick (e) {
  document.baddietotals.cheepcount.value = Number(document.baddietotals.cheepcount.value) + 1;
}
function goombaDownClick (e) {
  document.baddietotals.goombacount.value = Number(document.baddietotals.goombacount.value) - 1;
}
function bobDownClick (e) {
  document.baddietotals.bobombcount.value = Number(document.baddietotals.bobombcount.value) - 1;
}
function cheepDownClick (e) {
  document.baddietotals.cheepcount.value = Number(document.baddietotals.cheepcount.value) - 1;
}

function getTotal (e) {
  e.preventDefault();

  let total = 0;
  total += document.baddietotals.goombacount.valueAsNumber * Number(document.getElementById('goombacost').innerText);
  total += document.baddietotals.bobombcount.valueAsNumber * Number(document.getElementById('bobombcost').innerText);
  total += document.baddietotals.cheepcount.valueAsNumber * Number(document.getElementById('cheepcost').innerText);

  document.getElementById('total').innerText = total;
  document.getElementById('totaldisplay').style.display = 'block';
}