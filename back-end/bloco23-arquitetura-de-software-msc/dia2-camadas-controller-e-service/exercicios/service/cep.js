const { searchCep, createCep } = require('../model/cep')

const findCep = async (cep) => {

  const foundCep = await searchCep(cep);

  if(foundCep.length === 0) {
    return false;
  }

  return foundCep;
}

const validateFields = (data) => {
  const { cep, logradouro, bairro, localidade, uf } = data;

  if (!cep || !logradouro || !bairro || !localidade || !uf) {
    return false;
  }

  return true;
}

const generateCep = async (data) => {
  const { cep } = data;

  const cepExists = await findCep(cep);
  if (cepExists) {
    return false;
  }

  await createCep(data);
  return true;
}

module.exports = { findCep, validateFields, generateCep };