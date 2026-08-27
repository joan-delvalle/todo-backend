function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <span
      style={{ textDecoration: todo.done ? "line-throgh" : "none",
      cursor: "pointer"}}
      onClick={() => onToggle(todo.id)}
      >
      {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem;