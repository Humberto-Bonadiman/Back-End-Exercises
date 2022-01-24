const Cep = require('../models/Cep');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (searchedCep) => {
  if (!CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }

  const cep = await Cep.findAdressByCep(searchedCep);

  if (cep) {
    return cep;
  }

  const cepFromApi = await ViaCep.lookupCep(searchedCep);

  if (!cepFromApi) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  return Cep.create(cepFromApi);
};

module.exports = {
  findAddressByCep,
};
