let vehiclePrototype = {
  honk() {
    console.log('Beep beep!');
  }
}

let carPrototype = Object.create(vehiclePrototype);

carPrototype.init = function(model) {
  this.model = model;
  //return this;
};

let myCar = Object.create(carPrototype);

myCar.init(`Mustang`);

const fourWheelDrive = {
  enable4WD() {
    console.log(`Four-wheel drive enabled`);
  }
};

Object.assign(myCar, fourWheelDrive);

console.log(myCar.model);

myCar.honk();

myCar.enable4WD();

console.log(Object.getPrototypeOf(myCar) === carPrototype);