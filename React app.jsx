import React, { useState } from "react";

function Navbar() {
  return (
    <nav style={{padding:"16px", background:"#222", color:"#fff"}}>
      <h2>React Demo App</h2>
    </nav>
  );
}

function Counter({ count, setCount }) {
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{marginLeft:"8px"}}>
        Decrement
      </button>
    </div>
  );
}

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <div style={{marginTop:"20px"}}>
      <h3>Todo List</h3>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <main style={{padding:"20px"}}>
        <h1>React App with Components & State Management</h1>

        <Counter count={count} setCount={setCount} />

        <TodoList />
      </main>
    </div>
  );
}
