/* globals describe it test expect */
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js')

describe('Port', () => {
    describe('with ports and ships', () => {
        let port;
        let ship;
        let milano;
        let quinJet;
        beforeEach(() => {
            port = new Port('Knowhere');
            ship = {}
            milano = {}
            quinJet = {}
        });

        test('can be instantiated', () => {
            expect(new Port()).toBeInstanceOf(Object);
        });
        test('can add a ship', () => {
            port.addShip(ship);

            expect(port.ships).toContain(ship);
        });
        test('can remove a ship', () => {
            port.addShip(milano);
            port.addShip(quinJet);
            port.removeShip(quinJet);

            expect(port.ships).toEqual([milano])
        });
        test('throws an error if entry does not exist', () => {
            expect(() => port.removeShip(quinJet)).toThrowError('This entry does not exist');

        });
    });
}); 