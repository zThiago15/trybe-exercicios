const sinon = require('sinon');
const { expect } = require('chai');

const MoviesController = require('../../controllers/movieController');
const MoviesService = require('../../services/movieService');


describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create').resolves(false);
    })

    after(() => {
      MoviesService.create.restore();
    })

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create').resolves(true);
    })

    after(() => {
      MoviesService.create.restore();
    })

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });
});

describe('ao chamar o controller getById', () => {
  describe('quando o id informado não é válido', () => {
    const req = {};
    const res = {};

    before(() => {
      req.params = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(MoviesService, 'getById').resolves(false);
    });

    after(() => {
      MoviesService.getById.restore();
    });

    it('retorna status 404', async () => {
      await MoviesController.getById(req, res);

      expect(res.status.calledWith(404)).to.be.equal(true);
    });

    it('retorna a mensagem "id inválido!"', async () => {
      await MoviesController.getById(req, res);

      expect(res.json.calledWith({ message: 'id inválido!' })).to.be.equal(true);
    });
  });

  describe('quando id é passado com sucesso', () => {
    const req = {};
    const res = {};
    
    const movie = { 
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      req.params = { id: 1 };

      res.status = sinon.stub().returns(res);

      res.json = sinon.stub().returns();

      sinon.stub(MoviesService, 'getById').resolves(movie);
    });

    after(() => {
      MoviesService.getById.restore();
    });

    it('retorna o status 200', async () => {
      await MoviesController.getById(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('retorna o objeto com as informaçõe do filme', async () => {
      await MoviesController.getById(req, res);

      expect(res.json.calledWith(movie)).to.be.equal(true);
    });

  })

});