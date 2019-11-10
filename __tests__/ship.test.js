/* globals describe it test expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {
    test('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    test('has a starting point', () => {
        const port = new Port('Dover')
        const ship = new Ship(port);
        expect(ship.currentPort).toBe(port);
    });
    test('can set sail', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port);
    });
});

describe('Dock', () => {
    test('can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover)

        const calais = new Port('Calais');
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);
    });
});