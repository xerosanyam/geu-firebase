const mqtt = require('mqtt')
exports.switchLights = functions.https.onRequest((request, response) => {
    response.send("Hello from Switch Lights!");
});