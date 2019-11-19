import * as React from 'react'
import {Todo} from './TodoList'
import {useState} from 'react'

interface TodoItemProps {
  todo: Todo
  onDelete: (id: number) => void
  onUpdate: (id: number, todo: string) => void
}

const TodoItem: React.FC<TodoItemProps> = (props) => {

  const [isUpdateMode, setUpdateMode] = useState(false)
  const [todo, setTodo] = useState(props.todo.todo)

  const handleDelete = () => {
    props.onDelete(props.todo.id)
  }
  const handleUpdateMode = () => {
    setUpdateMode(!isUpdateMode)
  }
  const handleUpdate = () => {
    handleUpdateMode()
    props.onUpdate(props.todo.id, todo)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  return (
    <li>
      {
        isUpdateMode
          ? <input onChange={handleChange} value={todo}/>
          : `${props.todo.id}: ${props.todo.todo}`
      }
      <input type="button" onClick={handleDelete} value="삭제"/>

      {
        isUpdateMode
          ? <input type="button" onClick={handleUpdate} value="적용"/>
          : <input type="button" onClick={handleUpdateMode} value="수정"/>
      }
    </li>
  )
}

export default TodoItem

