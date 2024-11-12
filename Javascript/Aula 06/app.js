let calabresa = {
    id: 1,
    nome: "Pizza de Calabresa",
    precoBroto: 15.00,
    precoMedio: 49.99,
    precoGiga: 99.99,
    ingredientes: "Molho de Tomatoes, calabresa fatiada, cebolas e azeitona"
};

console.log(calabresa);

function Pizza(nome, precoBroto, precoMedio, precoGiga, ingredientes){
    this.nome = nome;
    this.precoBroto = precoBroto;
    this.precoMedio = precoMedio;
    this.precoGiga = precoGiga;
    this.ingredientes = ingredientes;

    function printData(){
        return `Nome: ${this.nome}\n
                Preco Brotinho: ${this.precoBroto}\n
                Preco Média: ${this.precoMedio}\n
                Preco Giga: ${this.precoGiga}\n
                Ingredientes: ${this.ingredientes}\n`
    }
}

let bacon = new Pizza("Pizza Suprema de Bacon", 30.00, 60.00, 500, "Bacon, mussarela e muito bacon, põe mais bacon ainda e azeitonas e mais bacon");