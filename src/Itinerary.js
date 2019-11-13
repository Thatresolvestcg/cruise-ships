const Port = require('../src/Port');
const Ship = require('./Ship');

class Itinerary {
    constructor(ports) {
        this.ports = ports;
    }
}


module.exports = Itinerary;