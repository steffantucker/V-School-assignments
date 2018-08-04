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

function Player(name) {
	this.name = name;
	this.hp = {max: 20, current: 20};
	this.equipedAttack = null;
	this.equipedDefense = null;
	this.items = [];

	this.attack = function() {
		return Math.floor(Math.random() * 6 + 1) + this.equipedAttack
			? this.equipedAttack.baseValue
			: 0;
	};
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
}

Player.prototype = {
	get isAlive() {
		return this.hp.current > 0;
	}
};

module.exports = Player;
