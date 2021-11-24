import React from "react";
import Carrinho from "../inicio/Carrinho";
import './ProdutoOpen.css'


export default () => {
    return (
        <>
           <div className="ProdutoOpenFull">
                
                <div className="ProdutoOpen1">
                    <h4>Desinfetante Líquído Bak Eucalipto Ypê 2l</h4>
                    <div className="ProdutoOpen2">
                        <img id="ImgProduto" src="https://s3.amazonaws.com/produtos.vipcommerce.com.br/250x250/8fd5b16c-ba7a-4409-940e-46b94d9b79bb.jpg" alt="Produto"/>
                        <div className="PrecoProduto2">
                            <div className="triangulo2"></div>
                            <div className="divPrecoProduto2">
                                <p>Por apenas</p>
                                <p>R$ 10,00 un.</p>
                            </div>
                        </div>      
                    </div>   
                    <div className="DivQtdComprar2">
                        <input type="number" id="QtdProduto" min="1" max="999" placeholder="1"/>
                        <button id="ComprarProduto">COMPRAR</button>
                    </div>
                </div>
                

                <div className="ProdutoOpen3">
                    <h3>Compre tambem</h3>
                    <div className="MiniProduto">
                        <h4>Sabão Gel Pinho Classic 2l</h4>
                        <div className="MiniProduto2">
                            <img id="MiniFotoProduto" src="https://s3.amazonaws.com/produtos.vipcommerce.com.br/60x60/991779d0-bca1-4d83-9093-c2fbdb64f38a.jpg" alt="produto"/>
                            <div className="PrecoProduto2">
                                <div className="triangulo2"></div>
                                <div className="divPrecoProduto2">
                                    <p>Por apenas</p>
                                    <p>R$ 8,70 un.</p>
                                </div>
                            </div>      
                        </div>
                        <div className="DivQtdComprar3">
                            <input type="number" id="QtdProduto" min="1" max="999" placeholder="1"/>
                            <button id="ComprarProduto">COMPRAR</button>
                        </div>
                        <div className="LinhaInfo2"></div>
                    </div>

                    <div className="MiniProduto">
                        <h4>Desinfetante Líquído Puro Algodão Lysol 500ml</h4>
                        <div className="MiniProduto2">
                            <img id="MiniFotoProduto" src="https://s3.amazonaws.com/produtos.vipcommerce.com.br/60x60/d30d28c5-fcda-4016-ab86-175b10a22ae3.jpg" alt="produto"/>
                            <div className="PrecoProduto2">
                                <div className="triangulo2"></div>
                                <div className="divPrecoProduto2">
                                    <p>Por apenas</p>
                                    <p>R$ 14,50 un.</p>
                                </div>
                            </div>      
                        </div>
                        <div className="DivQtdComprar3">
                            <input type="number" id="QtdProduto" min="1" max="999" placeholder="1"/>
                            <button id="ComprarProduto">COMPRAR</button>
                        </div>
                        <div className="LinhaInfo2"></div>
                    </div>

                    <div className="MiniProduto">
                        <h4>Desinfetante Liquido Original Frasco Promocional 4 Unidades Lysoform 1l Cada</h4>
                        <div className="MiniProduto2">
                            <img id="MiniFotoProduto" src="https://s3.amazonaws.com/produtos.vipcommerce.com.br/60x60/3a5c5f93-fc98-4b53-874e-deeaffb0f5d1.jpg" alt="produto"/>
                            <div className="PrecoProduto2">
                                <div className="triangulo2"></div>
                                <div className="divPrecoProduto2">
                                    <p>Por apenas</p>
                                    <p>R$ 15,00 un.</p>
                                </div>
                            </div>      
                        </div>
                        <div className="DivQtdComprar3">
                            <input type="number" id="QtdProduto" min="1" max="999" placeholder="1"/>
                            <button id="ComprarProduto">COMPRAR</button>
                        </div>
                        <div className="LinhaInfo2"></div>
                    </div>

                    <div className="MiniProduto">
                        <h4>Desinfetante Líquído Lavanda Feroz 5l</h4>
                        <div className="MiniProduto2">
                            <img id="MiniFotoProduto" src="https://s3.amazonaws.com/produtos.vipcommerce.com.br/60x60/26068e53-62a1-4d5f-9884-26e650d4b68c.jpg" alt="produto"/>
                            <div className="PrecoProduto2">
                                <div className="triangulo2"></div>
                                <div className="divPrecoProduto2">
                                    <p>Por apenas</p>
                                    <p>R$ 9,00 un.</p>
                                </div>
                            </div>      
                        </div>
                        <div className="DivQtdComprar3">
                            <input type="number" id="QtdProduto" min="1" max="999" placeholder="1"/>
                            <button id="ComprarProduto">COMPRAR</button>
                        </div>
                        <div className="LinhaInfo2"></div>
                    </div>
                </div>
                <div className="ProdutoOpen4"><Carrinho/></div>
            </div>  
        </>
    )
}