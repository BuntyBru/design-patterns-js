let instance;

class Counter {
  constructor(counter) {
    if (instance) {
      throw new Error("You can only create one instance!");
    }

    this.counter = counter;
    instance = this;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }
}

const singletonCounter = Object.freeze(new Counter(10));

export default singletonCounter;
