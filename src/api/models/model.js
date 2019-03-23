const geolib = require('geolib');

class SubscribersRepository {
    constructor() {
        this._subscribers = {};
    }

    register(subscriber) {
        if (this._subscribers[subscriber.id] !== undefined) return false;

        this._subscribers[subscriber.id] = subscriber;
        return true;
    }

    delete(id) {
        delete this._subscribers[id];
    }

    get(id) {
        return this._subscribers[id];
    }

    getNearbySubscribers( latitude, longitude ) {
        return Object.values(this._subscribers).filter(subscriber => {
            const distance = geolib.getDistance(
                { latitude, longitude },
                { latitude: subscriber.position.latitude, longitude: subscriber.position.longitude }
            );
            console.log(distance);
            return distance <= 1000;
        });
    }
}

module.exports = new SubscribersRepository();