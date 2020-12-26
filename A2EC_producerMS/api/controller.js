'use strict';

var properties = require('../package.json')
var producer = require('../service/produceKafkaMessage');

var controllers = {
    produceMessageOnKafka: function(req, res) {
        producer.produce(req, res, function(err, msg) {
               if (err)
                   res.send(err);
               res.json(msg);
           });
       },
};

module.exports = controllers;