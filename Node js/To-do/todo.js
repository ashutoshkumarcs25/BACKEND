const fs = require("fs");
const path = require("path");

const TODO_FILE = path.join(__dirname, "todos.json");

// Read todos
function readTodos() {
  if (!fs.existsSync(TODO_FILE)) {
    return [];
  }
  const data = fs.readFileSync(TODO_FILE, "utf-8");
  return JSON.parse(data);
}
// Write todos
function writeTodos(todos) {
  fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
}

// Add todo
function addTodo(task) {
  const todos = readTodos();

  const newTodo = {
    id: Date.now(),
    task: task,
    done: false
  };

  todos.push(newTodo);
  writeTodos(todos);

  console.log("✅ Todo added:", task);
}

// List todos
function listTodos() {
  const todos = readTodos();

  if (todos.length === 0) {
    console.log("📭 No todos found!");
    return;
  }

  todos.forEach((todo, index) => {
    const status = todo.done ? "✅" : "❌";
    console.log(`${index + 1}. ${status} ${todo.task}`);
  });
}

// Mark todo as done

function markDone(id) {
  const todos = readTodos();

  const todo = todos.find(t => t.id === id);

  if (!todo) {
    console.log("❌ Todo not found");
    return;
  }

  todo.done = true;
  writeTodos(todos);

  console.log("🎉 Todo marked as done!");
}

//Delete todo

function deleteTodo(id) {
  const todos = readTodos();
  const updatedTodos = todos.filter(t => t.id !== id);

  if (todos.length === updatedTodos.length) {
    console.log("❌ Todo not found");
    return;
  }

  writeTodos(updatedTodos);
  console.log("🗑️ Todo deleted!");
}
module.exports = {
  addTodo,
  listTodos,
  markDone,
  deleteTodo
};