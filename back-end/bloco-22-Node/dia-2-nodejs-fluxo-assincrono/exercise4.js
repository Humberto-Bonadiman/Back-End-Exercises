const { readFile, writeFile, readFileSync } = require('fs').promises;

readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`)
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string))
  });

async function chooseOne(id) {
  const simpsons = await readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      return JSON.parse(fileContent);
    });
  const oneSimpsons = simpsons.find((simpson) => simpson.id === id);
  if(!oneSimpsons) {
    throw new Error('id não encontrado!')
  }
  return console.log(oneSimpsons);
}

chooseOne('1');

async function filterSimpsons() {
  const simpsons = await readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      return JSON.parse(fileContent);
    });
  const filterTwo = simpsons.filter((simpson) => simpson.id !== '6' && simpson.id !== '10');
  await writeFile('./simpsons.json', JSON.stringify(filterTwo));
}

filterSimpsons();

async function createLittleSimpsons() {
  const simpsons = await readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      return JSON.parse(fileContent);
    });
  const createNewJson = simpsons.filter(simpson => ['1', '2', '3', '4'].includes(simpson.id));
  await writeFile('simpsonFamily.json', JSON.stringify(createNewJson));
}

createLittleSimpsons();

async function addNelson() {
  const simpsons = await readFile('simpsonFamily.json', 'utf-8');
  const json = JSON.parse(simpsons || '[]');
  if(!Array.isArray(json)) {
    throw new Error(`Malformed JSON. Expected array, got: ${json}.`);
  }
  json.push({
    "id": "5",
    "name": "Nelson Muntz"
  });
  const jsonStringfy = JSON.stringify(json);
  await writeFile('simpsonFamily.json', jsonStringfy);
}

// addNelson(); 


async function replaceNelson() {
  return readFile('simpsonFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '5'))
    .then((simpsonsWithouNelson) => simpsonsWithouNelson
      .concat([{ id: "5", name: "Maggie Simpson"}]))
    .then((simpsonsWithMaggie) =>
      writeFile('simpsonFamily.json', JSON.stringify(simpsonsWithMaggie)));
}

replaceNelson()
  .then(() => console.log('Nelson replaced!'))
  .catch(console.error);