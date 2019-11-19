import * as React from 'react'
import TodoItem from './TodoItem'
import {Todo} from './TodoList'
import {useStoreActions} from './hooks'

interface Props {
  list: Todo[]
}

const TodoEasyList: React.FC<Props> = (props) => {

  const removeTodo = useStoreActions(actions => actions.todo.remove)
  const updateTodo = useStoreActions(actions => actions.todo.update)


  const onUpdate = (id: number, todo: string) => {
    updateTodo({id, todo})

  }
  const onDelete = (id: number) => {
    removeTodo(id)
  }


  return (
    <div>
      {
        props.list.map((item,idx) => <TodoItem key={idx} onUpdate={onUpdate} onDelete={onDelete} todo={item}/>)
      }

    </div>
  )
}

export default TodoEasyList
