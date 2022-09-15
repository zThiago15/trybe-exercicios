class TV {
  private brand: string;
  private size: number;
  private resolution: string;
  private connections: string[];
  private _connectedTo: string;

  constructor(b: string, s: number, r: string, con: string[], conTo: string) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = con;
    this._connectedTo = conTo;
  }

  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(con: string) {
    if (this.connections.includes(con)) {
      this._connectedTo = con;
    } else {
      console.log('Sorry, connection unavailable!');
    }
    
  }

  turnOn() {
    console.log(`Brand: ${this.brand}. Size: ${this.size}. Resolution: ${this.resolution}. Connections: ${this.connections} `);
    
  }
}

const samsungTv = new TV('samsung', 45, '60 x 39', ['Ethernet', 'HDMI'], 'HDMI');

console.log(samsungTv.connectedTo); // hd

// alterando atributo privado 'connectedTo' com uma conexão inválida
samsungTv.connectedTo = 'HD'; // console.log -> 'Sorry, connection unavailable!'

// alterando o atributo privado connectedTo com uma conexão válida!
samsungTv.connectedTo = 'Ethernet'
console.log(samsungTv.connectedTo); // Ethernet
