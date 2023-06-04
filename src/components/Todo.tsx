import React from 'react'
import { TodoProps } from '../types';

const Todo = (props: TodoProps) => {

    // destructuring
    const { id, title } = props.todo

    const handleDeleteTodo = (id: string) => {
        props.handleDelete(id)
    }

  return (
    <article className='todo'>
        <h3>{id}</h3>
        <p>{title}</p>
        <button onClick={()=>{handleDeleteTodo(id)}}>Delete</button>
    </article>
  )
}

export default Todo
