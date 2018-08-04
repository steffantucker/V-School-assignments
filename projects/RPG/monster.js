/**
 * Monster stats:
 * 	name						random, from list
 * 	hp							random in range
 * 	equipedAttack		item equiped for attack, random from list
 * 	equipedDefense	item equiped for defense, random from list
 *
 * Methods:
 * 	attack					returns amount of damage dealt
 * 	defend					returns amount of damage not taken
 *
 * TODO: make 3 enemy classes, with a range of health and attack power
 */

function Monster() {
	const points = Math.floor(Math.random() * 20 + 5);
	this.hp = {current: points, max: points};
	this.name = 'big baddie';

	this.attack = function() {
		return Math.floor(Math.random() * 6 + 1);
	};
	this.defend = function() {
		return Math.floor(Math.random() * 6 + 1);
	};
	this.damage = function(n) {
		this.hp.current -= n;
	};
}

Monster.prototype = {
	get isAlive() {
		return this.hp.current > 0;
	}
};

module.exports = Monster;
