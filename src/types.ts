export type TodoType = {
    id: string;
    title: string;
}

export type TodoProps = {
    todo: TodoType
    handleDelete: Function
}

export type TodosProps = {
    todos: TodoType[]
    handleDelete: Function
}

export type AddTodoProps = {
    handleAddTodo: Function
}