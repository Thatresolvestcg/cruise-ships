function Ship(currentPort) {
    this.currentPort = currentPort;
    // this.name = name;
    Ship.prototype.setSail = function (newPort) {
        this.currentPort = newPort
    };
};

module.exports = Ship;
