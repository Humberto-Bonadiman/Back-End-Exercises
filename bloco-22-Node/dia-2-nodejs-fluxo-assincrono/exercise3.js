const fs = require('fs').promises;

function exercise1 (param1, param2, param3) {
  return new Promise((resolve, reject) => {
    if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number')
      return reject('Informe apenas números');
    const result = (param1 + param2) * param3;
    if (result < 50) {
      return reject('Valor muito baixo!')
    }
    resolve(result);
  })
}

function getRandomArbitrary() {
  return Math.floor(Math.random() * 100 + 1);
}

async function callDoMath() {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomArbitrary);
  try {
    const result = await exercise1(...randomNumbers);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

callDoMath();