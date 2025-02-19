import leia from 'readline-sync'
export default function atividade03() {
  console.log('Atividade 03');
  
  let numUsuario = leia.questionInt("Digite  1 Papel, 2 Pedra ou 3 Tesoura : ");
  let numAleatorio =  Math.trunc(Math.random() * 3) +1;
   if (numUsuario !== numAleatorio) {

      if (numUsuario === 1 && numAleatorio === 2){
         console.log( " Voce venceu papel vence Pedra")

      } else if  (numUsuario === 1 && numAleatorio === 3){
        console.log( " Voce perdeu tesoura vence papel")

      } else if  (numUsuario === 2 && numAleatorio === 1){
         console.log( " Voce perdeu papel vence Pedra")

      } else if  (numUsuario === 2 && numAleatorio === 3){
        console.log( " Voce venceu papel vence Pedra")
    

      } else if  (numUsuario === 3 && numAleatorio === 1){
        console.log( " Voce venceu tesoura vence papel")

      } else if  (numUsuario === 3 && numAleatorio === 2){
        console.log( " Voce perdeu pedra vence tesoura")
      }
  } else{
    console.log("EMPATE")
  }
   console.log(numAleatorio)

}


/*Escreva um programa que simule o jogo "Pedra, Papel e Tesoura". O usuário deve informar sua escolha, e o computador
 deve fazer uma escolha aleatória. O programa deve determinar o vencedor com base nas seguintes regras:
Pedra vence Tesoura.
Tesoura vence Papel.
Papel vence Pedra. */