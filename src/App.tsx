import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [{ id: 1, name: "I want to swim first" }];
  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
};

export default App;
