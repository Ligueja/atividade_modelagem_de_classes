export class ContaCorrente {

        constructor (private numeroConta: number, private nomeCorrentista: string, private saldo?: number) {
            this.saldo = saldo ?? 0;
    }

    alterarNome(novoNome: string): void {
        this.nomeCorrentista = novoNome;
    }

    deposito(valor: number) {
        if (this.saldo !== undefined) {
            this.saldo += valor;
            return `Após o depósito o valor do saldo na conta é R$ ${this.saldo}.`
        }
    } 

    saque (valor: number) {
        if (this.saldo !== undefined && valor < this.saldo) {
            this.saldo -= valor;
            return `Após o saque de R$ ${valor} o valor do saldo na conta é R$ ${this.saldo}.`
        } else {
            return `Saque de R$ ${valor} não permitido: Saldo insuficiente.`
        }
    }

    }
