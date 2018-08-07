const blessed = require('blessed');
// Const contrib = require('blessed-contrib');

const screen = blessed.screen({smartCSR: true});
const mainArea = blessed.box({
	left: 0,
	top: 0,
	width: '70%',
	height: '99%-1',
	scrollable: true,
	alwaysScroll: true,
	border: 'line',
	label: 'Main',
	style: {border: {fg: 'cyan'}}
});
const infoArea = blessed.box({
	left: '71%',
	top: 0,
	width: '29%',
	height: '99%-1',
	label: 'Info',
	scrollable: false,
	border: 'line',
	style: {border: {fg: 'cyan'}}
});
const input = blessed.textbox({
	bottom: 0,
	left: 0,
	width: '100%',
	height: '1%',
	keys: true,
	mouse: true,
	inputOnFocus: true,
	style: {fg: 'green'}
});
screen.append(mainArea);
screen.append(infoArea);
screen.append(input);
screen.render();

input.on('submit', text => {
	mainArea.pushLine(text);
	input.clearValue();
	input.focus();
	screen.render();
});

setInterval(() => {
	mainArea.pushLine('this is text');
	infoArea.pushLine('this is more text');
	screen.render();
	input.focus();
}, 5000);

screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

// const blessed = require('blessed');

// var screen = blessed.screen();
// var body = blessed.box({
//   top: 0,
//   left: 0,
//   height: '100%-1',
//   width: '100%',
//   keys: true,
//   mouse: true,
//   alwaysScroll: true,
//   scrollable: true,
//   scrollbar: {
//     ch: ' ',
//     bg: 'red'
//   }
// });
// var inputBar = blessed.textbox({
//   bottom: 0,
//   left: 0,
//   height: 1,
//   width: '100%',
//   keys: true,
//   mouse: true,
//   inputOnFocus: true,
//   style: {
//     fg: 'white',
//     bg: 'blue'	// Blue background so you see this is different from body
//   }
// });

// // Add body to blessed screen
// screen.append(body);
// screen.append(inputBar);

// // Close the example on Escape, Q, or Ctrl+C
// screen.key(['escape', 'q', 'C-c'], (ch, key) => (process.exit(0)));

// // Handle submitting data
// inputBar.on('submit', (text) => {
//   log(text);
//   inputBar.clearValue();
// });

// // Add text to body (replacement for console.log)
// const log = (text) => {
//   body.pushLine(text);
//   screen.render();
// }


// /*
//  * Demonstration purposes
//  */

// // Listen for enter key and focus input then
// screen.key('enter', (ch, key) => {
//   inputBar.focus();
// });

// // Log example output
// setInterval(() => {
//   log("Just log some example output");
// }, 1000);