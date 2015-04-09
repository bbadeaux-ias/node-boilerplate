/**
 * # Dev Configuration
 */

"use strict";

var Config = require("./Config"),
 	dev = new Config();

/**
 * Activate https.
 */
dev.isHttps = true;

/**
 * Add paths to ssl certificate credentials.
 * Paths will be read from app.js so they should be relative to app.js.
 */
dev.credentials = {
  keyPath: "./ssl/host.key",
  certPath: "./ssl/server.crt"
};
/**
 * Modified default port.
 */
dev.server.port = 3443;

module.exports = dev;