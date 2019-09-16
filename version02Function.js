var todos = ['item1', 'item2',  'item3'];

// This function should display todos
// logged out todo list
function displayTodos(){
  console.log('My todos:', todos);
}

// this function should add todos
// takes a parameter. addTodo('newTodo')
function addTodo(todo){
  todos.push(todo);
  displayTodos();
}

// This function should change todo
// that take two parameters item you want to change
// and the updated value
function changeTodo(position, newValue){
// todos[0] = 'some new value';
todos[position] = newValue;
displayTodos();
}

// This function is to delete todo
function deleteTodo(position){
  todos.splice(position, 1);
  displayTodos();
}



changeTodo(0, 'changed');