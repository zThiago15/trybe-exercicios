"use strict";
class TV {
    constructor(b, s, r, con) {
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
