import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const todos = [{ id: 1, name: "I want to swim first" }];

  const todoAddHandler = (text: string) => {
    console.log(text);
  };
  return (
    <div className="App">
      <TodoList items={todos} />
      <NewTodo onAddTodo={todoAddHandler} />
    </div>
  );
};

export default App;
