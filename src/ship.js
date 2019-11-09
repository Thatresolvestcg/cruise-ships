class Ship {
    constructor(startingPort) {
        this.currentPort = startingPort;
    }

    setSail(currentPort) {
        this.currentPort = currentPort;
    };

    dock(newPort) {
        this.currentPort = newPort;
    }
};




module.exports = Ship;
