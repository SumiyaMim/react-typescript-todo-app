import React, { useState } from 'react'
import "./index.css"
import Todos from './components/Todos'
import { AddTodo } from './components/AddTodo'
import { TodoType } from './types'

const todoData = [
  {
    id: "1",
    title: "todo title 1"
  },
  {
    id: "2",
    title: "todo title 2"
  },
  {
    id: "3",
    title: "todo title 3"
  },
  {
    id: "4",
    title: "todo title 4"
  },
  {
    id: "5",
    title: "todo title 5"
  },
  {
    id: "6",
    title: "todo title 6"
  }
]

const App = () => {

  const [todos, setTodos] = useState(todoData)

  const handleDelete = (id: string) => {
    const filterData = todos.filter((todo) => todo.id !== id)
    setTodos(filterData)
  }

  const handleAddTodo = (newTodo: TodoType) => {
    setTodos((prevState) => [...prevState, newTodo])
  }

  return (
    <div>
      <h1>TODO APP</h1>
      <AddTodo handleAddTodo={handleAddTodo}/>
      <Todos todos={todos} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
