import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import InicioScreen from './inicio/InicioScreen';
import Cadastro from "./Cadastro/CadastroScrenn";
import Login from "./login/login";
import Informacoes from "./informacoes/informacoesScreen"
import Produto from './produto/ProdutoScreen'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/'><InicioScreen/></Route>
        <Route path='/inicio'><InicioScreen/></Route> 
        <Route path='/Cadastro'><Cadastro/></Route> 
        <Route path='/login'><Login/></Route> 
        <Route path='/informacoes'><Informacoes/></Route>
        <Route path='/produto'><Produto/></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;