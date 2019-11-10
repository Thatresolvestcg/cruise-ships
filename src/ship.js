class Ship {
    constructor(startingPort) {
        this.currentPort = startingPort;
        this.previousPort = null;
    }

    setSail() {
        this.previousPort = this.currentPort;
        this.currentPort = null;
    };

    dock(port) {
        this.currentPort = port;
    }
};




module.exports = Ship;
