const Itinerary = require('../src/itinerary')
const Port = require('../src/port')

describe('Itiniary', () => {
    test('itiniary can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    test('it can have ports', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        expect(itinerary.ports).toEqual([dover, calais]);
    })
});