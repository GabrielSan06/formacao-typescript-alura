import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";
const elementoRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
renderizarExtrado();
function renderizarExtrado() {
    const grupoTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistrosTransacoes = "";
    for (let grupoTransacao of grupoTransacoes) {
        let htmlTransacaoItem = "";
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
        `;
    }
    if (htmlRegistrosTransacoes == "") {
        htmlRegistrosTransacoes = "<div>Não há transacções registradas!</div>";
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistrosTransacoes;
}
const ExtratoComponent = {
    atualizar() {
        renderizarExtrado;
    }
};
export default ExtratoComponent;
