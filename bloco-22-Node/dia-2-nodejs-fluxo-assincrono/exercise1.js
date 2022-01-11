const fs = require('fs');
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

function callDoMath() {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomArbitrary);
  console.log(randomNumbers);
  exercise1(...randomNumbers)
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject))
}

callDoMath();

exercise1(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject))

exercise1(1, 2, 3)
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject))

exercise1('s', 5, 50)
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject))
