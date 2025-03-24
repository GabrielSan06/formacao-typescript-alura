import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

renderizarExtrado();

function renderizarExtrado(): void {
    const grupoTransacoes: GrupoTransacao[] = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";

    let htmlRegistrosTransacoes: string = "";

    for(let grupoTransacao of grupoTransacoes) {
        let htmlTransacaoItem: string = "";

        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacaoItem += `
            <div class="transacao-item">
                <div class="transacao-info">
                    <span class="tipo">${transacao.tipoTransacao}</span>
                    <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                </div>
                    <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
            </div>
            `;
        }

        htmlRegistrosTransacoes += `
        <div class="transacoes-group">
            <strong class="mes-group">${grupoTransacao.label}</strong>
            ${htmlTransacaoItem}
        </div>
        `
    }

    if(htmlRegistrosTransacoes == "") {
        htmlRegistrosTransacoes = "<div>Não há transacções registradas!</div>";
    }

    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistrosTransacoes;
}

const ExtratoComponent = {
    atualizar(): void {
        renderizarExtrado
    }
}

export default ExtratoComponent;