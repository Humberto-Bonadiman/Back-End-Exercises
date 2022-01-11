const readline = require('readline-sync');

const distancia = readline.questionFloat("Qual é a distância percorrida (m)?");
const tempo = readline.questionFloat("Qual é o tempo do percurso (s)?");

function velocidadeMedia () {
  const velocidade = distancia / tempo;

  console.log(`A velocidade média é ${velocidade} m/s`);
}

velocidadeMedia();