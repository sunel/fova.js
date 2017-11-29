import { getData, extractParams } from '../Utils';

class Input {
  constructor(context, validator) {
    this.context = context;
    this.validator = validator;
  }

  valid() {
    const promise = new Promise((resolve, reject) => {
      if (!this.context.length) {
        reject('Context to be validated is not given');
      }
      this.validateElem(resolve, reject);
      resolve(this.context);
    });
    return promise;
  }

  validateElem(resolve, reject) {
    this.context.forEach((form) => {
      const elements = this.validator.select(`:selectElem(:not(${this.validator.options.ignore}):split:formEle)`, form);
      elements.forEach((element) => {
        this.checkIfvalid(element);
      });
    });
  }

  checkIfvalid(element) {
    let rules = getData(element, 'validate');
    rules = (rules) ? rules.split('|') : [];
    rules.forEach((fn) => {
      console.log(extractParams(fn));
      const rule = this.validator.is[fn];
      if (typeof rule === 'function') {
        if (rule(element.value)) {
          this.validator.options.unhighlight(element);
        } else {
          this.validator.options.highlight(element);
        }
      }
    });
  }

}

export default Input;
