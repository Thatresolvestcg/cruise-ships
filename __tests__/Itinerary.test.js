/* globals describe it test expect */
const Itinerary = require('../src/Itinerary.js');
const Ship = require('../src/Ship');
const Port = require('../src/Port');

describe('Itinerary', () => {
    test('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    test('can have ports', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');

        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover, calais]);
    });
});