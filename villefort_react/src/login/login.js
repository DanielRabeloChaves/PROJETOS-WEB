import React from "react";
import {useHistory} from 'react-router-dom'
import './login.css'
import Header from "../inicio/Header";
import Categorias from '../inicio/Categorias'
import { AiFillHome } from "react-icons/ai";
import Logo from '../inicio/images/logo.png'


export default () => {
    const history = useHistory()
    return(
        <>
            <Header/>
            <Categorias/>
            <div className="barra"><AiFillHome onClick={() => history.push('/')} id="CadastroHome"/><p>Login</p></div>
            <div className="LoginAll">
                <div className="Login">
                    <img id="logo" src={Logo} alt="Villefort"/>
                    <input id="SearchLogin" type="email" size="50"  placeholder="Digite seu e-mail ou CPF"/>
                    <input id="SearchLogin" type="password" size="50"  placeholder="Digite sua senha"/>
                    <a id="RecuperarSenha" href="#">Esqueceu sua senha? Clique aqui.</a>
                    <button id="buttonLoginPopUp">Entrar</button>
                    <button id="buttonLoginPopUp" onClick={() => history.push('./Cadastro')}>Criar Conta</button>  
                </div>          
            </div>
        </>
    )
}