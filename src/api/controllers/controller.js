const uuid = require("uuid/v4");
const Subscriber = require("../entity/subscriber");
const subscriberRepository = require("../models/model");

exports.registerSubscriber = (request, response) => {
    console.log("========== registering Subscriber:");
    console.log(request.body);

    const {name, latitude, longitude} = request.body;
    const subscriber = new Subscriber(uuid(), name, latitude, longitude);
    if (subscriberRepository.register(subscriber)) {
        response.json({id: subscriber.id});
    } else {
        response.status(500).send("wtf");
    }

};

exports.getSubscriberStatus = (request, response) => {
    console.log("========== returning Subscriber status:");

    const {subscriberId} = request.params;

    const subscriber = subscriberRepository.get(subscriberId);
    
    if (!subscriber) {
        response.json({id: subscriberId, status: Subscriber.statuses.UNKNOWN});
        return;
    }

    response.json({id: subscriberId, status: subscriber.status});
};

exports.getSubscribersNearby = (request, response) => {
    const { latitude, longitude } = request.body;
    const nearbySubscribers = subscriberRepository.getNearbySubscribers(latitude, longitude);
    response.json({ nearbySubscribers });
}


