import React from "react";

import './Carrinho.css'

import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { ImBin } from "react-icons/im";

export default () => {
    return (
        <div className="CarrinhoDeComprasFULL">
            <div className="Carrinho">
                <div className="MeuCarrinhoDeCompra">
                    <p>Meu carrinho de compras</p><MdOutlineLocalGroceryStore id="iconCarrinho" size={50}/>
                </div>
                <div className="AdcionarRemover">
                    <div id="Bin">
                        <ImBin size={14}/>
                    </div>
                    <div>
                        <button id="ButtonItensADD">0 itens R$ 0,00</button>
                    </div>
                </div>
            </div>

            <div className="Finalizar">
                <MdOutlineLocalGroceryStore size={20}/><p>Finalizar compra</p><MdOutlineLocalGroceryStore size={20}/>
            </div>
        </div>
    )
}