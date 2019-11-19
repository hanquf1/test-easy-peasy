import * as React from 'react'
import {useState} from 'react'
import TodoList, {Todo} from './TodoList'
import {Link} from 'react-router-dom'

const TodoPage: React.FC = () => {
  const hanquf = true

  const [cnt, setCnt] = useState(0)


  //arrow function
  const printName = (name: string) => {
    // console.log(`name: ${name}`)
    // console.log('name2:' + name)
  }

  //익명함수
  const printName2 = function (name: string) {
    // console.log(`name 익: ${name}`)
  }

  //함수 선언
  function printName3(name: string) {
    // console.log(`name 함수 선언식: ${name}`)
  }

  const list = [1, 2, 3, 4, 5]

  const nList = list.map((item, idx) => {
    // console.log(item)
    return {'item': item, 'idx': idx}
  })

  // console.log('nList', nList)

  const fList = list.filter((item) => item > 3)

  // console.log('fList', fList)


  printName('hanquf')
  printName2('hanquf22222ㄹㅇㄹ222222')
  printName3('그냥 함수')

  const countTodo = (cnt) => {
    setCnt(cnt)
  }

  const todoList = [
    {id: 1, todo: 'haha'},
    {id: 2, todo: 'haha'},
    {id: 3, todo: 'haha'},
    {id: 4, todo: 'haha'},
  ] as Todo[]

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/easy">easy</Link>
        <input type={'button'} value={22}/>
        <input type='button' value='33' onClick={() => console.log('fffff')}/>
        {
          hanquf
            ? '트루다'
            : '펄스다'
        }
        <br/>
        {cnt} App.tsx
        <br/>
        =========================
        <TodoList list={[]} name={'hanquf'} cntTodo={countTodo}/>

      </header>
    </div>
  )
}

export default TodoPage
