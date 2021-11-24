import React, {useState} from "react"
import './Header.css'
import './ModalLogin.css'

import { FiLogIn } from "react-icons/fi";
import { FaRegAddressBook } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

import {useHistory} from 'react-router-dom'

import Logo from './images/logo.png'
import Navbar from './menu/Navbar' 

export default () => {

    const history = useHistory()

    const [show, setShow] = useState ( false );
    const [search, setSearch] = useState ( false );

    return(
        <>
            <div id="ModalLogin" style = {{  display:  show ? " block " : " none "}}>
                <div className="ExitLogin">
                    <div className="exit" onClick = {() => setShow ((s) =>! s)}></div>
                    <div className="LoginPopUp">
                        <div className="exit" onClick = {() => setShow ((s) =>! s)}></div>
                        <div className="login">
                            <AiOutlineCloseCircle className="FecharLogin" size={25} onClick = {() => setShow ((s) =>! s)}/>
                            <img id="logo" src={Logo} alt="Villefort"/>
                            <input id="SearchLogin" type="email" size="50"  placeholder="Digite seu e-mail ou CPF"/>
                            <input id="SearchLogin" type="password" size="50"  placeholder="Digite sua senha"/>
                            <a href="#">Esqueceu sua senha? Clique aqui.</a>
                            <button id="buttonLoginPopUp">Entrar</button>
                            <button id="buttonLoginPopUp" onClick={() => history.push('./Cadastro')}>Criar Conta</button>
                        </div>
                    </div>
                    <div className="exit" onClick = {() => setShow ((s) =>! s)}></div>
                </div>
            </div>
            
            <div className="entrarCriar">
                <button id="ButtonEntrar" type="submit" onClick = {() => setShow ((s) =>! s)} ><FiLogIn/> Entrar</button>
                <button id="ButtonEntrar" type="submit" onClick={() => history.push('./Cadastro')} ><FaRegAddressBook/> Criar conta</button>
            </div>
            <div className="pesquisa">
                <img id="logo" src={Logo} onClick={() => history.push('./inicio')} alt="Villefort"/>
                <div>
                    <input id="Search" type="search" size="70"  placeholder="Buscar um ou mais produtos (ex: arroz, feijão)"/>
                    <button id="ButtonEntrar"type="submit"><FaSearch/> Buscar</button>
                </div>
            </div>
            <div className="menu1">

                <nav className="menu">
                    <ul>
                        <li><a href="#">DEPARTAMENTO</a></li>
                        <li><a href="#">OFERTAS</a></li>
                        <li><a href="#">COLEÇÕES</a></li>
                        <li><a href="#">RECEITAS</a></li>
                        <li><a href="#">MAIS VENDIDOS</a></li>
                    </ul>
                </nav>

                <div className="DivNone">
                    <div className="IconsSearchStore">
                        <div id="SearchIcons" style = {{  color:  search ? " mediumaquamarine " : " black "}} onClick = {() => setSearch ((s) =>! s)}><FaSearch size={20}/></div>
                        <div id="GroceryStore"><FaShoppingBasket size={20}/></div>
                    </div>
                    <div id="VillefortEntregaLogo" onClick={() => history.push('./inicio')}><h3>Villefort Entrega</h3></div>  
                    <div className="MenuNavBar">
                        <Navbar />
                    </div>
                </div>       
            </div>
            
            <div className="PesquisarResponsive">
                <div style = {{  display:  search ? " block " : " none "}}>
                    <input id="Search" type="search" size="50"  placeholder="Buscar um ou mais produtos (ex: arroz, feijão)"/>
                </div>
            </div>
            
        </>   
    )
}