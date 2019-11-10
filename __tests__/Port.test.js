/* globals describe it test expect */
const Port = require('../src/Port.js');

describe('Port', () => {
    test('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    test('has a name', () => {
        const newPort = new Port('Calais')
    });
});