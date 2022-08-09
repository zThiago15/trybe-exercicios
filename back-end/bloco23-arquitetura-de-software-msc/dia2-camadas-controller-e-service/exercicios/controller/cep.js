const { findCep, validateFields, generateCep,  } = require("../service/cep");
const regexCep = /^\d{5}-?\d{3}$/;

const getCep = async (req, res, next) => {
  const { cep } = req.params;


  if (!regexCep.test(cep)) {
    return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });
  }

  const searchCep = await findCep(cep);

  if (!searchCep) {
    return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } });
  }

  return res.status(200).json(searchCep);
}

const buildCep = async (req, res, next) => {
  const { cep } = req.body;
  
  const valid = validateFields(req.body);
  if (!valid) {
    return res.status(400).json({ "error": { "code": "invalidData", "message": "campos obrigatórios" } });
  }

  if (!regexCep.test(cep)) {
    return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });
  }

  const creatingCep = await generateCep(req.body);
  if (!creatingCep) {
    return res.status(409).json({ "error": { "code": "alreadyExists", "message": "CEP já existente" }})
  }

  return res.status(201).json(req.body);
}

module.exports = { getCep, buildCep };