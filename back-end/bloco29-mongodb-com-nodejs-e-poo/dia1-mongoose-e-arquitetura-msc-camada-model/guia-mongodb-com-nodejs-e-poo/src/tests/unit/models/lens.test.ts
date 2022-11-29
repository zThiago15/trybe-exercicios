import LensModel from "../../../models/Lens";
import sinon from 'sinon';
import { Model } from "mongoose";
import { expect } from "chai";
import { lensesMock, lensesMockWithId, allLensesMock } from "../../mocks/LensesMock";

describe('Lens Model', () => {
  const lensModel = new LensModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(lensesMockWithId);
    sinon.stub(Model, 'findOne').resolves(lensesMockWithId);
    sinon.stub(Model, 'find').resolves(allLensesMock);
    sinon.stub(Model, 'findByIdAndDelete').resolves(lensesMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a lens', () => {
    it('successfuly created', async () => {
      const newLenses = await lensModel.create(lensesMock);
      expect(newLenses).to.be.deep.equal(lensesMockWithId);
    })
  });

  describe('searchign a lens', () => {
    it('successfully found', async () => {
      const lensesFound = await lensModel.readOne('62cf1fc6498565d94eba52ce');
      expect(lensesFound).to.be.deep.equal(lensesMockWithId);
    });

    it('_id not found', async () => {
      try {
        await lensModel.readOne('23incorrect');
      } catch(err: any) {
        expect(err.message).to.be.equal('InvalidMongoId');
      }
    })
  })

  describe('searching all lens', () => {
    it('successfully found', async () => {
      const lensesFound = await lensModel.read();
      expect(lensesFound).to.be.deep.equal(allLensesMock);
    });
  });

  describe('removing a lens', () => {
    it('successfully deleted', async () => {
      const lensesDeleted = await lensModel.destroy('62cf1fc6498565d94eba52cd');
      expect(lensesDeleted).to.be.deep.equal(lensesMockWithId);
    });

    it('_id not found', async () => {
      try {
        await lensModel.destroy('incorrect54');
      } catch(err: any) {
        expect(err.message).to.be.equal('InvalidMongoId');
      }
    })
  });
});
