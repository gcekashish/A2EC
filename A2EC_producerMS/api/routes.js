'use strict';

const controller = require('./controller');

module.exports = function(app) {
   app.route('/produceKafkaMessage/:username/:email/:dname/:dmake/:dsn/:dstatus/:dlocation')
       .get(controller.produceMessageOnKafka);
};