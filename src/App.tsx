import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos([{ id: Math.random(), name: text }]);
  };
  return (
    <div className="App">
      <TodoList items={todos} />
      <NewTodo onAddTodo={todoAddHandler} />
    </div>
  );
};

export default App;
