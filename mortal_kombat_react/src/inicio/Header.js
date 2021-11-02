import React from "react"

import './Header.css'

import Logo from './imagensInicio/Logo.png'

import {GiHamburgerMenu} from  "react-icons/gi"
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";


export default () => {

    return (
        <nav className="nav-wrapper">
                    <div className='bloco'>  
                        <img className="logo" src={Logo} alt="Logo Mortal Kombat" />
                    </div>
                    <ul className="hamburguer">
                        <li id="menu">INFORMAÇÕES</li>
                        <li id="menu">FILMES</li>
                        <li id="menu">HISTORIA</li>
                        <li id="menu">GAMES</li>
                        <li id="menu">FATALITY</li>
                        <li id="menu">COMBOS</li>
                    </ul>  
                    <div id="espacamentoHeader"></div>   
                    <ul className="hamburguer">
                        <li><BsGithub className="icon" id="git"/></li>
                        <li><FaLinkedinIn className="icon" id="Linkedin"/></li>
                        <li><GrInstagram className="icon" id="Instagram"/></li>
                        <li><IoLogoWhatsapp className="icon" id="Wpp"/></li>
                    </ul>
                    <div><GiHamburgerMenu id="menu2" className="icon"/></div>
            </nav>
        
    )
}


/*<nav className="nav-wrapper">
                    <div className='bloco'>  
                        <img className="logo" src={Logo} alt="Logo Mortal Kombat" />
                    </div>
                    <ul className="hamburguer">
                        <li id="menu">INFORMAÇÕES</li>
                        <li id="menu">FILMES</li>
                        <li id="menu">HISTORIA</li>
                        <li id="menu">GAMES</li>
                        <li id="menu">FATALITY</li>
                        <li id="menu">COMBOS</li>
                    </ul>  
                    <div id="espacamentoHeader"></div>   
                    <ul className="hamburguer">
                        <li><BsGithub className="icon" id="git"/></li>
                        <li><FaLinkedinIn className="icon" id="Linkedin"/></li>
                        <li><GrInstagram className="icon" id="Instagram"/></li>
                        <li><IoLogoWhatsapp className="icon" id="Wpp"/></li>
                    </ul>
                    <div><GiHamburgerMenu onClick={handleClick} id="menu2" className="icon"/></div>
            </nav> */