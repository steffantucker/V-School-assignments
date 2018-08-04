const cin = require('readline-sync');
const Player = require('./player');
const Item = require('./item');
const Monster = require('./monster');

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
// Get clui
console.log('Connecting to the net...');
// clui spinner, 3 seconds
console.log('Connection established');
console.log('Checking user...');
// clui spinner, 5 seconds
console.log('Invalid credentials');
console.log('Checking for available account slots...');
// clui spinner, 2 seconds
console.log('Slots available');
const player = new Player(cin.question('Enter username: '));
console.log('Checking username availability...');
// clui spinner, 6 seconds
console.log('Username available');
console.log(`Welcome to the net ${player.name}`);
// clui loader over 10-15 seconds
let playing = true;

while (player.isAlive && playing) {
	console.log('Status: Connected');
	const choice = cin.question('What action to take (h for help)? ');
	console.clear();
	switch (choice[0]) {
		case 'h': // Help
			console.log('[c]onnect to establish a new connection');
			console.log('\twatch out for rogue processes');
			console.log('[i]nventory to view program inventory');
			console.log('[p]roccess to view process info');
			console.log('[q]uit to quit');
			break;
		case 'i': // Inventory
			player.printInventory();
			break;
		case 'p': // Prettyprint player info
			// Colored name
			// HP with clui gauge
			// offensive, if available
			// defensive, if available
			console.log(player);
			break;
		case 'w': // Walk
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
	console.log(`Your process was killed.`);
}
console.log('Disconnecting...');
// clui spinner, 2 seconds
console.log('Disconnected. Ending process.');

// Death message
function battle(pchoice, mchoice, monster) {
	if (pchoice === 'attack') {
		let damage = player.attack();
		console.log(`You dealt ${damage} damage!`);
		if (mchoice === 'defend') {
			const defend = monster.defend();
			console.log(`${monster.name} blocked ${defend} damage!`);
			damage = damage - defend > 0 ? damage - defend : 0;
		} else {
			const mdamage = monster.attack();
			console.log(`${monster.name} dealt ${mdamage} damage`);
			player.damage(mdamage);
		}
		monster.damage(damage);
	} else if (mchoice === 'defend') {
		console.log(`You both defended, nothing happened..`);
	} else {
		const defend = player.defend();
		let damage = monster.attack();
		damage = damage - defend > 0 ? damage - defend : 0;
		console.log(
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
					console.log(`Succeessfully fled!`);
					fled = true;
				} else {
					// Have monster attack too
					console.log(`Couldn't flee!`);
				}
				break;
			default:
		}
	}
	if (!monster.isAlive) {
		player.addItem(new Item());
	}
}
