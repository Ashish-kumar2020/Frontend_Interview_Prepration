const car1 = {
  carName: "Harrier",
  company: "Tata",
  color: "Black",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased a ${this.color} - ${this.company} ${this.carName} car for ${currency}${price}`
  );
}

// Pollyfill for Call method
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not callable");
  }
  context.fn = this;
  context.fn(...args);
};

// purchaseCar.myCall(car1, "$", "20000");

// Pollyfill for Apply Method
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this, +"It is not callable");
  }
  if (!Array.isArray(args)) {
    throw new Error("CreateListFromArrayLike called on non object");
  }
  context.fn = this;
  context.fn(...args);
};

// purchaseCar.myApply(car1, ["$", "20000"]);

// PollyFill for Bind Method
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, +"Cannot be bound as it is not callable");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newCar = purchaseCar.myBind(car1);
newCar("$", "20000");
