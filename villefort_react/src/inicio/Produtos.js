import React from "react";  

import './Produtos.css'

export default () => (
        <div className="ProdutosMain">
            <div className="BoxProdutos">
                <img id="imgProduto" src="https://s3.amazonaws.com/produtos.vipcommerce.com.br/144x144/8fd5b16c-ba7a-4409-940e-46b94d9b79bb.jpg" alt="teste"/>
                <div className="PrecoProduto">
                    <div className="divPrecoProduto">
                        <p>Por apenas</p>
                        <p>R$ 10,00 un.</p>
                    </div>
                    <div className="triangulo"></div>
                </div>
                    <p id="NomeProduto">Desinfetante Líquído Bak Eucalipto Ypê 2l</p>
                <div className="DivQtdComprar">
                    <input type="number" id="QtdProduto" min="1" max="999" placeholder="1"/>
                    <button id="ComprarProduto">COMPRAR</button>
                </div>
            </div>

            <div className="BoxProdutos">
                <img id="imgProduto" src="https://s3.amazonaws.com/produtos.vipcommerce.com.br/144x144/c8763533-f384-4970-807b-44726923a0c0.jpg" alt="teste"/>
                <div className="PrecoProduto">
                    <div className="divPrecoProduto">
                        <p>Por apenas</p>
                        <p>R$ 10,00 un.</p>
                    </div>
                    <div className="triangulo"></div>
                </div>
                
                    <p id="NomeProduto">Refrigerante Guaraná Antárctica 2L</p>
                <div className="DivQtdComprar">
                    <input type="number" id="QtdProduto" min="1" max="999" placeholder="1"/>
                    <button id="ComprarProduto">COMPRAR</button>
                </div>
            </div>
        </div>
)