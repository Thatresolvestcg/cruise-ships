const Port = require("../src/port")


describe('Port', () => {
    const port = new Port('Dover')
    test('New port can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    test('New port has a name', () => {
        expect(port.portName).toBe('Dover')
    });
    test('can add a ship', () => {
        const port = new Port('Dover');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
});
