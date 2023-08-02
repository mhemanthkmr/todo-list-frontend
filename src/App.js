import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/todos"; // Replace with your backend API URL

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

  // Fetch all todos from the backend
  useEffect(() => {
    axios
      .get(API_BASE_URL)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  // Add a new todo
  const addTodo = () => {
    if (!newTodoText.trim()) return;

    axios
      .post(API_BASE_URL, { text: newTodoText })
      .then((response) => {
        setTodos([...todos, response.data]);
        setNewTodoText("");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };

  // Delete a todo
  const deleteTodo = (id) => {
    axios
      .delete(`${API_BASE_URL}/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
      });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
