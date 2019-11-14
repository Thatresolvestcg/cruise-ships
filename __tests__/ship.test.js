/* globals describe it test expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js')

describe('Ship', () => {
    describe('with ports and an itiniary', () => {
        let ship;
        let knowhere;
        let wakanda;
        let itinerary;
        beforeEach(() => {
            wakanda = new Port('Wakanda');
            knowhere = new Port('Knowhere');
            itinerary = new Itinerary([wakanda, knowhere]);
            ship = new Ship(itinerary);
        });
        test('can be instantiated', () => {
            expect(ship).toBeInstanceOf(Object);
        });
        test('has a starting point', () => {
            const port = new Port('Wakanda');
            const itinerary = new Itinerary([port])
            const ship = new Ship(itinerary);
            expect(ship.currentPort).toBe(port);
        });
        test('can set sail', () => {

            const itinerary = new Itinerary([knowhere, wakanda]);
            const ship = new Ship(itinerary);

            ship.setSail();

            expect(ship.currentPort).toBeFalsy();
            expect(knowhere.ships).not.toContain(ship);
        });
        test('gets added to port on instantiation', () => {
            const itinerary = new Itinerary([knowhere]);
            const ship = new Ship(itinerary);

            expect(knowhere.ships).toContain(ship);
        });
    })
    test('cannot sail further than its itinerary', () => {
        const knowhere = new Port('Knowhere');
        const wakanda = new Port('Wakanda');
        const itinerary = new Itinerary([knowhere, wakanda]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached.');
    });
});

describe('Dock', () => {
    test('can dock at a different port', () => {
        const knowhere = new Port('Knowhere');
        const wakanda = new Port('Wakanda');
        const itinerary = new Itinerary([knowhere, wakanda])
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(wakanda);
        expect(wakanda.ships).toContain(ship);
    });
});