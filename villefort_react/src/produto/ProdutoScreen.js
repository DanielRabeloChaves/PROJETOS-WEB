import React from "react";

import Header from "../inicio/Header";
import Categorias from "../inicio/Categorias"
import Footer from "../inicio/Footer"

import { AiFillHome } from "react-icons/ai";

import {useHistory} from 'react-router-dom'

import ProdutoOpen from "./ProdutoOpen";

export default () => {

    const history = useHistory()

    return(
        <>
            <div>
                <Header/>
                <Categorias/>
                <div className="barra"><AiFillHome onClick={() => history.push('/')}  id="CadastroHome"/><p>Produto</p></div>
                <div className="ProdutoFull">
                    <div className="Produto">
                       <ProdutoOpen/>
                    </div>
                </div>
                <Footer/>
            </div>

        </>
    )
}