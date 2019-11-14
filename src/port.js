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
        if (remove == -1) {
            throw new Error('This entry does not exist')
        } else { this.ships.splice(remove, 1); }
    }
};





module.exports = Port