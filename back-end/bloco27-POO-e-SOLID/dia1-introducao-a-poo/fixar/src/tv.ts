class TV {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(b: string, s: number, r: string, con: string[]) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = con;
  }

  turnOn() {
    console.log(`Brand: ${this.brand}. Size: ${this.size}. Resolution: ${this.resolution}. Connections: ${this.connections} `);
    
  }
}

const samsungTv = new TV('samsung', 45, '60 x 39', ['Ethernet', 'HDMI']);
console.log(samsungTv);
