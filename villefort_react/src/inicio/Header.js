import React from "react"
import './Header.css'

import { FiLogIn } from "react-icons/fi";
import { FaRegAddressBook } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import Logo from './images/logo.png'

import Navbar from './menu/Navbar' 

export default () => ( 
    <>
        <div className="entrarCriar">
            <button id="ButtonEntrar" type="submit"><FiLogIn/> Entrar</button>
            <button id="ButtonEntrar" type="submit"><FaRegAddressBook/> Criar conta</button>
        </div>
        <div className="pesquisa">
            <img id="logo" src={Logo} alt="Villefort"/>
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
                    <div id="SearchIcons"><FaSearch size={20}/></div>
                    <div id="GroceryStore"><FaShoppingBasket size={20}/></div>
                </div>
                <div><h3>Villefort Entrega</h3></div>  
                <div className="MenuNavBar">
                    <Navbar />
                </div>
            </div>
            
        </div>
    </>
)