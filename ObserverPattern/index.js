import Observer from "./observer.js";

Observer.notify("✨ New data ✨");

setInterval(() => {
  Observer.notify("✨ New data after timeout ✨");
}, 420);
