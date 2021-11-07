import React from 'react'
import './Footer.css'

import {useHistory} from 'react-router-dom'

import DanielRabelo from './DanielRabelo2.png'

export default () => {
    const history = useHistory()
    return(
        <>
            <span>TASK</span>
            <p>Daniel Rabelo Chaves</p>
            <p>Sistemas de Informação</p>
            <p>Estagiario TI</p>
            <a rel="noopener noreferrer" href="https://github.com/DanielRabeloChaves" target="_blank">
                <button id="button" type="submit" >GitHub</button>
            </a>
            <span><img className="Ass" src={DanielRabelo} alt="Daniel Rabelo" /> </span>  
            
        </>
    )
}