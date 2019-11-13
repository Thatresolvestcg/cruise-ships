/* globals describe it test expect */
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js')

describe('Port', () => {
    test('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    test('has a name', () => {
        const newPort = new Port('Calais')
    });
    test('can add a ship', () => {
        const port = new Port('Dover');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
    test('can remove a ship', () => {
        const port = new Port('Dover');
        const sulaco = {};
        const quinJet = {};

        port.addShip(sulaco);
        port.addShip(quinJet);
        port.removeShip(quinJet);

        expect(port.ships).toEqual([sulaco])
    })
}); 