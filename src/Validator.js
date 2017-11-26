
import Selector from './Selector';
import BaseValidator from './Rules';

const version = '0.0.0';

class Validator {

  constructor() {
    this.version = version;
    this.validator = this;
    this.context = [];
    Object.assign(this, BaseValidator);
  }

  check(form) {
    this.context = Validator.select(form);
    return this;
  }

  valid() {
    const promise = new Promise((resolve, reject) => {
      if (!this.context.length) {
        reject('Context to be validated is not given');
      }
      this.validateForm(resolve, reject);
      resolve(this.context, this.validator);
    });
    return promise;
  }

  validateForm(resolve, reject) {
    this.context.forEach((form) => {
      console.log(Validator.select(':input, [contenteditable]', form));
    });
  }

  static select(expression, context) {
    return new Selector(expression).matchs(context);
  }

}

export default Validator;
