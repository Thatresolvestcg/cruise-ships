const Ship = require('../src/Ship.js')

class Port {
    constructor(name) {
        this.name = name;
        this.ships = [];
    }
    addShip(ship) {
        this.ships.push(ship);
    }
}




module.exports = Port