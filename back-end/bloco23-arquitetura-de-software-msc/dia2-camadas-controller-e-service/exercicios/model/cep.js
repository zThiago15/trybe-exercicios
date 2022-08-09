const { connection } = require("./connection");

const searchCep = async (cep) => {
  const [foundCep] = await connection.execute('SELECT cep FROM ceps WHERE cep = ?', [cep]);

  return foundCep;
};

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {

  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)';
  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
}

module.exports = { searchCep, createCep };