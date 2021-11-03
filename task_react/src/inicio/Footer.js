import React from 'react'
import './Footer.css'

import {useHistory} from 'react-router-dom'

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
        </>
    )
}