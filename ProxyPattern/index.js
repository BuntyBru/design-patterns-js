const user = {
  firstName: "Akihiro",
  lastName: "Akiko",
  username: "DoubleA",
  age: 42,
  email: "doublea@akiko.com",
};

const userProxy = new Proxy(user, {
  get: (target, property) => {
    console.log(
      `Getting property ${property}, ${Reflect.get(target, property)}`
    );
  },
  set: (target, property, value) => {
    console.log(
      `Setting property ${property}, ${Reflect.get(target, property)}`
    );
    return Reflect.set(target, property, value);
  },
});

userProxy.firstName = "Akihiko";
