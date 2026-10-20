// =========================================================================
// const textoDecimal = '123.45'
// const numeroConvertido = Number(textoDecimal)
// const total = numeroConvertido + 10
// console.log(total);
// =========================================================================
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(100));
// console.log(Boolean("Gato"));
// =========================================================================
// let saldo = 100
// saldo += 50 // 150
// saldo -= 16 // 134
// saldo *= 2 // 268
// saldo /= 4 // 67

// console.log("Saldo Final:", saldo) // Saída: 67
// =========================================================================
// const idade = 50
// const mensagem = idade >= 60 ? 'Aposentado' : 'Não está Aposentado'
// console.log(mensagem) 
// ========================================================================
// const num = 1
// const num2 = 2
// const num3 = 3

// const color = 1;

// switch (color) {
//     case 1: 
//         console.log('Pare');
//         break;
//     case 2:
//          console.log('Atenção');
//         break;
//     case 3: 
//     console.log('Siga');
//         break;
// }
// ========================================================================
// const frutas = ['uva', 'pera', 'maçã'];

// for (const fruta of frutas) {
//     console.log("Fruta da vez:", fruta);
// } 
// ========================================================================
// let j = 0;

// while (j < Infinity) {
//     console.log("Valor de j:", j);
//     j++; 
// } 
// ========================================================================
// let contador = 10;

// while (contador >= 1) {
//     console.log("Contagem:", contador);
//     contador--; 
// }

// console.log("DECOLAR!");
// ========================================================================
// const nums = [1, 2, 3, 4];
// const triplo = nums.map(n => n * 3);
// console.log(triplo); // [3, 6, 9, 12]

// const idades = [12, 17, 18, 22, 15, 30];
// const maiores = idades.filter(i => i >= 18);
// console.log(maiores); // [18, 22, 30]
// ========================================================================
//MAP=========================================================================================================================================
// .map()
// .map()
const comidas = ["banana", "maçã", "uva", "limão", "abóbora", "beterraba", "rabanete"];

const frutas = comidas.filter(comida => comida = "banana" || comida === "maçã" || comida === "uva" || comida === "limão");

const legumes = comidas.filter(comida => comida === "abóbora" || comida === "beterraba" || comida === "rabanete");

console.log("Frutas:", frutas);
console.log("Legumes:", legumes);
// .filter()
const salarios = [1200, 50, 100, 1350, 300, 1450];

const salariosAltos = salarios.filter(salario => salario >= 1000);
const salariosBaixos = salarios.filter(salario => salario < 1000);

console.log("Salários altos:", salariosAltos);
console.log("Salários baixos:", salariosBaixos);