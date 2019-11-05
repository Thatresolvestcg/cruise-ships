const Ship = require('../src/ship');

describe('Ship', () => {
    test('New ship can be created and it is an array', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    test('the ship has a starting point', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPort).toBe('Dover');
    });
});

describe('Sail', () => {
    const ship = new Ship('Dover');
    test('Ship can setSail and update startingPort', () => {
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
    test("Ship can sail to a specific port", () => {
        ship.setSail('Barry Island');
        expect(ship.startingPort).toEqual('Barry Island');
    });
});
