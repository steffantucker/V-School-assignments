const dndGroup = {
	DM: 'Nick',
	players: ['Jaycen', 'Devun', 'Amy', 'Cierra'],
	characters: [{
		name: 'Head Repairman',
		class: 'Arcanist',
		gender: 'n/a',
		race: 'construct',
		weapons: [{
			name: 'alchemical bag',
			properties: 'pull vials out and throw',
			damage: '2d6'
		},
		{
			name: 'crossbow',
			properties: 'fires bolts',
			damage: '1d4'
		}],
		AC: 18
	},
	{
		name: 'Morgana',
		class: 'Sorcerer',
		gender: 'female',
		race: 'half-elf',
		weapons: [{
			name: 'dagger',
			properties: 'stabby stabby',
			damage: '1d4'
		}],
		AC: 14
	}],
	meetTime: 'Saturday 2pm',
	meetLocations: [{
		name: 'Nick\'s house',
		street: '123 fake st',
		city: 'somewhere',
		state: 'Fincyra'
	}, {
		name: 'the bar',
		street: '420 state st',
		city: 'somewhere',
		state: 'Fincyra'
	}, {
		name: 'game store',
		street: '333 games loop',
		city: 'nowhere',
		state: 'Fincyra'
	}],
	roll(sides) {
		console.log((Math.floor(Math.random() * sides) + 1));
	}
};

dndGroup.meetLocations[2].suite = 200;
dndGroup.meetLocations[2].closeTime = 10;

dndGroup.players.push('Cierra');
dndGroup.players.push('Natanatan');

console.log(dndGroup);
