
class Selector {

  constructor(expression) {
    this.expression = expression;
  }

  match() {
    return `Welcome, ${this.name}!`;
  }

}

export default Selector;
