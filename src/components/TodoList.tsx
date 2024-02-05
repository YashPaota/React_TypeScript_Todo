import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
    todos:Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos , setTodos}:Props) => {
  return (
    <div className='todos'>
       {todos.map(t => (
        <SingleTodo todo={t} key={t.id} setTodos={setTodos} todos={todos} />
       ))}
    </div>
  )
}

export default TodoList;
