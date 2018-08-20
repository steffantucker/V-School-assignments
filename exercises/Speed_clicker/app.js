let clicks = 0;

document.getElementById('GO').addEventListener('click', e => {
	const clickArea = document.getElementById('clickArea');
	document.getElementById('GO').style.display = 'none';
	document.getElementById('infoArea').style.display = 'block';
	clickArea.addEventListener('click', clickCount);
	setTimeout(endGame, 30000);
});

function clickCount() {
	clicks++;
}

function endGame() {
	const clickArea = document.getElementById('clickArea');
	clickArea.removeEventListener('click', clickCount);
	document.getElementById('infoArea').style.display = 'none';
	let score = document.createElement('div');
	score.innerHTML = `Score: <br /> <span id='finalScore'>${clicks}</span>`;
	const date = new Date().toLocaleString();
	localStorage.setItem(date, clicks);
	const scoreArea = document.getElementById('scoreArea');
	scoreArea.innerHTML += `<div>${date}: ${clicks}</div>`;
	clicks = 0;

	clickArea.addEventListener('click', reset);
}

function reset() {
	const clickArea = document.getElementById('clickArea');
	clickArea.removeEventListener('click', reset);
	document.getElementById('infoArea').style.display = 'none'
	document.getElementById('GO').style.display = 'block';
}

const keys = Object.keys(localStorage);
keys.forEach(v => document.getElementById('scoreArea').innerHTML += `<div>${v}: ${localStorage[v]}</div>`);