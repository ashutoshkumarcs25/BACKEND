const {
  addTodo,
  listTodos,
  markDone,
  deleteTodo
} = require("./todo");

addTodo("Learn Node.js fs");
addTodo("Build mini backend");

listTodos();

// Copy ID from todos.json or console
markDone(1737263812);
deleteTodo(1737263812);

listTodos();
