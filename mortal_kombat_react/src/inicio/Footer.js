import React from 'react'
import './Footer.css'

import Ass from './imagensInicio/DanielRabelo2.png'
import Adulto from './imagensInicio/18.jpg'
import Wb from './imagensInicio/WarnerBrothers.png'

export default () => {
   
    return(
        <div className="footer"> 
                <div className="container">
                    <span>Mortal Kombat</span>
                    <p>Daniel Rabelo Chaves</p>
                    <p>Sistemas de Informação</p>
                    <p>Estagiario TI</p>
                    <p id="direitos">Todas as imagens exibidas neste site são de propriedade exclusiva da Warner Bros, afiliadas ou licenciantes. Projeto criado com intuito educativo e pratico, o mesmo está sendo desenvolvido pelo estudante na area de Tecnologia Daniel Rabelo Chaves.</p>
                    <div className="Direitos">
                        <div>
                            <img id="Wb" src={Wb} />
                        </div>
                        <p>LOGO DA WB GAMES, LOGO WBIE, ESCUDO WB, LOGO DA NETHERREALM STUDIOS , MORTAL KOMBAT, LOGO THE DRAGON e todos os personagens e elementos relacionados são marcas registradas da Warner Bros. Entertainment Inc. (s20)</p>
                    </div>
                </div>  
            <div id="daniel">
                <img id="Adulto" src={Adulto} alt="18+"/>
                <img src={Ass} alt="Daniel Rabelo"/> 
            </div>  
        </div>
    )
}