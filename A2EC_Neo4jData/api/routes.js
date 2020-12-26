'use strict';

const controller = require('./controller');

module.exports = function(app) {
   app.route('/retrieveNeo4jData')
       .get(controller.retrieveDataFromNeo4j);
};