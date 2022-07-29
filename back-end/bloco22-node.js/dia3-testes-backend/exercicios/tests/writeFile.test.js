const { expect } = require('chai');

const fs = require('fs');
const sinon = require('sinon');

const { writeFile } = require('../writeFile');

describe('ao escrever arquivo de forma', ()=> {
  describe('correta', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync');
    })
  
    after(() => {
      fs.writeFileSync.restore();
    })


    describe('o retorno', () => {
      it('será ok', () => {
        const saida = writeFile('arquivo.txt', 'meu conteúdo');
    
        expect(saida).to.be.equals('ok');
      })
  
      it('será do tipo string', () => {
        const saida = writeFile('arquivo.txt', 'sopa');
  
        expect(saida).to.be.a('string');
      })
    })

  })
  
  describe('incorreta', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync')
        .throws(new Error('não foi possível escrever arquivo'));
    })

    after(() => {
      fs.writeFileSync.restore();
    })

    describe('retornará', () => {
      it('a mensagem "não foi possível escrever arquivo"', () => {
        const saida = writeFile('arquivo.txt', 'utilizando metodologia TDD! #VQV');
        
        expect(saida).to.be.equal('não foi possível escrever arquivo');

      })
    })
  })

})
