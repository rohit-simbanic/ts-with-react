import React, { useRef } from "react";
interface newTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<newTodoProps> = (props) => {
  //   console.log(props);
  const textInput = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInput.current!.value;
    textInput.current!.value = "";
    // console.log(enteredText);
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="inputNam">Put Your Text:</label>
        <input type="text" name="" id="inputNam" ref={textInput} />
      </div>
      <button type="submit">Add new Todo</button>
    </form>
  );
};

export default NewTodo;
