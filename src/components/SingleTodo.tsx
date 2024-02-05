import React from "react";
import { Todo } from "../model";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";

import { useState } from "react";
import "./styles.css";
interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}
const SingleTodo = ({ todo, setTodos, todos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e:React.FormEvent,id:number) => {
    e.preventDefault();
    setTodos(
        todos.map((todo) => (todo.id ===id ? {...todo,todo:editTodo} : todo))
    );
    setEdit(false);

  }
  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e,todo.id)}>
        
     { edit ? (
            <input value={todo.todo} onChange={(e) => setEditTodo(e.target.value)} />
        ) : todo.isDone ? (
                <s className="todos__single__text">{todo.todo}</s>
              ) : (
                <span className="todos__single__text">{todo.todo}</span>
              )
     }

      

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <MdEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
