// let maior = 0;
// let menor = 0;

// for (let i = 0; i < 10; i++) {

//     numero = Number(prompt(`Digite o ${i}º`))

//     if (numero > maior) {
//         maior = numero;
//     }
//     else {
//         menor = numero;
//     }
    
// }

// console.log(maior)
// console.log(menor)

let maior = 0;
let menor = 0;
let soma = 0;

for (let i = 0; i <= 10; i++){

n = Number(prompt('Digite um termo: '));

if(i == 0){
    maior = n;
    menor = n;
}

if(n > maior){
    maior = n;
}

if(n < menor){
    menor = n;
}

soma += n;
}

console.log(maior);
console.log(menor);
console.log(soma/10);