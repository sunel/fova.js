
import Selector from './Selector';

class Validator {

  constructor(form, rules) {
    this.expression = form;
    this.rules = rules || {};
  }

  static select() {
    return new Selector();
  }

}

export default Validator;
