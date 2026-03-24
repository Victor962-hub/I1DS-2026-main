//Operadores de incremento e decremento | pré e pós incremento
// incrementar => A somar algo a alguma variavel
// descremento => subtrair algo de alguma variavlel

let idade = 16;
console.log(idade);

//idade = idade + 1; => soma1 1 na idade
idade++;
console.log(idade);
idade++;
console.log(idade);
console.log("-------------------------------------------");
//idade = idade - 1; => subtrair1 1 na idade

idade--;
console.log(idade);
idade--;
console.log(idade);

let novaIdade = idade + 1;
console.log("idade:", idade, "| Nova Idade:", novaIdade);

novaIdade = idade++;
console.log("idade:", idade, "| Nova Idade:", novaIdade);
