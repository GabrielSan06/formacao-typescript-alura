export class Armazenador {
    constructor() { }
    // static para permitir chamar a função sem criar um objeto
    static salvar(chave, valor) {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }
    // static para permitir chamar a função sem criar um objeto
    static obter(chave, reviver) {
        const valor = localStorage.getItem(chave);
        if (valor === null)
            return null;
        if (reviver)
            return JSON.parse(valor, reviver);
        return JSON.parse(valor);
    }
}
