import * as React from 'react'
import TodoItem from './TodoItem'
import {useEffect, useState} from 'react'
import TodoForm from './TodoForm'

interface Props {
  name?: string
  list: Todo[]
  cntTodo?: (cnt:number) => void
}

export interface Todo {
  id: number,
  todo: string
}

const TodoList: React.FC<Props> = (props) => {

  const [list, setList] = useState(props.list)
  const [count, setCount] = useState(0)
  const [fRes, setfRes] = useState({})


  useEffect(() => {

    fetch("https://swapi.co/api/planets/4/")
      .then(res => res.json())
      .then(res => {

        setfRes(res)
        console.log(res)
      })
  },[])

  useEffect(() => {
    // props.cntTodo(list.length)
  }, [list])


  const addTodo = (todo) => {
    const newList = list.concat({id: list.length + 1, todo})
    setList(newList)
  }

  const deleteTodo = (id) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  const updateTodo = (id, todo) => {
    const newList = list.map(item =>
      item.id === id
        ? {id, todo}
        : item
    )
    setList(newList)
  }

  const increaseCount = () => {
    window.setTimeout(() => setCount(count => count + 1), 2000)
  }

  return (
    <div>
      <input type='button' onClick={increaseCount} value='count'/>
      {count}
      <br/>
      ================
      <br/>
      <TodoForm onCreate={addTodo}/>
      <ul>
        {list.map((item, idx) => <TodoItem key={idx} todo={item} onDelete={deleteTodo} onUpdate={updateTodo}/>)}
      </ul>
    </div>
  )

}

export default TodoList

