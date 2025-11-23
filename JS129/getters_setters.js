class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price; // calls the setter
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    if (newPrice <= 0) {
      console.log('Price must be a positive number.');
      return;
    }
    this._price = newPrice;
  }
}

let chair = new Product('Chair', 50);
console.log(chair.price);
