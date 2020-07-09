import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/home/HomeContainer'
import Register from './components/register/Register'
import Login from './containers/login/LoginContainer'

const App = () => {
  return (
    <Switch>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
    </Switch>
  )
}

export default App
