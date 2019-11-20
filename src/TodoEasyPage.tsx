import * as React from 'react'
import {Link} from 'react-router-dom'
import TodoEasyList from './TodoEasyList'
import {useStoreActions, useStoreState} from './hooks'
import {useEffect, useState} from 'react'

const TodoEasyPage: React.FC = () => {
  const todos = useStoreState(state => state.todo.items)
  // const add = useStoreActions(actions => actions.todo.add)
  const add = useStoreActions(actions => actions.todo.thunkAdd)

  const [todo, setTodo] = useState('')

  useEffect(() => {
    document.title = 'haha'

    return () => {
      document.title = 'end'
    }
  })

  console.log('todos', todos)

  const handleClick = () => {
    const a = add(todo)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  return (
    <div>
      <Link to="/todo">todo</Link>
      <br/>

      <input onChange={handleChange} value={todo}/>
      <input type="button" onClick={handleClick} value="+"/>


      <TodoEasyList list={todos} />


    </div>
  )
}

export default TodoEasyPage
