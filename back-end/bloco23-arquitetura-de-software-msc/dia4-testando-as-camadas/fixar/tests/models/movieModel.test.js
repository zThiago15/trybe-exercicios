const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');

describe(('Inserir novo filme no BD'), () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute); // a função 'execute', irá retornar o array com objeto que definimos
  })

  after(async () => {
    // restaurar a função
    connection.execute.restore();
  })

  describe('quando é inserido com sucesso', () => { 

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
      
      expect(response.id).to.be.equal(1);
    });

  });
});

describe('Selecionar um filme pelo ID', () => {
  const id = 1;

  before(async () =>{
    const execute = [{
      title: 'Inception', 
      directed_by: 'Christopher Nolan', 
      release_year: 2010
    }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é passado o ID com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.getById(id);

      expect(response).to.be.a('object');
    });

    it('ter as propriedades title, directed_by, release_year com os valores corretos', async () => {
      const response = await MoviesModel.getById(id);

      expect(response).to.have.a.property('title');
      expect(response.title).to.be.equal('Inception');

      expect(response).to.have.a.property('directed_by');
      expect(response.directed_by).to.be.equal('Christopher Nolan');

      expect(response).to.have.a.property('release_year');
      expect(response.release_year).to.be.equal(2010);
    });
  });

});
