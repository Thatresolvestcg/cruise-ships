const Ship = require('../src/Ship.js')

class Port {
    constructor(name) {
        this.name = name;
        this.ships = [];
    }
    addShip(ship) {
        this.ships.push(ship);
    }
    removeShip(ship) {
        const remove = this.ships.indexOf(ship);
        const ships = this.ships;
        ships.splice(remove, 1);

    }
};




module.exports = Port