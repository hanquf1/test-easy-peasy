import {Action, action} from 'easy-peasy'
import {Todo} from './TodoList'

export interface TodoModel {
  items: Todo[],
  add: Action<TodoModel, string>
  remove: Action<TodoModel, number>
  update: Action<TodoModel, Todo>
}

export const TodoM: TodoModel = {
  items: [],

  add: action((state, payload) => {
    const todo = state.items.length > 0
      ? {id: (state.items[state.items.length - 1].id + 1), todo: payload}
      : {id: 1, todo: payload}
    state.items.push(todo)
  }),
  remove: action((state, payload) => {
    const list = state.items.filter(item => item.id !== payload)
    state.items = list
  }),
  update: action((state, payload) => {
    state.items = state.items.map(item => (
        item.id === payload.id
          ? payload
          : item
      )
    )
  })
}
