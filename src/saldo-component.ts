let saldo = 35201.73;

// Pegando o elemento pela class
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if(elementoSaldo != null)
    elementoSaldo.textContent = formatarMoeda(saldo); 

if(elementoDataAcesso != null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}

