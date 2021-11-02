import React from "react"
import './InicioScreen.css'

import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import Barra from './Barra'


export default () => {
    return(
        <body>
            <header><Header/></header>
            <article>
                <Banner/>
                <Barra/>
            </article>
            <footer><Footer/></footer> 
        </body>
    )
}


