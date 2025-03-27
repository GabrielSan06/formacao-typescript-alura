import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import Conta from "../types/Conta-antiga.js";
import SaldoComponent from "./saldo-component.js";
import ExtratoComponent from "./extrado-component.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementoFormulario.addEventListener("submit", function(event) {
    try {
        event.preventDefault(); // Para não recarregar a página quando o formulário for enviado
    
        if(!elementoFormulario.checkValidity()) { //Verificando se todos os campos estão preenchidos
            alert("Por favor, preencha todos os campos!");
            return
        }
    
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
        const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
        const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;
    
        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
        let valor: number = inputValor.valueAsNumber;
        let data: Date = new Date(inputData.value + " 00:00:00");
    
        const novaTransacao: Transacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        }
    
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoFormulario.reset();
    } catch (error) {
        alert(error.message);
    }
});
