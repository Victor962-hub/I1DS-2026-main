/*****************************************************
            Atividade / Desafiadora
*****************************************************/
/*
    Crie uma função que receba a idade de uma pessoa e
    retorne uma frase dizendo se ela pode votar ou não, 
    e se o voto é obrigatório ou opcional.
*/

function permissaoVoto(idade) {
  let frase;
  if (idade < 16) {
    frase = "Não pode Votar ";
  }
  if (idade >= 18 && idade <= 65) {
    frase = "Pode votar, e é obrigatório!";
  } else {
    frase = "Pode votar, mas é opicional!";
  }
  return frase;
}
let idade = 25;
console.log("Idade:", idade, "-", permissaoVoto(idade));
idade = 25;

/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/

function notaS(Nota) {
  let frase;
  if (Nota < 5) {
    frase = "Está Reprovado!";
  } else if (Nota >= 5 && Nota <= 6.9) {
    frase = "Você de recuperação";
  }if (Nota >= 7 && Nota <= 10)
    frase = "Você está acima da Média!";
  
  return frase;
}
let Nota = 10;
console.log("Nota:", Nota, "-", notaS(Nota));
Nota = 5;

//outra forma do Exercício:

function Notas(notas) {
  if (notas < 5){
  return "Reprovado";
  }else if (notas < 7) {
  return "Recuperação";
  }else {
  return "Aprovado"
  }
}

console.log(Notas(5));
console.log(Notas(7));



