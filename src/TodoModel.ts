import {Action, action, Thunk, thunk} from 'easy-peasy'
import {Todo} from './TodoList'
import {StoreModel} from './index'

export interface TodoModel {
  items: Todo[],
  add: Action<TodoModel, string>
  remove: Action<TodoModel, number>
  update: Action<TodoModel, Todo>
  thunkAdd: Thunk<TodoModel, string, void, StoreModel>
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
  }),
  thunkAdd: thunk(async (actions, payload, helpers) => {
    console.log('getState', helpers.getState())
    console.log('getStoreState', helpers.getStoreState())

    // setTimeout(() => {
    //   actions.add(payload)
    // }, 1000)

    const temp = await fetch("https://swapi.co/api/planets/4/")
    const res = await temp.json()
    console.log('res', res)
    actions.add(payload)
  })


}
