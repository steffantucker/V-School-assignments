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

const player = new Player(cin.question('What is your name? '));

while (player.isAlive) {
	const choice = cin.question('What action to take (h for help)? ');
	switch (choice[0]) {
		case 'h': // Help
			break;
		case 'i': // Inventory
			break;
		case 'p': // Prettyprint player info
			break;
		case 'w': // Walk
			if (Math.random() < 0.25) {
				// Gonna get attacked
				monsterAttack();
			}
			break;
		case 'q': // Quit
			break;
		default: // Invalid character
	}
}

function monsterAttack() {
	const monster = new Monster();
	const options = ['Attack', 'Defend', 'Flee'];
	let fled = false;
	let damage = 0;
	while (monster.isAlive && player.isAlive && !fled) {
		const choice = cin.keyInSelect(options, 'Make a choice: ');
		switch (choice) {
			case 0: // Attack
				damage = player.attack();
				console.log(`Attacked for ${damage} damage!`);
				monster.damage(damage);
				break;
			case 1: // Defend
				break;
			case 2: // Flee
				if (Math.random() < 0.5) {
					console.log(`Succeessfully fled!`);
					fled = true;
				} else {
					console.log(`Couldn't flee!`);
				}
				break;
			default:
		}
		if (monster.isAlive && !fled) {
			if (Math.random() < 0.5) {
				// Attacked!
				damage = monster.attack();
				player.damage(damage);
				console.log(`You took ${damage} damage!`);
			} else {
				// Defended!
				// TODO: figure this out
			}
		}
	}
}
