import { getData, extractParams, getValue } from '../Utils';

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

  checkIfvalid(element, form) {
    let rules = getData(element, 'validate');
    rules = (rules) ? rules.split('|') : [];
    rules.forEach((fn) => {
      const [ruleName, args] = extractParams(fn);
      const rule = this.validator.is[ruleName];
      const finalArgs = [getValue(element, form), args];
      if (typeof rule === 'function') {
        if (rule.apply(this, finalArgs)) {
          this.validator.options.unhighlight(element);
        } else {
          this.validator.options.highlight(element);
        }
      }
    });
  }

}

export default Input;
