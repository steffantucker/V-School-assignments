// https://api.vschool.io/<name>/todo[/_id]
// axios.get(url).then(function(response)).catch(function(error))

let user = {};

function User(name) {
	this.name = name;
	this.apiString = `https://api.vschool.io/${this.name}/todo`;

	this.getTodos = function() {
		axios
			.get(this.apiString)
			.then(re => {this.todos = [].concat(re.data); this.drawList();})
			.catch(err => console.log(err));
	};
	this.todos = this.getTodos();
	
	this.drawList = function() {
		const todolist = document.getElementById('todoList');
		todolist.innerText = '';
		this.todos.forEach(element => {
			const item = document.createElement('div');
			item.id = element._id;
			item.classList.add('card');
			item.innerHTML = `${element.imgUrl ? `<div class="image">
      <img src="${element.imgUrl}">
    </div>` : ''}
    <div class="content">
      <div class="header">${element.title}</div>
      <div class="meta">
        <span>${element.price ? element.price : ''}</span>
      </div>
      <div class="description">${element.description}</div>
    </div>
		<div class="extra content">
			<div class='ui toggle checkbox'>
				<label><input type='checkbox' ${element.completed ? 'checked' : ''}>Completed</label>
			</div>
		</div>`
			todolist.appendChild(item);
		});
	}
}

function submitUsername(e) {
	e.preventDefault();
	user = new User(document.user.username.value);
	document.user.className = 'hidden';
	document.todo.className = '';
}
