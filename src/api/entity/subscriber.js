class Subscriber {
    constructor(id, name, latitude, longitude) {
        this._id = id;
        this._name = name;
        this._position = {latitude, longitude};
        this._status = Subscriber.statuses.WAITING;
    }

    get id() {
        return this._id;
    }

    get position() {
        return this._position;
    }

    get status() {
        return this._status;
    }

    set status(status) {
        this._status = status;
    }
}

Subscriber.statuses = {
    CONNECTED: "connected",
    WAITING: "waiting",
    UNKNOWN: "unknown"
};

module.exports = Subscriber;
