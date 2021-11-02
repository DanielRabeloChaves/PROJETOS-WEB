import React from 'react'
import './Barra.css'
import Barra from './imagensInicio/Barra.svg'

export default () => (
    <div className="borda">
        <div className="linha"></div>
        <img className="barra" src={Barra}/>  
        <div className="linha"></div>
    </div>  
)