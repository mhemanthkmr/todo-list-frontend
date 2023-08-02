import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import "./App.css";

const API_BASE_URL = "http://localhost:5000/api/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

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
    <Container className="mt-5">
      <h1 className="mb-4">Todo List</h1>
      <Form className="mb-3">
        <Row>
          <Col xs={9}>
            <Form.Control
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              placeholder="Enter a new todo"
            />
          </Col>
          <Col xs={3}>
            <Button
              type="submit"
              onClick={addTodo}
              variant="primary"
              block
              disabled={!newTodoText.trim()}
            >
              Add Todo
            </Button>
          </Col>
        </Row>
      </Form>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item
            key={todo._id}
            className="d-flex justify-content-between align-items-center"
          >
            {todo.text}
            <Button
              onClick={() => deleteTodo(todo._id)}
              variant="danger"
              size="sm"
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default App;
