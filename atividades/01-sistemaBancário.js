/***************************************************** 
Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta; 
*/

let nome = "Roberto";
let bank = "TaDuroBank";
let agencia = 1234;
let conta = 4002;
let saldo = 1518;
let x = 200;
let y = 100;
let c = 500;
let v = 350;
let b = 600;

let soma = x + y;

let subtracao = x - y;

console.log("----------------", bank, "----------------");
console.log("imprimindo dados...");
console.log("Nome:", nome);
console.log("Bank:", bank);
console.log("Número de Agência:", agencia);
console.log("Numero da Conta:", conta);
console.log("Saldo: R$", saldo);
console.log("--------------------PIX--------------------");

console.log("Você Transferiu",x ,"Reais, Restou R$", saldo -= x);
console.log("Você Transferiu",y ,"Reais, Restou R$", saldo -= y);
console.log("Você Recebeu",c ,"Reais, Restou R$", saldo += v);
console.log("Você Transferiu",v ,"Reais, Restou R$", saldo -= c);
console.log("Você Recebeu",b ,"Reais, Restou R$", saldo += b);
console.log("-------------------------------------------");

console.log("----------------", bank, "----------------");
console.log("imprimindo dados...");
console.log("Nome:", nome);
console.log("Bank:", bank);
console.log("Número de Agência:", agencia);
console.log("Numero da Conta:", conta);
console.log("Saldo: R$", saldo);
console.log("-------------------------------------------");
