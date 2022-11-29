const { expect } = require('chai');
const sinon = require('sinon');

const MoviesService = require('../../services/movieService');
const MoviesModel = require('../../models/movieModel');
const connection = require('../../models/connection');


/*
  Precisamos validar se estamos recebendo todos os campos
  necessários para a operação. Como trata-se de uma regra
  de negócio, validaremos na camada de serviços.
*/

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });


describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    // Restauraremos a função `create` original após os testes.
    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.an('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('buscar um filme pelo ID', () => {


  describe('quando um id é passado com sucesso', () => {
    before(() => {
      const movie = [{
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      }];

      sinon.stub(connection, 'execute').resolves(movie);
    });
  
    after(() => {
      connection.execute.restore();
    });
    
    const id = '1';
    
    it('retorna um objeto', async () => {
      const response = await MoviesService.getById(id);

      expect(response).to.be.an('object');
    });

    it('retorna as propriedades title, directedBy, releaseYear com os valores corretos', async () => {
      const response = await MoviesService.getById(id);

      expect(response).to.have.all.keys('title', 'directedBy', 'releaseYear');
    });

  });

  describe('quando um id é inválido', () => {
    const id = {};

    it('retorna boolean', async () => {
      const response = await MoviesService.getById(id);

      expect(response).to.be.a('boolean');
    });

    it('retorna boolean com o valor false', async () => {
      const response = await MoviesService.getById(id);

      expect(response).to.be.equal(false);
    })
  });

});