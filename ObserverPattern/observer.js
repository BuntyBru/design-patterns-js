const OBSERVERS = [];

export default Object.freeze({
  notify: (data) => {
    console.log(data);
    return OBSERVERS.forEach((observer) => observer(data));
  },
  subscribe: (func) => OBSERVERS.push(func),
  unsubscribe: (func) => {
    [...OBSERVERS].forEach((observer, index) => {
      if (observer === func) {
        OBSERVERS.splice(index, 1);
      }
    });
  },
});
