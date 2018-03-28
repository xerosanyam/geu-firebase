const functions = require('firebase-functions');
const mqtt = require('mqtt')
module.exports = functions.https.onRequest((request, response) => {
    var client = mqtt.connect('wss://m14.cloudmqtt.com:34864', {
        username: 'admin',
        password: 'admin',
        clientId: 'switch on'
      })
      client.on('connect', () => {
        console.log('Connected')
        client.publish('/light', 'on')
        client.end()
      });
      response.send("Hello from Switch on Lights!");
});