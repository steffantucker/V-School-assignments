/**
 * Player stats:
 * 	name						players name
 * 	hp							health points
 * 	equipedAttack		item equiped for attack
 * 	equipedDefend		item equiped for defense
 * 	items						array of items in inventory, does not included equiped items
 * 	isAlive					returns hp.current > 0
 *
 * Methods:
 *  attack					attacks, returns damage dealt
 * 	defend					defends, returns amount of damage blocked
 * 	damage					damages player
 * 	heal						heals player
 * 	equip						equips an item (by id?)
 * 	addItem					adds item to inventory
 */
const Clui = require('clui');

function Player(name) {
	this.name = name;
	this.hp = {max: 20, current: 20};
	this.equipedAttack = null;
	this.equipedDefense = null;
	this.items = [];
	this.score = 0;

	this.attack = function() {
		const damage = Math.floor(Math.random() * 6) + 1; // + this.equipedAttack
		// ? 0
		// : this.equipedAttack.baseValue;
		console.log(damage);
		return damage;
	};
	this.defend = function() {};
	this.damage = function(n) {
		this.hp.current -=
			this.equipedDefense === null
				? n
				: n > this.equipedDefense.baseValue
					? n - this.equipedDefense.basevalue
					: 0;
	};
	this.heal = function(n) {
		this.hp.current += n;
		if (this.hp.current > this.hp.max) this.hp.current = this.hp.max;
	};
	this.equip = function(id) {
		if (this.items.find(v => v.id === id) !== 'undefined') {
			const item = this.items.findIndex(v => v.id === id);
			if (item.type === 'defense')
				this.equipedDefense = this.items.splice(item, 1)[0];
			else this.equipedAttack = this.items.splice(item, 1)[0];
		}
	};
	this.addItem = function(item) {
		this.items.push(item);
	};
	this.printInventory = function(buffer) {
		buffer.log('Salvaged programs:');
		for (let i = 0; i < this.items.length; i++) {
			buffer.log(`${this.items[i].id}: ${this.items[i].name}`);
		}
	};
	this.printInfo = function(buffer) {
		buffer.log(this.name);
		buffer.log(
			Clui.Gauge(this.hp.current, this.hp.max, 20, this.hp.max * 0.2, 'Memory')
		);
		buffer.log(`Connections: ${this.points}`);
	};
}

Player.prototype = {
	get isAlive() {
		return this.hp.current > 0;
	}
};

module.exports = Player;
