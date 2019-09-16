var todos = ['item1', 'item2',  'item3'];

function displayTodos(){
  console.log('My todos:', todos);
}

function addTodo(todo){
  todos.push(todo);
  displayTodos();
}

function changeTodo(position, newValue){
// todos[0] = 'some new value';
todos[position] = newValue;
}

function deleteTodo(position){
  todos.splice(position, 1);
  displayTodos();
}



changeTodo(0, 'changed');