const blessed = require('blessed');
// Const contrib = require('blessed-contrib');

const screen = blessed.screen({smartCSR: true});
const mainArea = blessed.box({
	left: 0,
	top: 0,
	width: '70%',
	height: '99%-2',
	scrollable: true,
	alwaysScroll: true,
	border: 'line',
	label: 'Main',
	mouse: true,
	scrollbar: {
		ch: ' ',
		inverse: true
	},
	style: {border: {fg: 'cyan'}}
});
const infoArea = blessed.box({
	left: '71%',
	top: 0,
	width: '29%',
	height: '99%-2',
	label: 'Info',
	scrollable: false,
	border: 'line',
	style: {border: {fg: 'cyan'}}
});
const input = blessed.textbox({
	bottom: 0,
	left: 0,
	width: '100%',
	height: 3,
	keys: true,
	mouse: true,
	inputOnFocus: true,
	border: 'line',
	style: {fg: 'cyan'}
});
screen.append(mainArea);
screen.append(infoArea);
screen.append(input);
screen.render();

input.on('submit', text => {
	mainArea.pushLine(text);
	input.clearValue();
	input.focus();
	mainArea.setScrollPerc(100);
	screen.render();
});

setInterval(() => {
	mainArea.pushLine('this is text');
	infoArea.pushLine('this is more text');
	screen.render();
	input.focus();
}, 5000);

screen.key(['escape', 'q', 'C-c'], () => process.exit(0));
