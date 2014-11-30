/**
 * # Dev Configuration
 */

 "use strict";

 var Config = require("./Config"),
 	dev = new Config();

 dev.server.port = 8080;

 module.exports = dev;