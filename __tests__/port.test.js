const Port = require("../src/ship")

describe('Port', () => {
    test('New port can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
});



// describe('Ship', () => {
//     const ship = new Ship('The Unreliable', 'Dover');
//     test('New ship can be instantiated and it is an array', () => {
//         expect(new Ship()).toBeInstanceOf(Object);
//     });
//     test('the ship has a starting point', () => {
//         expect(ship.currentPort).toBe('Dover');
//     });
//     test('the ship has a name', () => {
//         expect(ship.name).toBe('The Unreliable')
//     })
// });
