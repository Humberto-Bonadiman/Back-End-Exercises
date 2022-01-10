const readline = require('readline-sync');

console.log('Jogo da Adivinhação');

function sorteio() {
  const sorteado = Math.round(Math.random() * (10 - 1) + 1);

  const palpite = readline.questionInt('Qual o seu palpite entre 1 à 10? ');

  console.log(`O número sorteado foi ${sorteado}`)

  if (sorteado === palpite) {
    console.log('Parabéns, você acertou!!')
  } else {
    console.log('Que pena! Quem sabe na próxima')
  }
}

sorteio();