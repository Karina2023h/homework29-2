import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/actions";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="App">
      <h1 className="text-one">TODO App</h1>
      <div className="copt">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>Додати</button>
      </div>
      <div className="todo-list">
        {todos.length > 0 && (
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        )}
      </div>
      <footer>
        <p>Всього {todos.length}</p>
      </footer>
    </div>
  );
}

export default App;
