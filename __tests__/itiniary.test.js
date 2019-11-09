const Itiniary = require('../src/itiniary')
const Port = require('../src/port')

describe('Itiniary', () => {
    test('itiniary can be instantiated', () => {
        expect(new Itiniary()).toBeInstanceOf(Object);
    });
    test('it can have ports', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itiniary = new Itiniary([dover, calais]);
        expect(itiniary.ports).toEqual([dover, calais]);
    })
});