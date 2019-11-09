const Port = require("../src/ship")

describe('Port', () => {
    test('New port can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    xtest("new port has a name", () => {
        expect(port.portName).toBe('Dover');
    });
});


