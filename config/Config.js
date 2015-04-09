/**
 * # Base Configuration Class
 * This class contains all the default values for running the 
 * node server. You can overwrite these defaults by creating
 * an instance of it named as an environment. 
 * 
 * @example
 * 	APP_ENV=local node app.js
 *
 * Will look for for a file called local.js in the /config directory.  
 */

 "use strict";

var Config = function(){
  /**
   * Server configuration parameters
   */
  this.server = {
		port: 3000
	};
  /**
   * Flag to determine if the server should be using http or https (defaults to http).
   */
  this.isHttps = false;
  /**
   * Path to SSL certificate credentials (Only necessary when using https).
   */
  this.credentials = {
    keyPath: null,
    certPath: null
  };
  /**
   * Redis server default parameters.
   */
	this.redis = {
		port: 6379,
 		host: "127.0.0.1",
 		options: {
 			retry_max_delay: 60 * 1000,
 			auth_pass: null
 		},
 		sessionPrefix: "sess:"	
	};
  /**
   * Session parameters.
   */
	this.session = {
		secret: "sad keanu",
 		saveUninitialized: true,
 		resave: true	
	};
  /**
   * Logger parameters.
   */
	this.winston = {
		consoleLevel: "debug",
		transports: [
	 			{
	 				type: "File",
	 				options: {
	 					filename: __dirname + "/../logs/server.log",
	 					level: "debug",
	 					colorize: true
	 				}
	 			}
	 		]
	};
};

 module.exports = Config;