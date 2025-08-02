import { useState } from "react";

function TodoInput({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
function TodoInput({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoInput;
