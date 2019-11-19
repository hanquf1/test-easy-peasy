import React, {useState} from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TodoPage from './TodoPage'
import TodoEasyPage from './TodoEasyPage'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/easy">
          <TodoEasyPage/>
        </Route>
        <Route path="/todo">
          <TodoPage/>
        </Route>

      </Switch>
    </Router>
  )
}

export default App
