import React from "react";

type propsType = {
  items: {
    id: number;
    name: string;
  }[];
};

const TodoList: React.FC<propsType> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
};

export default TodoList;
