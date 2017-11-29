
import Selector from './Selector';
import BaseValidator from './Rules';
import defaultOptions from './Options';
import InputValidator from './Validators/Input';

const version = '0.0.0';

class Validator {

  constructor() {
    this.version = version;
    this.options = defaultOptions;
    this.selector = new Selector();
    Object.assign(this, BaseValidator);
  }

  setDefaults(options) {
    Object.assign(this.options, options);
  }

  check(element) {
    return new InputValidator(this.select(element), this);
  }

  select(expression, context) {
    return this.selector.find(expression, context);
  }

}

export default Validator;
