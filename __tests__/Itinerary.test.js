/* globals describe it test expect */
const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
    test('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
});