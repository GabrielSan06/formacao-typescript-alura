export class Armazenador {
    private constructor() {}

    // static para permitir chamar a função sem criar um objeto
    static salvar<T>(chave: string, valor: any): void {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }

    // static para permitir chamar a função sem criar um objeto
    static obter<T>(chave: string, reviver?: (this: any, key: string, value: any) => any): T | null {
        const valor = localStorage.getItem(chave);

        if (valor === null)
            return null

        if (reviver) 
            return JSON.parse(valor, reviver) as T

        return JSON.parse(valor) as T;
    }
}