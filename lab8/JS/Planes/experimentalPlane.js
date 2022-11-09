const Plane = require('./Plane');

class ExperimentalPlane extends Plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel)  {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._type = type;
        this._classificationLevel = classificationLevel;
    }

    getModel()
    {
        return this._model;
    }

    setModel(value) {
        this._model = value;
    }

    getMaxSpeed() {
        return this._maxSpeed;
    }

    setMaxSpeed(value) {
        this._maxSpeed = value;
    }

    getMaxFlightDistance() {
        return this._maxFlightDistance;
    }

    setMaxFlightDistance(value) {
        this._maxFlightDistance = value;
    }

    getMaxLoadCapacity() {
        return this._maxLoadCapacity;
    }

    setMaxLoadCapacity(value) {
        this._maxLoadCapacity = value;
    }

    getType() {
        return this._type;
    }

    setType(value) {
        this._type = value;
    }

    getClassificationLevel() {
        return this._classificationLevel;
    }

    setClassificationLevel(value) {
        this._classificationLevel = value;
    }
}

module.exports = ExperimentalPlane