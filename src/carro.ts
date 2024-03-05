export class Carro {
    constructor (private consumoMedio: number, private quantidadeTanque: number = 0) 
    {}

    andar(distancia: number) {
        const litrosConsumidos = distancia / this.consumoMedio;
        this.quantidadeTanque -= litrosConsumidos;
        
        if(this.quantidadeTanque <= 0) {
            return `Combustível insuficiente para rodar essa dintância de ${distancia} km.`
        } else {
            return `O veículo circulou por ${distancia} km, e consumiu ${litrosConsumidos.toFixed(2)}, ficando o tanque com ${this.quantidadeTanque.toFixed(2)} litros.`
        }
    }

    obterGasolina(): void {
        this.quantidadeTanque
        console.log(`O tanque está com ${this.quantidadeTanque.toFixed(2)} litros`)
    }

    adicionarGasolina(quantidadeLitros: number) {
        this.quantidadeTanque = quantidadeLitros
    }
}
