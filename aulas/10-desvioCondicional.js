// Desvio Condicional - IF ELSE

/* Condições simples com IF
Sintaxe: if( condição ){
    codigo a ser executado, se verdadeiro
}
*/

let anoNascimento = 2003;

if (anoNascimento > 2003) {
  console.log("A pessoa nasceu depois de 2003.");
}

if (anoNascimento < 2003) {
  console.log("A pessoa nasceu antes de 2003.");
}

if (anoNascimento == 2003) {
  console.log("A pessoa nasceu em 2003");
}

// Condicional IF-ELSE

if (anoNascimento > 2000) {
  console.log("A pessoa nasceu depois de 2000.");
} else {
  console.log("A pessoa nasceu antes de 2000.");
}

//Condicional Composta com IF

const login = "admin";
const senha = "1234";

let loginUser = "admin";
let SenhaUser = "12345";

if (loginUser == login && SenhaUser == senha) {
  console.log("Login realizado com sucesso!");
}

//Condicional Composta com IF

if (loginUser == login && SenhaUser == senha) {
  console.log("Acesso Liberado!");
} else {
  console.log("Acesso Negado!");
}

//Desvios aninhados - IF-ELSE-IF-ELSE ...

let semaforo = "Vermelho";

if (semaforo == "Vermelho") {
  console.log("Pare");
} else if (semaforo == "amarelo") {
  console.log("Atenção");
} else if (semaforo == "verde") {
  console.log("Siga");
} else {
  console.log("Opção Incorreta");
}

//Criando variaveis locais ( só existem dentro do bloco onde foram criadas )

let mes = "Janeiro";
let dia = "20";

if (dia == 20 && mes == "Janeiro") {
  let mensagem = "Hoje é dia 20 de Janeiro.";
  console.log(mensagem);
}
console.log(
  "Tentando acessar a variavel 'mensagem' fora do escopo do IF, vai dar erro!!!",
);

//console.log(mensagem);

//-------------------------------------------
//IF Ternário (IF Inline)

let preco = 100;
let resultado = preco <= 100 ? "Tá barato" : "Vish tá caro!";
console.log("Preço", preco, "-", resultado);

// O código a cima faz exatamente a mesma coisa do código a baixo

if (preco <= 100) {
  resultado = "Tá barato";
} else {
  resultado = "Vish tá caro!";
}
