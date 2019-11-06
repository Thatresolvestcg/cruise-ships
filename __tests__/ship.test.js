const Ship = require('../src/ship');

describe('Ship', () => {
    const ship = new Ship('The Unreliable', 'Dover');
    test('New ship can be created and it is an array', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    test('the ship has a starting point', () => {
        expect(ship.startingPort).toBe('Dover');
    });
    test('the ship has a name', () => {
        expect(ship.name).toBe('The Unreliable')
    })
});

describe('Sail', () => {
    const ship = new Ship('The Unreliable', 'Dover');
    test('Ship can setSail and update startingPort', () => {
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
    test("Ship can sail to a specific port", () => {
        ship.setSail('Barry Island');
        expect(ship.startingPort).toEqual('Barry Island');
    });
});
