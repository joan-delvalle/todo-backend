import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Stats from "./pages/Stats";

const startingTodos = [ 
{ id: 1, text: "Learn JSX", done: false }, 
{ id: 2, text: "Understand props", done: false }, 
{ id: 3, text: "Build a todo list", done: true }, 
]; 

function App() {
  const [todos, setTodos] = useState(() => { 
  const saved = localStorage.getItem("todos"); 
  return saved ? JSON.parse(saved) : startingTodos; 
  });

  useEffect(() => { 
  localStorage.setItem("todos", JSON.stringify(todos)); 
  }, [todos]); 

  const [filter, setFilter] = useState("all");

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  function handleAddTodo(text) {
    const newTodo = { id: Date.now(), text, done: false};
    setTodos([...todos, newTodo]);
  }

  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
    );
  }

  function handleDelete(id) {
    setTodos (todos.filter((todo) => todo.id !== id));
  }

  return (
   <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Home
            todos={visibleTodos}
            filter={filter} 
            setFilter={setFilter}
            onAdd={handleAddTodo}
            onToggle={handleToggle}
            onDelete={handleDelete}
            />
          }
        />
        <Route path="/stats" element={<Stats todos={todos} />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App;
