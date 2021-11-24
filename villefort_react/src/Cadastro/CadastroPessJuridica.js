import React from "react";
import './CadastroPessJuridica.css'

export default () => {
    return(
        <>
            
            <div className="PessoaJuridicaAll">
                <p>Informações comerciais e pessoais</p>
                    <div className="PessoJuridicaInformacoes">
                        <div className="RazSocialPesJur">
                            <label>Razão Social</label>
                            <input type="text"></input>
                        </div>

                        <div className="NomeFantPesJur">
                            <label>Nome fantasia</label>
                            <input type="text"></input>
                        </div>

                        <div className="CNPJPesJur">
                            <label>CNPJ</label>
                            <input type="text"></input>
                        </div>

                        <div className="InscriEstadualPesJur">
                            <label>Inscrição estadual</label>
                            <input type="text"></input>
                        </div>

                        <div className="NomePesJur">
                            <label>Nome</label>
                            <input type="text"></input>
                        </div>

                        <div className="SobrenomePesJur">
                            <label>Sobrenome</label>
                            <input type="text"></input>
                        </div>

                        <div className="DtaNascimentoPesJur">
                            <label>Data de Nascimento</label>
                            <input type="date"></input>
                        </div>

                        <div className="CPFPesJur">
                            <label>CPF</label>
                            <input type="text"></input>
                        </div>

                        <div className="EmailPesJur">
                            <label>E-mail</label>
                            <input type="email"></input>
                        </div>

                        <div className="ConfiEmailPesJur">
                            <label>Confirmar e-mail</label>
                            <input type="email"></input>
                        </div>
                        <div className="TelFixoPesJur">
                            <label>Telefone fixo</label>
                            <input type="tel"></input>
                        </div>
                        <div className="TelCelularPesJur">
                            <label>Telefone celular</label>
                            <input type="tel"></input>
                        </div>
                        <div className="SenhaPesJur">
                            <label>Senha</label>
                            <input type="password"></input>
                        </div>
                        <div className="ConfiSenhaPesJur">
                            <label>Confirmar senha</label>
                            <input type="password"></input>
                        </div>
                    </div>
                    <div className="CheckBox">
                        <input type="checkbox"/>Desejo receber o conteúdo promocional via e-mail e SMS.<br/><br/>
                        <input type="checkbox"/>Li e aceito os <a href="#">Termo de uso.</a><br/><br/>
                        <span>Por favor verifique a nossa <a href="#">Política de Privacidade</a>.</span> 
                    </div> 
            </div> 
        </>
    )
}