const cin = require('readline-sync');
const {Spinner} = require('clui');
const blessed = require('blessed');
const contrib = require('blessed-contrib');

const Player = require('./player');
const Item = require('./item');
const Monster = require('./monster');

let player;
const screen = blessed.screen();
const mainBuffer = blessed.box({
	top: 0,
	left: 0,
	width: '100%',
	height: '100%-1',
	scrollable: true,
	alwaysScroll: true,
	style: {fg: 'cyan'}
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
	const spinner = new Spinner('Connecting to the net...');
	spinner.start();
	await new Promise(resolve => setTimeout(resolve, 3000));
	spinner.stop();
	mainBuffer.pushLine('Connection established');
	screen.render();
	spinner.message('Checking user...');
	spinner.start();
	await new Promise(resolve => setTimeout(resolve, 5000));
	spinner.stop();
	mainBuffer.pushLine('Invalid credentials');
	screen.render();
	spinner.message('Checking for available account slots...');
	spinner.start();
	await new Promise(resolve => setTimeout(resolve, 2000));
	spinner.stop();
	mainBuffer.pushLine('Slots available');
	screen.render();
	player = new Player(cin.question('Enter username: '));
	spinner.message('Checking username availability...');
	spinner.start();
	await new Promise(resolve => setTimeout(resolve, 3000));
	spinner.stop();
	mainBuffer.pushLine('Username available');
	mainBuffer.pushLine('Loading...');
	// TODO gauge
	screen.render();
	mainBuffer.pushLine(`Welcome to the net ${player.name}`);
	screen.render();
	let playing = true;

	while (player.isAlive && playing) {
		const infoPane = blessed.box({
			left: '80%',
			top: 0,
			width: '20%',
			height: '100%-1',
			scrollable: false,
			border: 'line',
			style: {fg: 'cyan'}
		});
		const input = blessed.textarea({
			bottom: 0,
			left: 0,
			width: '100%',
			height: 1,
			keys: true,
			mouse: true,
			inputOnFocus: true,
			style: {fg: 'green'}
		});
		screen.append(infoPane);
		screen.append(input);
		mainBuffer.label('Status: Connected');
		screen.render();
		const choice = cin.question('What action to take (h for help)? ');
		switch (choice[0]) {
			case 'h': // Help
				mainBuffer.pushLine('[c]onnect to establish a new connection');
				mainBuffer.pushLine('\twatch out for rogue processes');
				mainBuffer.pushLine('[i]nventory to view program inventory');
				mainBuffer.pushLine('[p]roccess to view process info');
				mainBuffer.pushLine('[q]uit to quit');
				screen.render();
				break;
			case 'i': // Inventory
				player.printInventory(infoPane);
				screen.render();
				break;
			case 'p': // Prettyprint player info
				// Colored name
				// HP with clui gauge
				// offensive, if available
				// defensive, if available
				player.printInfo(infoPane);
				screen.render();
				break;
			case 'c': // Connect
				player.score++;
				if (Math.random() < 0.25) {
					// Gonna get attacked
					monsterAttack();
				}
				break;
			case 'q': // Quit
				playing = false;
				break;
			default: // Invalid character
		}
	}

	if (!player.isAlive) {
		mainBuffer.pushLine(`Your process was killed.`);
	}
	mainBuffer.label('Disconnecting...');
	// Clui spinner, 2 seconds
	mainBuffer.pushLine('Disconnected. Ending process.');
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
}
function monsterAttack() {
	const monster = new Monster();
	const options = ['Attack', 'Defend', 'Flee'];
	let fled = false;
	while (monster.isAlive && player.isAlive && !fled) {
		const choice = cin.keyInSelect(options, 'Make a choice: ');
		const mchoice = ['attack', 'defend'][Math.floor(Math.random() * 2)];
		switch (choice) {
			case 0: // Attack
			case 1: // Defend
				battle(options[choice].toLowerCase(), mchoice, monster);
				break;
			case 2: // Flee
				if (Math.random() < 0.5) {
					mainBuffer.pushLine(`Succeessfully fled!`);
					fled = true;
				} else {
					// Have monster attack too
					mainBuffer.pushLine(`Couldn't flee!`);
				}
				break;
			default:
		}
	}
	if (!monster.isAlive) {
		mainBuffer.pushLine(`Rogue process eliminated.`);
		const item = new Item();
		mainBuffer.pushLine(`Salvaged ${item} from remaining bits.`);
		player.addItem(item);
	}
}

screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

main();
