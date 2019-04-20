module.exports = (app) => {
    const controller = require("../controllers/controller");

    app.route("/register/subscriber")
    .post(controller.registerSubscriber);

    app.route("/status/:subscriberId")
    .post(controller.getSubscriberStatus);

    app.route("/nearby")
    .post(controller.getSubscribersNearby);
};
