import React from "react";
import './CadastroPessFisica.css'

export default () => {
    return(
        <>
            <div className="PessoaFisicaAll">
                <p>Informações pessoais</p>
                    <div className="PessoFisicaInformacoes">
                        <div className="NomePesFis">
                            <label>Nome</label>
                            <input type="text"></input>
                        </div>

                        <div className="SobrenomePesFis">
                            <label>Sobrenome</label>
                            <input type="text"></input>
                        </div>

                        <div className="DtaNascimentoPesFis">
                            <label>Data de nascimento</label>
                            <input type="date"></input>
                        </div>

                        <div className="CPFPesFis">
                            <label>CPF</label>
                            <input type="text"></input>
                        </div>

                        <div className="EmailPesFis">
                            <label>E-mail</label>
                            <input type="email"></input>
                        </div>

                        <div className="ConfirmarEmailPesFis">
                            <label>Confirmar e-mail</label>
                            <input type="email"></input>
                        </div>

                        <div className="TelFixoPesFis">
                            <label>Telefone fixo</label>
                            <input type="tel"></input>
                        </div>

                        <div className="TelCelularNomePesFis">
                            <label>Telefone celular</label>
                            <input type="tel"></input>
                        </div>

                        <div className="SenhaPesFis">
                            <label>Senha</label>
                            <input type="password"></input>
                        </div>

                        <div className="ConfirmarSenhaPesFis">
                            <label>Confirmar senha</label>
                            <input type="password"></input>
                        </div>
                    </div>
                    <div className="CheckBox">
                        <input type="checkbox"/>Desejo receber o conteúdo promocional via e-mail e SMS.<br/><br/>
                        <input type="checkbox"/>Li e aceito os <a href="#">Termo de uso.</a><br/><br/>
                        <span>Por favor verifique a nossa <a href="#">Política de Privacidade.</a></span> 
                    </div>
                    
            </div> 
        </>
    )
}