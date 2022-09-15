class client {
  constructor(name: string) { }
}

class order {
  constructor(public client: client, 
    public itemsConsumed: itemOrder[], public paymentMethod: string, public discount?: number) { }

    total() {
      let totalPrice = 0;
      this.itemsConsumed.forEach(({ price }) => totalPrice += price);

      return totalPrice;
    }

    totalWithDescount() {
      let totalPrice = 0;
      this.itemsConsumed.forEach(({ price }) => totalPrice += price);

      if (this.discount) {
        totalPrice = totalPrice - (totalPrice * this.discount);
      }

      return totalPrice;
    }
}

class itemOrder {
  constructor(public name: string, public price: number) { }
}

