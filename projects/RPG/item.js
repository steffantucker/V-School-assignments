/**
 * Item properties:
 * 	name				random?
 * 	type				defense or attack
 * 	baseValue		base attack or defense value
 * 	id					item id
 */

const Item = function() {
	let id = 0;

	return function() {
		this.id = id++;
		this.type = Math.random() < 0.5 ? 'defense' : 'attack';
		this.baseValue = Math.floor(Math.random() * 10 + 1);
	};
};

module.exports = Item;
