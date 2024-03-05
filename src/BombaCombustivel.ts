export class BombaCombustivel {
    constructor (
        private tipoCombustivel: string, private valorLitro: number, private quantidadeCombustivel: number = 500, private novaQuantidadeCombustivel: number = 0) {}
     
    abastecerPorValor(valor: number) {
        const litros = valor / this.valorLitro;
        this.novaQuantidadeCombustivel = this.quantidadeCombustivel - litros
        this.quantidadeCombustivel = this.novaQuantidadeCombustivel;
        return `Foi abastecido R$ ${valor}, com o valor do litro R$ ${this.valorLitro}, totalizando ${litros.toFixed(2)} litros de ${this.tipoCombustivel} e na bomba a quantidade atual de combustível é: ${this.novaQuantidadeCombustivel.toFixed(2)} litros`        
    }

    abastecerPorLitro(litros: number){
        const valor = litros * this.valorLitro;
        this.novaQuantidadeCombustivel = this.quantidadeCombustivel - litros
        this.quantidadeCombustivel = this.novaQuantidadeCombustivel;
        return `Foi abastecido ${litros} litros de ${this.tipoCombustivel}, totalizando o valor de R$ ${valor.toFixed(2)} e na bomba a quantidade atual de combustível é: ${this.novaQuantidadeCombustivel.toFixed(2)} litros`
    }

    alterarValor(valorLitro: number) {
        const novoValordolitro = valorLitro;
        return `O novo valor do litro é R$ ${novoValordolitro}`
    }

    alterarCombustivel(tipoCombustivel: string) {
        const novoTipo = tipoCombustivel;
        return `O tipo de combustível foi alterado para ${novoTipo}`
    }

    alterarQuantidadeCombustivel(quantidadeCombustivel: number) {
        const novaQuantidadeCombustivel = quantidadeCombustivel;
        return `Após alteração, a bomba está com ${novaQuantidadeCombustivel} litros de combustível`
    }
}