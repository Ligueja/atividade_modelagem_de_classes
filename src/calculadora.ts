export class Calculadora {
    constructor(
        public operacoesRealizadas: Array<string> = []
    ) {}


    somar(numero1: number, numero2: number): string {
        const resultado: number = numero1 + numero2;

        this.operacoesRealizadas.push(`${numero1} + ${numero2} = ${resultado}`);
        return `A soma de ${numero1} + ${numero2} é: ${resultado}`

    }

    subtrair(numero1: number, numero2: number): string {
        const resultado: number = numero1 - numero2;

        this.operacoesRealizadas.push(`${numero1} - ${numero2} = ${resultado}`);
        return `A subtração de ${numero1} - ${numero2} é: ${resultado}`
    }

    multiplicar(numero1: number, numero2: number): string {
        const resultado: number = numero1 * numero2;

        this.operacoesRealizadas.push(`${numero1} * ${numero2} = ${resultado}`);
        return `A multiplicação de ${numero1} x ${numero2} é: ${resultado}`
    }

    dividir(numero1: number, numero2: number): string {
        if(numero2 === 0) {
            throw Error('Não é possível dividir por zero');
        }

        const resultado: number = numero1 / numero2;

        this.operacoesRealizadas.push(`${numero1} / ${numero2} = ${resultado}`);
        return `A divisão de ${numero1} / ${numero2} é: ${resultado}`
    }

    imprimirHistorico(): void {
        for(const indice in this.operacoesRealizadas) {
            console.log(`[${indice}] => ${this.operacoesRealizadas[indice]}`)
        }
    }
}