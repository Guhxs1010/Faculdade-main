// for(let i = 10; i >= 0; i--){

//     document.write(`${i} </br>`)
// }

// let valor_1 = Number(prompt("Primeiro valor: "));
// let valor_2 = Number(prompt("Segundo valor: "));
// let resultado = 0;

// for(let i = valor_2; i >= 1; i--){
//     resultado += valor_1;
// }

// console.log(resultado);

// let valor_1 = Number(prompt("Primeiro valor: "));
// let valor_2 = Number(prompt("Segundo valor: "));
// let vezes = 0;
// let contador = 0;

// for(let i = 0; vezes <= valor_1; i++){
//     vezes += valor_2;
//     contador = i;
// }

// console.log(contador);

// let i = 20;

// while(i <= 10){
//     document.write(`${i} </br>`);
//     i++
// }

let j = 10;

do{
    console.log(j);
    j = Number(prompt("Digite um número diferente de 10 para executar de novo"));
}while(j != 10);
