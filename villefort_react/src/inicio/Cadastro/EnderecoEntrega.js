import React from "react";
import './EnderecoEntrega.css'

export default () => {
    return(
        <>
            <div className="EnderecoFULL">
                <p>Endereço de entrega</p>
                <div className="EnderecoEntregaInformacoes">
                    <div className="cep">
                        <label>CEP</label>
                        <input type="text"></input>
                    </div>

                    <div className="Rua">
                        <label>Rua</label>
                        <input type="text"></input>
                    </div>

                    <div className="Numero">
                        <label>Numero</label>
                        <input type="text"></input>
                    </div>

                    <div className="Complemento">
                        <label>Complemento</label>
                        <input type="text"></input>
                    </div>

                    <div className="Bairro">
                        <label>Bairro</label>
                        <input type="text"></input>
                    </div>

                    <div className="Cidade">
                        <label>Cidade</label>
                        <input type="text"></input>
                    </div>

                    <div className="Estado">
                        <label>Estado</label>
                        <select name="uf">
                            <option selected>Minas Gerais</option>
                            <option>Rio de Janeiro</option>
                            <option>Sao Paulo</option>
                            <option>Bahia</option>
                            <option>Goias</option>
                        </select>
                    </div>

                    <div className="Telefone">
                        <label>Telefone</label>
                        <input type="tel"></input>
                    </div>

                    <div className="Referencia">
                        <label>Ponto de referencia</label>
                        <input type="text"></input>
                    </div>
                </div>
            </div>
        </>
    )
}