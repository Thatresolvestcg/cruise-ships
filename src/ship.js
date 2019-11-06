function Ship(name, currentPort) {
    this.currentPort = currentPort;
    this.name = name;
    Ship.prototype.setSail = function (newPort) {
        this.currentPort = newPort
    };
};

function Port(portName) {
    this.portName = portName;
}

module.exports = Ship;