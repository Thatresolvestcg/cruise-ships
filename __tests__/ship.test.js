const Ship = require("../src/ship");

describe('ship', () => {
    test("New ship can be created and it is an array", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    test("the ship has a starting point", () => {
        const ship = new Ship("Dover");
        expect(ship.startingPort).toBe("Dover");
    });
});
