import React from "react";

import { RiPhoneFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";

import './Footer.css'

import GooglePlay from './images/AppGooglePlay.png'
import AppStore from './images/AppAppStore.png'
import Villefort from './images/villefortEntrega.png'
import ClubeVillefort from './images/ClubeVillefort.png'
import DanielRabelo from './images/DanielRabelo.png'

import { useHistory } from "react-router";

export default () => {

    const history = useHistory()

    return (
        <div>
            <div className="RelacionamentoCliente">
                <h1>RELACIONAMENTO COM CLIENTE</h1>
                <div id="RelacionamentoCliente">
                    <div><p><RiPhoneFill size={20}/>(31) 3279-2334</p></div>
                    <div><p><BsWhatsapp size={20}/>(31) 9822-01775</p></div>
                    <div><p><AiOutlineMail size={20}/>contato@villefortentrega.com.br</p></div>
                    <div><a href="http://www.villefort.com.br/contatos" target="_blank"><p className="chatCurso"><BsChatDots size={20}/></p></a></div>
                </div>
            </div>

            <div className="FooterTexto">
                <div className="Texto1">
                    <h3>QUEM SOMOS</h3>
                    <p>
                        Com um sistema logístico ágil e dinâmico, o Villefort Entrega leva suas compras até você com toda agilidade, conforto e segurança que um supermercado online oferece, com a comodidade que você precisa.
                    </p>
                    <a href="#">Clique aqui e saiba mais</a>  
                </div>

                <div className="Texto2">
                    <h3>INSTITUCIONAL</h3>
                        <a href="#">Quem somos</a>
                        <a href="#">Como comprar</a>
                        <a href="#">Entregas</a>
                        <a href="#">Formas de Pagamento</a>
                        <a href="#">Fale Conosco</a>
                        <a href="#">Política de Privacidade</a>
                        <a href="#">Simulador de Frete</a>
                        <a href="#">Trocas e Devoluções</a>
                </div>

                <div className="texto3">
                    <h3>FORMAS DE PAGAMENTO</h3>
                    <p>Aceitamos cartões de crédito, e débito.</p>
                    <a href="#">Clique aqui e saiba mais</a> 
                </div>

                <div className="FooterApp">
                    <a href="https://safebrowsing.google.com/" target="_blank"><img id="GoogleSafe" src="https://www.villefortentrega.com.br/assets/img/google-safe.png" alt="Google Safe" /></a>
                    <p>COMPRE PELO SEU CELULAR</p>
                    <a href="https://play.google.com/store/apps/details?id=br.com.villefortentrega.appvendas" target="_blank"><img id="GooglePlay" src={GooglePlay} alt="Play Store"/></a>
                    <a href="https://apps.apple.com/br/app/1552439439" target="_blank"><img id="AppStore" src={AppStore} alt="Google Play"/></a>
                </div>

            </div>
            <div className="FooterTexto2">
                <div className="linhaHorizontal2"></div>
                <div className="texto4">
                    <p>Horário de atendimento pelo SAC - de segunda à sexta-feira, de 9h às 17h00 no telefone 31.3279.2334</p>
                    <p>Villefort Entrega - DO VILLEFORT DIRETO PARA VOCÊ!</p>
                    <p>
                        Em caso de divergência de valores no site, o valor válido é o do carrinho de compras. Fotos ilustrativas. Compras sujeitas a confirmação de estoque.
                        A fim de garantir o acesso de um maior número de clientes às nossas promoções, a compra de produtos com preços promocionais poderá ter sua quantidade limitada por cliente. Os preços, ofertas e condições são exclusivos para internet e válidos durante o dia específico, podendo sofrer alterações sem prévia notificação.
                        Proibida a venda de bebidas alcoólicas para menores de idade, conforme Lei n.º 8069/90, art. 81, inciso II (Estatuto da Criança e do Adolescente).
                    </p>
                    <p>O Ministério da Saúde informa: o aleitamento materno evita infecções e alergias e é recomendado até os 2 (dois) anos de idade ou mais. (inciso I, art. 6º do Decreto 9.579/2018).</p>
                    <p>
                        O Ministério da Saúde informa: após os 6 (seis) meses de idade, continue amamentando seu filho e ofereça novos alimentos (inciso II, art. 6º do Decreto 9.579/2018).
                        Preços e condições exclusivos para o villefortentrega.com.br, podendo sofrer alterações sem aviso prévio.
                    </p>
                </div>
            </div>
            <div className="villefortEntrega">
                <div>
                  <a  href="https://github.com/DanielRabeloChaves" target="_blank"><img className="Ass" src={DanielRabelo} alt="Daniel Rabelo"/></a>
                </div>
                <div>
                    <a href="https://play.google.com/store/apps/details?id=com.clubevillefort" target="_blank"><img id="villefortEntrega" src={ClubeVillefort} alt="Clube Villefort"/></a>
                    <a href="http://www.villefort.com.br/" target="_blank"><img id="villefortEntrega" src={Villefort} alt="Villefort Entrega"/></a> 
                </div>
            </div>
        </div>
    )
}