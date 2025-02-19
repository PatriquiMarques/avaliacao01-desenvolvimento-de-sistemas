import leia from 'readline-sync'
export default function atividade06() {
    console.log('Atividade 06');
    
    let qtdProdutos = leia.questionInt(" Digite a quantidade de produtos que você quer cadastrar")
   
    class produtos  [{nome: string; valor: number}]
     let produtos =[]

    for (let i = 0; i <= qtdProdutos; i++ ){
        leia.question("DIGITE O NOME DO PRODUTO")
        produtos.nome 

    }


  }

  /* Questão 06
Escreva um programa que permita o cadastro de N produtos. Para cada produto, solicite o nome e o preço. 
Armazene os dados em um vetor de objetos. Ao final, o programa deve:

Imprimir o nome e o preço de cada produto.
Calcular e exibir o preço médio dos produtos.
Calcular e exibir o preço total */