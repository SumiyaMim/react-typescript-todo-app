import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AddTodoProps } from '../types'

export const AddTodo = (props: AddTodoProps) => {

    const [title, setTitle] = useState("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()  // Stop by default refreshing
        const newTodo = {id: new Date().getTime().toString(), title}
        props.handleAddTodo(newTodo)
        setTitle("") // reset
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form_input'>
                <label htmlFor='title'>Title: </label>
                <input type='text' name='title' value={title} onChange={handleChange} required autoFocus/>
            </div><br></br>
            <button type='submit'>ADD</button>
        </form>
    )
}