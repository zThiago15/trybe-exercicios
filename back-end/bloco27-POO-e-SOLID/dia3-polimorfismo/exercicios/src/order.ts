import Person from "./person";

class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name() {
    return this._name
  }

  set name(value: string) {
    if (value.length >= 3) {
      this._name = value;
    }
  }

  get price() {
    return this._price;
  }

  set price(value: number) {
    if (value >= 0) {
      this._price = value;
    }
  }
}

enum PaymentMethod {
  cartao =  'cartão',
  dinheiro = 'dinheiro',
  value = 'vale'
}

class Order {
  private _id: number;
  private _client: Person;
  private _items: number[];
  private _paymentMethod: PaymentMethod;
  private _discount: number;

  constructor(client: Person, items: number[], paymentMethod: PaymentMethod, discount: number) {
    this._id = Math.floor(Date.now() * (Math.random() + 1));
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get id(): number {
    return this._id;
  }

  public get client(): Person {
    return this._client;
  }

  public set client(value: Person) {
    this._client = value;
  }

  public get items(): number[] {
    return this._items;
  }

  public set items(value: number[]) {
    if (this.items.length >= 1) {
      this._items = value;
    }
  }

  public get paymentMethod(): PaymentMethod {
    return this._paymentMethod;
  }
  
  public set paymentMethod(value: PaymentMethod) {
    this._paymentMethod = value;
  }

  public get discount(): number | undefined {
    return this._discount;
  }

  public set discount(value: number | undefined) {
    if (typeof value === 'number' && value >= 0) {
      this._discount = value;
    }
  }
  
  calculateTotal() {
    const priceItems: number = this.items.reduce((acc, item) => acc + item);
    return priceItems;
  }

  calculateTotalWithDiscount() {
    const priceItems = this.calculateTotal();
    return priceItems - (priceItems * this._discount)
    
  }
}

class OrderRepository {
  constructor( public orders: Order[] ) { }

  addOrder(order: Order) {
    this.orders.push(order);
  }

  removeOrder(order: string) {
    const index = this.orders.findIndex((order) => order.id === order.id);
    this.orders.splice(index, 1);
  }

  listByClient(value: Person) {
    return this.orders.filter((order) => order.client === value);
  }

  listBySortedValue(sort: string): Order[] {
    if (!['maior', 'menor'].includes(sort)) throw new Error('Valor de ordenação inválido.');

    if (sort === 'menor') {
      return this.orders.sort(
        (orderA, orderB) => {
          if (orderA.calculateTotalWithDiscount() > orderB.calculateTotalWithDiscount()) return 1;

          if (orderA.calculateTotalWithDiscount() < orderB.calculateTotalWithDiscount()) return -1;

          return 0;
        },
      );
    }

    return this.orders.sort(
      (orderA, orderB) => {
        if (orderA.calculateTotalWithDiscount() > orderB.calculateTotalWithDiscount()) return -1;

        if (orderA.calculateTotalWithDiscount() < orderB.calculateTotalWithDiscount()) return 1;

        return 0;
      },
    );
  }
}