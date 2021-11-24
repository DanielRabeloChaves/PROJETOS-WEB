import React from "react";
import "./informacoesScreen.css"
import {useHistory} from 'react-router-dom'

import Header from "../inicio/Header";
import Categorias from '../inicio/Categorias'
import Footer from "../inicio/Footer";
import { AiFillHome } from "react-icons/ai";

export default () => {

    const history = useHistory()

    return(
        <>
            <Header/>
            <Categorias/>
            <div className="barra"><AiFillHome onClick={() => history.push('/')} id="CadastroHome"/><p>Informaçoes</p></div>
            <div className="InformacoesFull">
                
                <div className="DivInformacoes">
                    <a href="#">Quem somos</a>
                    <a href="#">Como comprar</a>
                    <a href="#">Entregas</a>
                    <a href="#">Formas de Pagamento</a>
                    <a href="#">FAQ</a>
                    <a href="#">Fale Conosco</a>
                    <a href="#">Politica de Privacidade</a>
                    <a href="#">Simulador de Frete</a>
                    <a href="#">Trocas e Devoluções</a>
                </div>
                <div className="TxtInformacoes">
                    
                    <div className="TxtQuemSomos">
                        <h3>Quem somos</h3>
                        <div className="LinhaInfo"></div>

                        <p align="justify">Em 1988 nasce o Villefort Atacado e Varejo no estado de Minas Gerais. A rede possui 24 lojas localizadas em Belo Horizonte, Contagem, Ribeirão das Neves, Montes Claros, Divinópolis, Juiz de Fora, Santa Luzia, Coronel Fabriciano, Itabira e em Jataí no estado de Goiás.</p>

                        <p align="justify">Atualmente contamos com um mix de produtos diferenciados, com mais de 12 mil itens, incluindo alimentos, bebidas, perecíveis, higiene, limpeza, bazar, bomboniére, cereais, matinais e tabacaria. O Villefort possui fornecedores parceiros que garantem a qualidade de nossos produtos.</p>

                        <p align="justify">Estamos presentes nos principais polos comerciais, abastecendo todas as cidades vizinhas do entorno das nossas lojas, a fim de atender as necessidades de nossos clientes. O Villefort possui uma estrutura moderna, ampla e voltada para garantir a melhor experiência de compra do consumidor final e nossos comerciantes. Nossas lojas oferecem qualidade e excelência no atendimento, além de serviços completos de açougue, padaria e hortifrúti.</p>

                        <p align="justify">Agora, o Villefort Atacado e Varejo oferece mais uma modalidade de compras: a loja virtual Villefort Entrega. No supermercado online, Villefort Entrega, os clientes têm acesso a um mix variado de produtos que vai de carnes à cervejas especiais, de temperos à bomboniere, dos farináceos aos produtos de limpeza.</p>

                        <p align="justify">Com um sistema logístico ágil e dinâmico, para entregas de carga seca, produtos resfriados e congelados. O Villefort Entrega leva suas compras à porta da sua casa ou do seu estabelecimento com toda agilidade, conforto e segurança que um supermercado online oferece e com a comodidade que você precisa.</p>

                        <h5>VILLEFORT ENTREGA, DO VILLEFORT DIRETO PARA VOCÊ!</h5>
                    </div>
                   

                </div>
            </div>
            
            <Footer/>
        </>
    )
}

