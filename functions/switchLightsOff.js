const functions = require('firebase-functions');
const mqtt = require('mqtt')
module.exports = functions.https.onRequest((request, response) => {
    var client = mqtt.connect('wss://m14.cloudmqtt.com:34864', {
        username: 'admin',
        password: 'admin',
        clientId: 'switch off'
      })
      client.on('connect', () => {
        console.log('Connected')
        client.publish('/light', 'off')
        client.end()
      });
    response.send("Hello from Switch off Lights!");
});