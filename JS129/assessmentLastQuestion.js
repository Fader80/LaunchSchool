  
class Tool {
  constructor(name, productNumber) {
    this.name = name;
    this.productNumber = productNumber;
    this.inStock = true;
  }
};

class PoweredTool extends Tool {
  constructor(name, productNumber) {
    super(name, productNumber);
    this.power = true;
  }
  
  togglePower() {
    this.power ? this.power = false : this.power = true;
  }
};

class hitTool extends Tool {
  smash() {
    
  }
};



const Pryable = {
  pry() {    
  }
};

const Rotatable = {
  rotate() {
    
  }
};

const Drillable = {
  drill() {
    
  }
}

class Hammer extends hitTool {
  
};
  
Object.assign(Hammer.prototype, Pryable);

class Wrench extends hitTool {
  
};
  
Object.assign(Wrench.prototype, Rotatable);


class Powerdrill extends PoweredTool {
  
};

Object.assign(Powerdrill.prototype, Drillable);

class Manualdrill extends Tool {
  
};

Object.assign(Manualdrill.prototype, Drillable);  


let myDrill = new Powerdrill('bosch', 202021);

console.log(myDrill.name);