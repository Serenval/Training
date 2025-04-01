class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  calculateTotal() {
    return this.price;
  }
}

class PhysicalProduct extends Product {
  constructor(name, price,  shippingCost) {
    super(name, price);
    this.shippingCost = shippingCost;
  }

  calculateTotal() {
    return this.price + this.shippingCost;
  }
}

class DigitalProduct extends Product {
  constructor(name, price) {
    super(name, price);
  }

  calculateTotal() {
    return this.price;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.calculateTotal(), 0);
  }

  printReceipt() {
    this.items.forEach(item => {
      console.log(`${item.name}: $${item.calculateTotal().toFixed(2)}`);
    });
    console.log(`Total: ${this.getTotal().toFixed(2)}`);
  }
}

const cart = new ShoppingCart();

const products = [
  new PhysicalProduct("Programming book", 25, 5),
  new DigitalProduct("Novel of Pro", 50),
  new PhysicalProduct("Red Pen", 1, 3)
];

products.forEach(product => {
  cart.addItem(product);
});

cart.printReceipt();

