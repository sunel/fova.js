import sizzle from 'sizzle';

class Selector {

  constructor(expression) {
    this.expression = expression;
  }

  matchs(context = document) {
    return sizzle(this.expression, context);
  }

}

export default Selector;
