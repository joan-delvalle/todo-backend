import TodoList from "../components/TodoList";
import AddTodoForm from "../components/AddTodoForm";

function Home({
  todos,
  onAddTodoForm,
  handleToggle,
  handleDelete,
  filter,
  setFilter,
}) {
  return (
  <div className="app">
      <h1>My Todo App</h1> 
      <AddTodoForm onAdd={onAddTodoForm}/>
      <div className="filters"> 
        <button onClick={() => setFilter("all")}>All</button> 
        <button onClick={() => setFilter("active")}>Active</button> 
        <button onClick={() => setFilter("completed")}>Completed</button> 
      </div> 
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete}/> 
  </div>
  );
}

export default Home;

