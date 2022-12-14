class Plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this._model = model;
        this._maxSpeed = maxSpeed;
        this._maxFlightDistance = maxFlightDistance;
        this._maxLoadCapacity = maxLoadCapacity;
    }

    getModel() {
        return this._model;
    }

    getMS() {
        return this._maxSpeed;
    }

    getMaxFlightDistance() {
        return this._maxFlightDistance;
    }

    getMinLoadCapacity() {
     return this._maxLoadCapacity;
    }
}

module.exports = Plane;
