import sizzle from 'sizzle';

class Selector {

  constructor(expression) {
    this.expression = expression;
    Selector.addFormPseudos();
  }

  static addFormPseudos() {
    sizzle.selectors.pseudos.selectElem =
      sizzle.selectors.createPseudo((subSelector) => {
        const input = [];
        const results = [];
        const subSelectors = subSelector.split(':split');
        const matcher = sizzle.compile(subSelectors[1]);
        const notMatcher = sizzle.compile(subSelectors[0]);
        return (elem, context, xml) => {
          input[0] = elem;
          matcher(input, null, xml, results);
          input[0] = null;
          // check if input is matched if so, check if it
          // can be ignored
          if (results.pop()) {
            input[0] = elem;
            notMatcher(input, null, xml, results);
            input[0] = null;
            if (!results.pop()) {
              return false;
            }
            return true;
          }
          return false;
        };
      });

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
