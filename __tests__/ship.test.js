const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary')

describe('Ship', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);
    test('New ship can be created', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    test('the ship has a starting point', () => {
        expect(ship.currentPort).toBe(port);
    });
});

describe('Sail', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);
    test('Ship can setSail', () => {
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port);

    });
});

describe('Dock', () => {
    test('can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);
        const calais = new Port('Calais')
        ship.dock(calais);
        expect(ship.currentPort).toBe(calais);
    });
});

