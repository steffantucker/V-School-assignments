const cin = require('readline-sync');
const {Progress} = require('clui');
const blessed = require('blessed');

const Player = require('./player');
const Item = require('./item');
const Monster = require('./monster');

let player;
const screen = blessed.screen();
const mainBuffer = blessed.box({
	top: 0,
	left: 0,
	width: '70%',
	height: '99%-2',
	scrollable: true,
	alwaysScroll: true,
	tags: true,
	border: 'line',
	mouse: true,
	scrollbar: {
		ch: ' ',
		inverse: true
	},
	style: {border: {fg: 'cyan'}}
});
const infoPane = blessed.box({
	left: '71%',
	top: 0,
	width: '29%',
	height: '99%-2',
	scrollable: false,
	tags: true,
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
	style: {background: {fg: 'green'}}
});
screen.append(mainBuffer);
screen.render();
/**
 * User commands:
 *	w						walk
 *	print				prints player information
 *	equip				prints available equipment and stats to equip
 *	equip name	equips named equipment if found in inventory
 *
 * In battle:
 *	attack			attacks, damage based on equiped item
 *	defend			reduces damage based on equiped armor
 *	run					50% chance of escape
 */
async function main() {
	screen.render();
	mainBuffer.pushLine('Connecting to the net...');
	screen.render();
	await new Promise(resolve => setTimeout(resolve, 3000));
	mainBuffer.pushLine('Connection established');
	screen.render();
	mainBuffer.pushLine('Checking user...');
	screen.render();
	await new Promise(resolve => setTimeout(resolve, 5000));
	mainBuffer.pushLine('{red-fg}Invalid credentials{/red-fg}');
	screen.render();
	mainBuffer.pushLine('Checking for available account slots...');
	screen.render();
	await new Promise(resolve => setTimeout(resolve, 2000));
	mainBuffer.pushLine('{green-fg}Slots available{/green-fg}');
	screen.render();
	mainBuffer.pushLine('Enter username: ');
	screen.append(input);
	input.focus();
	screen.render();
	input.once('submit', text => {
		input.clearValue();
		mainBuffer.pushLine(text);
		player = new Player(text);
		screen.render();
		main2();
	});
}

async function main2() {
	mainBuffer.pushLine('Checking username availability...');
	screen.render();
	await new Promise(resolve => setTimeout(resolve, 3000));
	mainBuffer.pushLine('Username available');
	mainBuffer.pushLine('Loading...');
	const loading = new Progress(30);
	mainBuffer.pushLine(loading.update(0));
	screen.render();
	for (let i = 0; i * 0.1 <= 1; i++) {
		await new Promise(resolve => setTimeout(resolve, 800));
		mainBuffer.popLine();
		mainBuffer.pushLine(loading.update(i * 0.1));
		screen.render();
	}
	mainBuffer.pushLine(`Welcome to the net ${player.name}`);
	input.focus();
	screen.render();
	gameLoop();
}

function gameLoop() {
	screen.append(infoPane);
	mainBuffer.setLabel('Status: Connected');
	mainBuffer.pushLine('What action to take (h for help)? ');
	mainBuffer.setScrollPerc(100);
	screen.render();
	input.once('submit', mainMenu);
}

function mainMenu(text) {
	mainBuffer.pushLine(text);
	input.clearValue();
	mainBuffer.setScrollPerc(100);
	screen.render();
	switch (text[0]) {
		case 'h': // Help
			mainBuffer.pushLine(
				'{cyan-fg}[c]{/cyan-fg}onnect to establish a new connection'
			);
			mainBuffer.pushLine('\t{red-fg}watch out for rogue processes{/red-fg}');
			mainBuffer.pushLine(
				'{cyan-fg}[i]{/cyan-fg}nventory to view program inventory'
			);
			mainBuffer.pushLine('{cyan-fg}[p]{/cyan-fg}roccess to view process info');
			mainBuffer.pushLine('{cyan-fg}[q]{/cyan-fg}uit to quit');
			mainBuffer.setScrollPerc(100);
			screen.render();
			break;
		case 'i': // Inventory
			infoPane.setLabel('Salvaged Programs');
			infoPane.setContent('');
			player.printInventory(infoPane);
			mainBuffer.setScrollPerc(100);
			screen.render();
			break;
		case 'p': // Pring player info
			infoPane.setLabel('Process info');
			infoPane.setContent('');
			player.printInfo(infoPane);
			mainBuffer.setScrollPerc(100);
			screen.render();
			break;
		case 'c': // Connect
			player.score++;
			if (Math.random() < 0.25) {
				// Gonna get attacked
				monsterAttack();
			} else {
				mainBuffer.pushLine('Good connection, no rogue process present');
				mainBuffer.setScrollPerc(100);
				screen.render();
			}
			if (!player.isAlive) dead();
			break;
		case 'q': // Quit
			quit();
			break;
		default: // Invalid character
	}
	input.focus();
	mainBuffer.setScrollPerc(100);
	screen.render();
	gameLoop();
}

function dead() {
	mainBuffer.pushLine(`Your process was killed.`);
	quit();
}

async function quit() {
	mainBuffer.setLabel('Disconnecting...');
	mainBuffer.pushLine('Disconnected. Ending process.');
	screen.render();
	await new Promise(resolve => setTimeout(resolve, 5000));
}

function battle(pchoice, mchoice, monster) {
	if (pchoice === 'attack') {
		let damage = player.attack();
		mainBuffer.pushLine(`You dealt ${damage} damage!`);
		if (mchoice === 'defend') {
			const defend = monster.defend();
			mainBuffer.pushLine(`${monster.name} blocked ${defend} damage!`);
			damage = damage - defend > 0 ? damage - defend : 0;
		} else {
			const mdamage = monster.attack();
			mainBuffer.pushLine(`${monster.name} dealt ${mdamage} damage`);
			player.damage(mdamage);
		}
		monster.damage(damage);
	} else if (mchoice === 'defend') {
		mainBuffer.pushLine(`You both defended, nothing happened..`);
	} else {
		const defend = player.defend();
		let damage = monster.attack();
		damage = damage - defend > 0 ? damage - defend : 0;
		mainBuffer.pushLine(
			`${monster.name} attacked, you ${
				damage > 0 ? 'took ' + damage + ' damage!' : 'blocked all damage!'
			}'`
		);
	}
	screen.render();
}

let monster = null;
let options = [];
function monsterAttack() {
	monster = new Monster();
	options = ['Attack', 'Defend', 'Flee'];
	mainBuffer.setLabel('Status: Rogue process attack');
	mainBuffer.pushLine('');
	options.forEach((v, i) =>
		mainBuffer.pushLine(`{cyan-fg}[${i + 1}]{/cyan-fg} ${v}`)
	);
	mainBuffer.pushLine('Make a choice: ');
	screen.render();
	input.once('submit', monsterLoop);
}

function monsterLoop(choice) {
	input.clearValue();
	choice = Number(choice) - 1;
	mainBuffer.pushLine(choice);
	screen.render();
	const mchoice = ['attack', 'defend'][Math.floor(Math.random() * 2)];
	switch (choice) {
		case 0: // Attack
		case 1: // Defend
			battle(options[choice].toLowerCase(), mchoice, monster);
			break;
		case 2: // Flee
			if (Math.random() < 0.5) {
				mainBuffer.pushLine(`Disconnected`);
				screen.render();
				gameLoop();
			} else {
				// Have monster attack too
				mainBuffer.pushLine(`Unable to disconnect`);
			}
			screen.render();
			break;
		default:
	}
	if (!monster.isAlive) {
		mainBuffer.pushLine(`Rogue process eliminated.`);
		const item = new Item();
		mainBuffer.pushLine(`Salvaged ${item} from remaining bits.`);
		player.addItem(item);
		mainBuffer.setScrollPerc(100);
		screen.render();
		gameLoop();
	}
	mainBuffer.pushLine('');
	options.forEach((v, i) =>
		mainBuffer.pushLine(`{cyan-fg}[${i + 1}]{/cyan-fg} ${v}`)
	);
	mainBuffer.setScrollPerc(100);
	input.focus();
	screen.render();
	input.once('submit', monsterLoop);
}

screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

main();
