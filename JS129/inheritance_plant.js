class Plant {
  constructor(leaves, stem) {
    this.leaves = leaves;
    this.stem = stem;
  }

  photosynthesize() {
    console.log('photosynthesizing');
  }
}

class Floweringplant extends Plant {
  constructor(leaves, stem, flower) {
    super(leaves, stem);
    this.flower = flower;
  }

  blossom() {
    console.log('blossoming');
  }
}

class Rose extends Floweringplant {
  constructor(leaves, stem, flower, thornType) {
    super(leaves, stem, flower);
    this.thornType = thornType;
  }

  emitScent() {
    console.log('emitting scent');
  }
}

class Hibiscus extends Floweringplant {
  constructor(leaves, stem, flower, pollenCount) {
    super(leaves, stem, flower);
    this.pollenCount = pollenCount;
  }

  shedPollen() {
    console.log('shedding pollen');
  }
}