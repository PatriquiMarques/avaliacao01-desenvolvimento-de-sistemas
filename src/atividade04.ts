import leia, { question, questionInt } from 'readline-sync'
export default function atividade04() {  
  console.log('Atividade 04');

  let numAleatorio =  Math.trunc(Math.random() * 100);
  let numUsuario;

  do{

    let numUsuario = leia.questionInt (" DÊ UM PALPITE ");
     if(numUsuario < numAleatorio){
      console.log(` O NÚMERO É MAIOR QUE ${numUsuario}`);
     }else if (numUsuario > numAleatorio){
      console.log(` O NÚMERO É MENOR QUE ${numUsuario}`);
      } else{
        console.log(`PARABÉNS VOCê ACERTOU O NÚMERO SECRETO ${numAleatorio}`)
      }
     } while (numUsuario !== numAleatorio);

    

  

}

/* Crie um programa de adivinhação de números. O computador deve escolher aleatoriamente um número entre 1 e 100, 
e o usuário deve tentar adivinhar. Após cada tentativa, o programa deve informar se o número correto é maior ou menor que a tentativa. 
O jogo termina quando o usuário acertar o número. */