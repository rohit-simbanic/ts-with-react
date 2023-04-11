import React from "react";

type propsType = {
  items: {
    id: number;
    name: string;
  }[];
};

const TodoList: React.FC<propsType> = (props) => {
  console.log(props);
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
};

export default TodoList;
