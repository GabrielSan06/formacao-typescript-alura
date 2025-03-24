let saldo = 35201.73;
// Pegando o elemento pela class
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null)
    elementoSaldo.textContent = formatarMoeda(saldo);
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}
