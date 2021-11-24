import React, {useState}  from "react";
import './CadastroScreen.css'

import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";

import Header from "../Header";
import Categorias from "../Categorias";
import CadastroPessFisica from "./CadastroPessFisica";
import EnderecoEntrega from "./EnderecoEntrega";
import CadastroPessJuridica from "./CadastroPessJuridica";
import Footer from "../Footer";

export default () => {

    const [cadastro, setCadastro] = useState ( true );
    
    return(
        <>
            <Header/>
            <Categorias/>
            <div>
                <div className="barra"><AiFillHome id="CadastroHome"/><p>Cadastro</p></div>
                <div className="CadastroAll">
                    <h3>Tipo de Cadastro</h3>
                    <div className="ButtonCadastro">   
                        <button className="PessoaFisica" style = {{color: cadastro ? "white" : "black"  ,background:  cadastro ? "blue " : " none "}} onClick = {() => setCadastro ((s) =>! s)}><BsPersonFill/>Pessoa Fisica</button>
                        <button className="PessoaJuridica" style = {{color: cadastro ? "black" : "white"  ,background:  cadastro ? "none " : " blue "}} onClick = {() => setCadastro ((s) =>! s)}><MdWork/>Pessoa Juridica</button>
                    </div>
                    <div className="linhaHorizontal2"></div>

                    <div style = {{  display:  cadastro ? " block " : " none "}}><CadastroPessFisica/></div>
                    <div style = {{  display:  cadastro ? " none " : " block "}}><CadastroPessJuridica/></div>
                    
                    <div className="linhaHorizontal2"></div>
                    <EnderecoEntrega/>
                    <button className="Cadastrar"><FcCheckmark/>Cadastrar</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}