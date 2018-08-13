// https://api.vschool.io/<name>/todo[/_id]
// axios.get(url).then(function(response)).catch(function(error))

let user = {};
$('.ui.checkbox').checkbox();

function User(name) {
  this.name = name;
  this.apiString = `https://api.vschool.io/${this.name}/todo`;
  this.todos = [];

  this.deleteTodos = function(id) {
    axios
      .delete(`${this.apiString}/${id}`)
      .then(re => this.getTodos())
      .catch(err => console.error(err));
    return true;
  };

  this.updateTodo = function(id, obj) {
    axios
      .put(`${this.apiString}/${id}`, obj)
      .then(re => {
        this.todos[this.todos.findIndex(e => e._id === re.data._id)] = re.data;
        this.drawList();
      })
      .catch(err => console.error(err));
  };

  this.addTodos = function(obj) {
    axios
      .post(this.apiString, obj)
      .then(re => {
        this.todos.push(re.data);
        this.drawList();
      })
      .catch(err => console.error(err));
  };

  this.getTodos = function() {
    axios
      .get(this.apiString)
      .then(re => {
        this.todos = re.data;
        this.drawList();
      })
      .catch(err => console.error(err));
  };

  this.getTodos();

  this.drawList = function() {
    const todolist = document.getElementById("todoList");
    todolist.innerText = "";
    this.todos.forEach((element, i) => {
      const item = document.createElement("div");
      item.id = element._id;
      item.classList.add("card");
      item.innerHTML = `<div class="image">
        <img src="${
          element.imgUrl
            ? element.imgUrl
            : "https://media.giphy.com/media/26xBIygOcC3bAWg3S/giphy.gif"
        }">
        </div>
        <div class="content">
          <div class="header">${element.title}</div>
          <div class="meta">
            <span>${element.price ? `${element.price} units` : ""}</span>
          </div>
          <div class="description">${element.description}</div>
        </div>
        <div class="extra content">
          <div class='ui toggle checkbox' id='${element._id}checkbox'>
            <input id='${element._id}checkbox' type='checkbox'><label>Completed</label>
          </div>
          <div class='ui right floated icon buttons'>
            <button class='ui button' onclick='editTodo(${i})'><i class='edit icon'></i></button>
            <button class='negative ui button' onclick='deleteTodo("${
              element._id
            }")'><i class='delete icon'></i></button>
          </div>
        </div>`;
      todolist.appendChild(item);
      if(element.completed)
        $(`#${element._id}checkbox`).checkbox('check');
      $(`#${element._id}checkbox`).checkbox({
        onChange: function() {
          checkboxChange(i);
        }
      });
    });
  };
}

function submitUsername(e) {
  e.preventDefault();
  if (document.getElementById("username").value !== "") {
    user = new User(document.getElementById("username").value);
    document.getElementById("logindiv").classList.add("hidden");
    document.getElementById("inputArea").classList.remove("hidden");
    const button = document.createElement("button");
    button.id = "addButton";
    button.classList.add("massive", "circular", "ui", "icon", "button");
    button.innerHTML = `<i class='add icon'></i>`;
    button.addEventListener("click", addNew);
    document.body.appendChild(button);
    const header = document.getElementById("header");
    const logOut = document.createElement("button");
    logOut.classList.add("ui", "floating", "right", "button");
    logOut.innerText = "Logout";
    logOut.onclick = logout;
    header.appendChild(logOut);
    const refresh = document.createElement("button");
    refresh.classList.add("ui", "floating", "right", "button");
    refresh.innerText = "Refresh";
    refresh.onclick = function() {user.getTodos()};
    header.appendChild(refresh);
  } else {
    document.getElementById("login").classList.add("error");
  }
}

function logout() {
  user = {};
  document.getElementById("logindiv").classList.remove("hidden");
  document.getElementById("inputArea").classList.add("hidden");
  document.getElementById("username").value = "";
  document.getElementById("header").innerHTML = "";
  document.getElementById("todoList").innerHTML = "";
  const button = document.getElementById('addButton');
  button.parentNode.removeChild(button);
}

function deleteTodo(id) {
  const modal = document.getElementById("modal");
  modal.innerHTML = `<div class='header'>Delete TODO</div>
	<div class='content'>Delete this TODO? It can't be undone.</div>
	<div class='actions'><div class='ui negative button'>NO</div><div class='ui positive button'>Yes</div></div>`;
  $(".mini.modal")
    .modal({
      onDeny: function() {
        return true;
      },
      onApprove: function() {
        user.deleteTodos(id);
      }
    })
    .modal("show");
}

function editTodo(i) {
  document.getElementById("newTitle").value = user.todos[i].title;
  document.getElementById("newDescription").value = user.todos[i].description;
  document.getElementById("newPrice").value = user.todos[i].price;
  document.getElementById("newImgUrl").value = user.todos[i].imgUrl;
  $("#newModal")
    .modal({
      onHide: function() {
        const inputs = document.getElementsByClassName("newInput");
        for (let i = 0; i < inputs.length; i++) inputs[i].value = "";
        return true;
      },
      onDeny: function() {
        const inputs = document.getElementsByClassName("newInput");
        for (let i = 0; i < inputs.length; i++) inputs[i].value = "";
        return true;
      },
      onApprove: function() {
        const obj = {};
        if (document.getElementById("newTitle").value !== user.todos[i].title) {
          obj["title"] = document.getElementById("newTitle").value;
        }
        if (
          document.getElementById("newDescription").value !==
          user.todos[i].description
        ) {
          obj["description"] = document.getElementById("newDescription").value;
        }
        if (document.getElementById("newPrice").value !== user.todos[i].price) {
          obj["price"] = document.getElementById("newPrice").value;
        }
        if (
          document.getElementById("newImgUrl").value !== user.todos[i].imgUrl
        ) {
          obj["imgUrl"] = document.getElementById("newImgUrl").value;
        }
        const inputs = document.getElementsByClassName("newInput");
        for (let i = 0; i < inputs.length; i++) inputs[i].value = "";
        user.updateTodo(user.todos[i]._id, obj);
        return true;
      }
    })
    .modal("show");
}

function addNew(event) {
  $("#newModal")
    .modal({
      onHide: function() {
        const inputs = document.getElementsByClassName("newInput");
        for (let i = 0; i < inputs.length; i++) inputs[i].value = "";
        return true;
      },
      onDeny: function() {
        const inputs = document.getElementsByClassName("newInput");
        for (let i = 0; i < inputs.length; i++) inputs[i].value = "";
        return true;
      },
      onApprove: function() {
        if (document.getElementById("newTitle").value === "") {
          document.getElementById("newTitle").classList.add("error");
          return false;
        }
        if (document.getElementById("newDescription").value === "") {
          document.getElementById("newDescription").classList.add("error");
          return false;
        }
        const obj = {
          title: document.getElementById("newTitle").value,
          description: document.getElementById("newTitle").value
        };
        if (document.getElementById("newPrice").value !== "")
          obj["price"] = document.getElementById("newPrice").value;
        if (document.getElementById("newImgUrl").value !== "")
          obj["imgUrl"] = document.getElementById("newImgUrl").value;
        const inputs = document.getElementsByClassName("newInput");
        for (let i = 0; i < inputs.length; i++) inputs[i].value = "";
        user.addTodos(obj);
      }
    })
    .modal("show");
}

function checkboxChange(i) {
  axios.put(`${user.apiString}/${user.todos[i]._id}`, {completed: !user.todos[i].completed}).then(re => user.todos[i].completed = !user.todos[i].completed).catch(err => {console.error(err)});
}