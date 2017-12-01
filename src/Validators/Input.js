import { addClass, getData, extractParams, getIdOrName, formatMessage } from '../Utils';

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
    });
    return promise;
  }

  validateElem(resolve, reject) {
    this.context.forEach((form) => {
      const elements = this.validator.select(`:selectElem(:not(${this.validator.options.ignore}):split:formEle)`, form);
      const valid = elements.every(element => this.checkIfvalid(element));
      resolve(valid, form, []);
    });
  }

  checkIfvalid(element, form) {
    this.prepareElement(element, form);
    let rules = getData(element, 'validate');
    rules = (rules) ? rules.split('|') : [];
    const isValid = rules.every((fn) => {
      const [ruleName, args] = extractParams(fn);
      const rule = this.validator.is[ruleName];
      const finalArgs = [this.getValue(element, form), args];
      if (typeof rule === 'function') {
        if (!rule.apply(this, finalArgs)) {
          this.error(element, form, ruleName, args);
          return false;
        }
      }
      return true;
    });

    if (isValid) {
      this.success(element, form);
    }
    return isValid;
  }

  success(element, form) {
    this.validator.options.unhighlight(element);
  }

  error(element, form, ruleName, args) {
    const options = this.validator.options;
    options.highlight(element);
    const error = document.createElement(options.errorElement);
    error.setAttribute('id', `${getIdOrName(element)}-error`);
    addClass(error, options.errorClass);
    error.innerHTML = formatMessage(this.validator.messages[ruleName], args);
    options.errorPlacement(error, element);
  }

  prepareElement(element, form) {
    const errors = this.validator.select(`#${getIdOrName(element)}-error`, form);
    if (errors.length) {
      errors[0].parentNode.removeChild(errors[0]);
    }
  }

  getValue(element, form) {
    const type = element.type;

    if (type === 'radio' || type === 'checkbox') {
      if (!element.name) {
        return '';
      }
      const inputs = this.validator.select(`[name=${element.name}]:checked`, form);
      return (inputs.length) ? inputs[0].value : '';
    }

    let val = null;
    let idx = null;
    if (element.hasAttribute('contenteditable')) {
      val = element.textContent;
    } else {
      val = element.value;
    }

    if (type === 'file') {
      // Modern browser (chrome & safari)
      if (val.substr(0, 12) === 'C:\\fakepath\\') {
        return val.substr(12);
      }

      // Legacy browsers
      // Unix-based path
      idx = val.lastIndexOf('/');
      if (idx >= 0) {
        return val.substr(idx + 1);
      }

      // Windows-based path
      idx = val.lastIndexOf('\\');
      if (idx >= 0) {
        return val.substr(idx + 1);
      }

      // Just the file name
      return val;
    }

    if (typeof val === 'string') {
      return val.replace(/\r/g, '');
    }

    return val;
  }

}

export default Input;
