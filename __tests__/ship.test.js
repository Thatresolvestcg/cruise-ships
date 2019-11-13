/* globals describe it test expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js')

describe('Ship', () => {
    test('can be instantiated', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    });
    test('gets added to port on instantiation', () => {
        const nowhere = new Port('nowhere');
        const itinerary = new Itinerary([nowhere]);
        const ship = new Ship(itinerary);

        expect(nowhere.ships).toContain(ship);
    });
    test('has a starting point', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toBe(port);
    });
    test('can set sail', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        // expect(ship.previousPort).toBe(port);
    });
    test('cannot sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached.');
    });
});

describe('Dock', () => {
    test('can dock at a different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais])
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
    });
});