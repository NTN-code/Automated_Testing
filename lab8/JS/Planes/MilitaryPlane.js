const Plane = require('./Plane');

class MilitaryPlane extends Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, militaryType) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._militaryType = militaryType;

    }

    setMilitaryType(value) {
        this._militaryType = value;
    }

    getMilitaryType() {
        return this.militaryType;
    }
}

module.exports = MilitaryPlane;