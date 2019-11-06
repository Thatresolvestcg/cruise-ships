function Ship(name, startingPort) {
    this.startingPort = startingPort;
    this.name = name;
    Ship.prototype.setSail = function (newPort) {
        this.startingPort = newPort
    };
};

module.exports = Ship;