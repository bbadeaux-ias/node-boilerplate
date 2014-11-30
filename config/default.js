/**
 * # Default Configuration
 * 
 * This file contains all the default values for running the 
 * node server. You can overwrite these defaults with the 
 * values that you prefer. 
 */

 "use strict";

 module.exports = { 
 	server: {
 		port: 3000,
 	},
 	redis: {
 		port: 6379,
 		host: "127.0.0.1",
 		options: {
 			retry_max_delay: 60 * 1000,
 			auth_pass: null
 		},
 		sessionPrefix: "sess:"
 	},
 	session: {
 		secret: "sad keanu",
 		saveUninitialized: true,
 		resave: true
 	}
 };