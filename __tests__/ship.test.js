const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Ship', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);
    test('New ship can be created and it is an array', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    test('the ship has a starting point', () => {
        expect(ship.currentPort).toBe(port);
    });
});

describe('Sail', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);
    test('Ship can setSail and update currentPort', () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
    test("Ship can sail to a specific port", () => {
        ship.setSail('Barry Island');
        expect(ship.currentPort).toEqual('Barry Island');
    });
});

describe('Dock', () => {
    test('can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);
        const calais = new Port('Calais')
        ship.dock(calais);
        expect(ship.currentPort).toBe(calais);
    });
});

