import Conta from "../types/Conta-antiga.js";
import SaldoComponent from "./saldo-component.js";
import ExtratoComponent from "./extrado-component.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault(); // Para não recarregar a página quando o formulário for enviado
        if (!elementoFormulario.checkValidity()) { //Verificando se todos os campos estão preenchidos
            alert("Por favor, preencha todos os campos!");
            return;
        }
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
        const inputValor = elementoFormulario.querySelector("#valor");
        const inputData = elementoFormulario.querySelector("#data");
        let tipoTransacao = inputTipoTransacao.value;
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value + " 00:00:00");
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoFormulario.reset();
    }
    catch (error) {
        alert(error.message);
    }
});
