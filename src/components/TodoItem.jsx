function TodoItem({ todo, onToggle, onDelete }) {
  const { id, text, completed } = todo;

  return (
    <li className={`todo-item ${completed ? "completed" : ""}`}>
      <span
        className="todo-text"
        onClick={() => onToggle(id)}
        title="Clique para marcar como concluída"
      >
        {text}
      </span>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
