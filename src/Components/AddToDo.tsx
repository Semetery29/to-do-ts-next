"use client";
import { useTodos } from "@/store/todos";
import { FormEvent, useState } from "react";

const AddToDo = () => {
  const [todo, setTodo] = useState("");

  const {handleAddTodo} = useTodos();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your task in advance"
        name=""
        id=""
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default AddToDo;
