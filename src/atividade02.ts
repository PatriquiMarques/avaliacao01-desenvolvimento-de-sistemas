import leia from 'readline-sync'
export default function atividade02() {
  console.log('Atividade 02');

  
  let idade = leia.questionInt ('DIGITE A IDADE DA PESSOA: ');

  if (idade < 12){
    console.log("ESSA PESSOA É UMA CRIANÇA");

  }else  if (idade >= 12 && idade <= 17){
    console.log("ESSA PESSOA É UM ADOLESCENTE");

  }else  if (idade >= 18 && idade <= 59){
    console.log("ESSA PESSOA É UM ADULTO");

   }else  if (idade >= 60){
    console.log("ESSA PESSOA É UM IDOSO");

  }
}



/*Escreva um programa que peça ao usuário a idade de uma pessoa e determine sua categoria com base nas seguintes regras:

Menor de 12 anos: "Criança"
De 12 a 17 anos: "Adolescente"
De 18 a 59 anos: "Adulto"
60 anos ou mais: "Idoso" 



*/