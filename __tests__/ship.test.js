/* globals describe it test expect */
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    test('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    test('has a starting point', () => {
        const ship = new Ship('Dover');

        expect(ship.startingPort).toBe('Dover');
    });
    test('can set sail', () => {
        const ship = new Ship('Dover');

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    });
});