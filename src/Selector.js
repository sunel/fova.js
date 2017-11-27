import sizzle from 'sizzle';

class Selector {

  constructor(expression) {
    this.expression = expression;
    Selector.addFormPseudos();
  }

  static addFormPseudos() {
    sizzle.selectors.pseudos.formEle = (elem) => {
      if (sizzle.selectors.pseudos.disabled(elem)) {
        return false;
      }

      const name = elem.nodeName.toLowerCase();
      const excludeType = ['button', 'submit', 'reset', 'image'];
      if ((name === 'input' || name === 'button') && excludeType.includes(elem.type)) {
        return false;
      }
      const rinputs = /^(?:input|select|textarea)$/i;
      return rinputs.test(elem.nodeName);
    };
  }

  matchs(context = document) {
    return sizzle(this.expression, context);
  }

}

export default Selector;
