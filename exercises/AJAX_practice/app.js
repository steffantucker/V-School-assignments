const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.vschool.io:6543/pokemon.json', true);
xhr.send();
xhr.onreadystatechange = function() {
	if(this.readyState == 4 && this.status === 200) {
		console.dir(JSON.parse(this.responseText));
		parsePokemon(JSON.parse(this.responseText).objects[0].pokemon);
	}
}

function parsePokemon(pokemon) {
	const list = document.createElement('ul');
	pokemon.sort((a, b) => a.name > b.name).forEach(v => {
			const num = v.resource_uri.slice(v.resource_uri.lastIndexOf('/', v.resource_uri.length - 2) + 1, v.resource_uri.length - 1);
			const p = document.createElement('li');
			p.innerText = v.name;
			const img = document.createElement('img');
			img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`
			p.appendChild(img);
			list.appendChild(p);
			console.log(num);
	});
	document.body.appendChild(list);
}

// Sprite URL: pokeapi.co/ap/v2/pokemon/{num} .sprites.front_default