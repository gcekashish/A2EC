'use strict';

var properties = require('../package.json')
var retriever = require('../service/retrieveNeo4jData');

var controllers = {
    retrieveDataFromNeo4j: function(req, res) {
        retriever.produce(req, res, function(err, msg) {
                res.writeHead(200, {
                   'Access-Control-Allow-Origin': '*'
                });
               if (err)
                   res.send(err);
               res.json(msg);
           });
       },
};

module.exports = controllers;