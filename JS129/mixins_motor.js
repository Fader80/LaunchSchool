class Motorvehicle {
  constructor(weightKg, rangeKm, colour) {
    this.weight = weightKg;
    this.range = rangeKm;
    this.colour = colour;
    this.engineOn = false;
  }

  startEngine() {
    this.engineOn = true;
  }

  stopEngine() {
    this.engineOn = false;
  }

  steer() {
    console.log('steering');
  }
}

const moveOnWater = {
  sail() {
    console.log('sailing');
  }
};


class Car extends Motorvehicle {
  constructor(weightKg, rangeKm, colour, form) {
    super(weightKg, rangeKm, colour);
    this.form = form;
  }

  drive() {
    console.log('driving');
  }
}


class Boat extends Motorvehicle {
  constructor(weightKg, rangeKm, colour, rudderType) {
    super(weightKg, rangeKm, colour);
    this.rudderType = rudderType;
  }
}

Object.assign(Boat.prototype, moveOnWater);


class Yacht extends Motorvehicle {
  constructor(weightKg, rangeKm, colour, sailType) {
    super(weightKg, rangeKm, colour);
    this.sailType = sailType;
  }
}

Object.assign(Yacht.prototype, moveOnWater);


class Toy {
  constructor(material) {
    this.material = material;
  }
}

class Sailboard extends Toy {
  constructor(material, sailType) {
    super(material);
    this.sailType = sailType;
  }
}

Object.assign(Sailboard.prototype, moveOnWater);


