// Criando variaveis do tipo Array (Vetor)

var dinos = ["Tiranossauro Rex", "Estegossauro", "Brontossauro"];

// Imprimindo os dados em forma de linha
console.log(dinos);
// Imprimindo os dados em forma de tabelas
console.table(dinos);

// length -> "Tamanho" do Array (Quantidade de Elementos)
console.log("O Vetor tem", dinos.length, "elementos");

// Imprimir Elementos a partir do indice
console.log(dinos[2]);

//push -> Adiciona um novo elemento no final da fila
dinos.push("Anquilossauro");
console.table(dinos);
console.log("O Vetor tem", dinos.length, "elementos");

//unshift -> Adiciona um novo elemento no inicio da fila
dinos.unshift("Velociraptor");
console.table(dinos);
console.log("O Vetor tem", dinos.length, "elementos");

// Obter um Elemento a partir do indice
console.log("1ª posição:", dinos[0]);
console.log("4ª posição:", dinos[3]);
console.log("20ª posição (não existente)", dinos[20]);
