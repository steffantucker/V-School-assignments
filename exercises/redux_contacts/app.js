const redux = require('redux');
const color = require('colors');

const state = {contacts: []};

function addContact(name, phone, email) {
	return {
		type: "ADD_CONTACT",
		contact: { name, phone, email}
	}
}

function reducer (prev = state, action) {
	switch (action.type) {
		case "ADD_CONTACT":
			return { contacts: [...prev.contacts, action.contact]}
	}
}

const store = redux.createStore(reducer)

store.subscribe(() => console.log(JSON.stringify(store.getState()).inverse))

store.dispatch(addContact('paul', '12345', 'paul@smith.com'));
store.dispatch(addContact('peter', '12345', 'peter@smith.com'));
store.dispatch(addContact('mary', '12345', 'mary@smith.com'));