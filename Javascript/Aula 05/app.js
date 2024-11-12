var lista = [10, 3, 10, 12, 7, 32, 15];
var listaReverse = [];

for (let i = lista.length - 1; i >= 0; i--) {
    console.log(lista[i]);
    listaReverse.push(lista[i])
}

console.log(listaReverse)