export class Bola {
 
    constructor(private cor: string = "vermelha", private circunferencia: number = 10,  private material: string = "couro") {
    }

    mostrarCor() {
        return `A bola de cor ${this.cor}, tem uma circunferência de ${this.circunferencia} cm, e é feita de ${this.material}`;
        
    }

    trocarCor(cor: string) {
       return this.cor = cor;
    }
}