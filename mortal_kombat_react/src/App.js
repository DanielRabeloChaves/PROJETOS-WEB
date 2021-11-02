import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import InicioScreen from './inicio/InicioScreen'


function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/'><InicioScreen/></Route>
        <Route path='/inicio'><InicioScreen/></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
