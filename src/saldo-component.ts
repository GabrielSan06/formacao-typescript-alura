let saldo = 35201.73;

// Pegando o elemento pela class
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

if(elementoSaldo != null)
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency"}); // Armazenando no elemento o saldo definido na variável