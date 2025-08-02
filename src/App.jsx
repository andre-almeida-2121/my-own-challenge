import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./style.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="todo-app">
      <h1>To-do App</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </main>
  );
}

export default App;
