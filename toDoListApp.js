// It should store the todos array on an object
// It should have a display Todos method
// It should have an addTodo method
// It should have a changeTodo method
// It should have a deleteTodo method

// todoList.addTodo should add objects
// todoList.changeTodo should change the todoText property
// todoList.toggleCompleted should change the completed property

var todoList = {
	todos: [],
	displayTodos: function() {
		console.log('My Todos: ', this.todos);
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(position, newValue) {
		this.todos[position] = newValue;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	}
};



// It should have a function to display todos
function displayTodos() {
	console.log('My Todos: ', todos);
}

// It should have a function to add todos
function addTodo(task) {
	todos.push(task);
	displayTodos();
}

// It should have a function to change todos
function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

// It should have a function to delete todos
function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}
