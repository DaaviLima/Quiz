const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação para estilização de páginas web",
      "Uma linguagem de programação para programação de servidores",
      "Uma linguagem de programação para desenvolvimento web e interação com o navegador",
    ],
    correto: 2,
  },
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: ["var myVar;", "variable myVar;", "let myVar;"],
    correto: 0,
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um tipo de dado que armazena valores",
      "Um objeto que armazena propriedades e métodos",
      "Um bloco de código reutilizável que executa uma tarefa específica",
    ],
    correto: 2,
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Atribuição",
      "Comparação estrita de igualdade",
      "Concatenação de strings",
    ],
    correto: 1,
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Um modelo de objeto que representa o layout da página web",
      "Um tipo de dado usado para armazenar números inteiros",
      "Um formato de arquivo para armazenar dados",
    ],
    correto: 0,
  },
  {
    pergunta:
      "Como você escreve um comentário de uma única linha em JavaScript?",
    respostas: ["// Comentário", "<!-- Comentário -->", "/* Comentário */"],
    correto: 0,
  },
  {
    pergunta: "O que é uma matriz em JavaScript?",
    respostas: [
      "Um tipo de dado que armazena uma coleção ordenada de elementos",
      "Uma função que retorna um valor específico",
      "Um tipo de loop em JavaScript",
    ],
    correto: 0,
  },
  {
    pergunta:
      "Qual é o método em JavaScript usado para remover o último elemento de um array e retorná-lo?",
    respostas: ["pop()", "shift()", "push()"],
    correto: 0,
  },
  {
    pergunta:
      "O que o operador '+' faz em JavaScript quando aplicado a strings?",
    respostas: [
      "Converte a string em um número",
      "Concatena as strings",
      "Divide as strings em substrings",
    ],
    correto: 1,
  },
  {
    pergunta: "O que é uma declaração 'if' em JavaScript?",
    respostas: [
      "Um tipo de variável",
      "Uma estrutura de controle usada para executar código com base em uma condição",
      "Um tipo de loop",
    ],
    correto: 1,
  },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

//laço de repitação
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    );
    dt.querySelector('input').value = item.respostas.indexOf(resposta);
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correto

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }



    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  //colocar as perguntas na tela
  quiz.appendChild(quizItem);
}
