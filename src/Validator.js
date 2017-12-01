
import Selector from './Selector';
import BaseValidator from './Rules';
import defaultOptions from './Options';
import InputValidator from './Validators/Input';
import EnMessages from './i18n/en';

const version = '0.0.0';

class Validator {

  constructor() {
    this.version = version;
    this.options = defaultOptions;
    this.selector = new Selector();
    this.messages = EnMessages;
    Object.assign(this, BaseValidator);
  }

  setDefaults(options) {
    Object.assign(this.options, options);
  }

  setMessages(messages) {
    Object.assign(this.messages, messages);
  }

  check(element) {
    return new InputValidator(this.select(element), this);
  }

  select(expression, context) {
    return this.selector.find(expression, context);
  }

}

export default Validator;
