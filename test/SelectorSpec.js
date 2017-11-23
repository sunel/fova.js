import { expect } from 'chai';
import Selector from '../src/Selector';

describe('Selector', () => {

  describe('selector.all()', () => {

    it('should return welcome message for a guest user', () => {
      const selector = new Selector('#match');
      const message = selector.all();
      expect(message).to.be.equal('Welcome, Guest!');
    });

    it('should return welcome message for a named user', () => {
      const selector = new Selector('.match');
      const message = selector.all();
      expect(message).to.be.equal('Welcome, John!');
    });

  });

});
