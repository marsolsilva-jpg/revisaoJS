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
// const comidas = ["banana", "maçã", "uva", "limão", "abóbora", "beterraba", "rabanete"];

// const frutas = comidas.filter(comida => comida = "banana" || comida === "maçã" || comida === "uva" || comida === "limão");

// const legumes = comidas.filter(comida => comida === "abóbora" || comida === "beterraba" || comida === "rabanete");

// console.log("Frutas:", frutas);
// console.log("Legumes:", legumes);
// // .filter()
// const salarios = [1200, 50, 100, 1350, 300, 1450];

// const salariosAltos = salarios.filter(salario => salario >= 1000);
// const salariosBaixos = salarios.filter(salario => salario < 1000);

// console.log("Salários altos:", salariosAltos);
// console.log("Salários baixos:", salariosBaixos);
// ========================================================================
// const carrinho = [10, 20.5, 30];
// const total = carrinho.reduce((acc, p) => acc + p, 0);

// console.log(total); 

// const nomes = ['Ana', 'Carlos', 'João'];
// nomes.forEach(n => console.log(`Olá, ${n}`));
// ========================================================================
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const resultados = numeros.filter(n => n % 2 === 0).map(n => n * 5);
// console.log(resultados)
// ========================================================================
// const a = [1,2]
// const b = [3,4]
// const c = [...a,...b]

// const user = {nome: 'ana', idade:30}
// const {nome,idade} = user
// console.log(nome)
// ========================================================================
//ATV
const alunos = [
{ nome:"Edio",nota:8.5 },  //  
{ nome:"Bernardo",nota:5.0 },
{ nome:"Felipe",nota:10.0 },//
{ nome:"Mariana",nota:4.5 },
{ nome:"Jozé",nota:9.0 },//
{ nome:"Josué",nota:6.2 },
{ nome:"Ana",nota:3.0 },
{ nome:"Luiza",nota:7.5 },//
{ nome:"Leticia",nota:5.5 },
{ nome:"Marsol",nota:2.0 }
];

const Aprovados =alunos.filter(aluno =>aluno.nota >=7);

console.log("-- APROVADOS --");
console.log(Aprovados);
