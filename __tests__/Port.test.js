/* globals describe it test expect */
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js')

describe('Port', () => {
    test('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    test('can add a ship', () => {
        const port = new Port('Knowhere');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
    test('can remove a ship', () => {
        const port = new Port('Knowhere');
        const milano = {};
        const quinJet = {};

        port.addShip(milano);
        port.addShip(quinJet);
        port.removeShip(quinJet);

        expect(port.ships).toEqual([milano])
    });
    test('throws an error if entry does not exist', () => {
        const port = new Port('Knowhere');
        const quinJet = {};
        expect(() => port.removeShip(quinJet)).toThrowError('This entry does not exist');

    });
}); 