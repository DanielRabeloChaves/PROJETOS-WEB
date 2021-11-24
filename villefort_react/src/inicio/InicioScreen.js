import React from "react";
import './InicioScreen.css'

import Header from "./Header";
import Categorias from "./Categorias";
import Banner from './Banner'
import Footer from './Footer'
import Produtos from '../produto/Produtos'
import Carrinho from './Carrinho'

import {Link} from 'react-router-dom'

export default () => {
    return (
        <body>
            <header><Header/></header>
            <nav><Categorias/></nav>
            <section><Banner/></section>
            <div className="ProdutosCarrinho">
                <article><Produtos/></article>
                <aside><Carrinho/></aside>
            </div>
            <footer><Footer/></footer>
        </body>
    )
}
