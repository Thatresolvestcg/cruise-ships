/* globals describe it test expect */
const Itinerary = require('../src/Itinerary.js');
const Ship = require('../src/Ship');
const Port = require('../src/Port');

describe('Itinerary', () => {
    test('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    test('can have ports', () => {
        const knowhere = new Port('Knowhere');
        const wakanda = new Port('Wakanda');

        const itinerary = new Itinerary([knowhere, wakanda]);

        expect(itinerary.ports).toEqual([knowhere, wakanda]);
    });
});