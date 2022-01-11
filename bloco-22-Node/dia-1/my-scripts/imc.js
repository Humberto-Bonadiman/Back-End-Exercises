const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso? (em kg) ');
const altura = readline.questionInt('Qual a sua altura? (em cm) ');

function calculaImc () {

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);

  if (imc < 18.5) {
    console.log("Abaixo do peso (magreza)")
  } else if (imc > 18.5 && imc <= 24.9) {
    console.log("Peso normal")
  } else if (imc > 24.9 && imc <= 29.9) {
    console.log("Acima do peso (sobrepeso)")
  } else if (imc > 29.9 && imc <= 34.9) {
    console.log("Obesidade grau I")
  } else if (imc > 34.9 && imc <= 39.9) {
    console.log("Obesidade grau II")
  } else {
    console.log("Obesidade graus III e IV")
  }
}

calculaImc();
