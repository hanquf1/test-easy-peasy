import * as React from 'react'
import {useState} from 'react'

interface TodoForm {
  onCreate: (todo: string) => void
}

const TodoForm: React.FC<TodoForm> = (props) => {

  const [todo, setTodo] = useState('')


  const handleChange = (e) => {
    const value = e.target.value
    console.log('value', value)
    setTodo(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onCreate(todo)
    setTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="할일" onChange={handleChange} value={todo}/>
      <input type="submit" value="등록"/>
    </form>
  )

}


export default TodoForm
