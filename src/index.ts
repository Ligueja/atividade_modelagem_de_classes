import { Bola } from "./bola";
import { Calculadora } from "./calculadora";
import { ContaCorrente } from "./contacorrente";
import { Contador } from "./contador";
import { BombaCombustivel } from "./BombaCombustivel";
import { Carro } from "./carro";

// 1. Crie uma classe Contador, que encapsule um valor usado para contagem de itens ou eventos. A classe deve oferecer métodos que devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contado

const contador = new Contador();

console.log ("RESPOSTA EXERCÍCIO 01: ")
console.log (contador.retornarValor());
contador.incrementar(5)
console.log (contador.retornarValor());
contador.zerar();
console.log (contador.retornarValor());


// 2. Crie uma classe que modele uma bola: 
// a. Atributos: 1- Cor, 2 - Circunferência, 3 - Material
// b. Métodos:1 - Trocar Cor 2 - Mostrar cor

const bola = new Bola();

console.log ("RESPOSTA EXERCÍCÍO 02: ")
console.log (bola.mostrarCor())
bola.trocarCor("Azul")
console.log (bola.mostrarCor())


// 3. Crie uma classe para implementar uma conta corrente. A classe deve possuir os seguintes:
// atributos: a. Número da conta b. Nome do correntista c. Saldo
// Os métodos são os seguintes: a) Alterar nome b) Deposito c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os demais atributos são obrigatórios. A conta não pode ficar com saldo negativo.

const contaBanco = new ContaCorrente(12345678, "Luiz Henrique");

console.log(contaBanco);
console.log (contaBanco.deposito(10));
console.log ("Após a alteração do nome do correntista os dados da conta ficaram:")
contaBanco.alterarNome("Fernanda");
console.log(contaBanco)
console.log (contaBanco.saque(8));
console.log (contaBanco.saque(5));

// 4. Crie uma classe para representar uma Calculadora. Esta classe deve conter um atributo que servirá para armazenar o histórico das operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar, dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

const calculadora = new Calculadora();

console.log ("RESULTADO EXERCÍCIO 04:")
console.log (calculadora.somar(2,2));
console.log (calculadora.subtrair(2,2));
console.log (calculadora.multiplicar(2,2));
console.log (calculadora.dividir(2,2));
console.log ("Histórico dos calculos:")
calculadora.imprimirHistorico()

// 5. Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no mínimo esses atributos: 1. tipoCombustivel. 2. valorLitro 3. quantidadeCombustivel
// b. Possua no mínimo esses métodos: 1. abastecerPorValor() – método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo 2. abastecerPorLitro() – método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
// 3. alterarValor() – altera o valor do litro do combustível. 4. alterarCombustivel() – altera o tipo do combustível. 5. alterarQuantidadeCombustivel() – altera a quantidade de combustível restante na bomba.
// OBS: Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba. Não deve ser possível abastecer se não tiver gasolina suficiente na bomba.

const bombacombustivel = new BombaCombustivel("Gasolina Comum", 5.39, 500);

console.log (bombacombustivel.abastecerPorValor(100.00));
console.log(bombacombustivel.abastecerPorLitro(50.00));
console.log (bombacombustivel.alterarValor(5.55));
console.log (bombacombustivel.alterarCombustivel("Gasolina Aditivada"));
console.log (bombacombustivel.alterarQuantidadeCombustivel(1000));

// 6. Implemente uma classe chamada Carro com as seguintes propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos em km / litro) e uma certa quantidade de combustível no tanque.
// b. O consumo é especificado no construtor e o nível de combustível inicial é 0.
// c. Forneça um método andar() que simula o ato de dirigir o veículo por uma certa distância, reduzindo o nível de combustível no tanque de gasolina.
// d. Forneça um método obterGasolina(), que retorna o nível atual de combustível e forneça um método adicionarGasolina(), para abastecer o tanque.


const carro = new Carro(13);
carro.adicionarGasolina(50)
console.log (carro.andar(500));
carro.obterGasolina();
