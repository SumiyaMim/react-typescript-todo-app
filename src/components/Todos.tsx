import React from 'react'
import Todo from './Todo';
import { TodosProps } from '../types';

const Todos = (props: TodosProps) => {
  return (
    <section className='todos'>
      {props.todos.map(todo => <Todo key={todo.id} todo={todo} handleDelete={props.handleDelete}/>)}
    </section>
  )
}

export default Todos
