/**
 * # Log Utility
 */
"use strict";

var winston = require("winston");
winston.setLevels({
	silly: 0,
	debug: 1,
	verbose: 2,
	info: 3,
	warn: 4,
	error: 5
});
winston.addColors({
	silly: "white",
	debug: "cyan",
	verbose: "white",
	info: "green",
	warn: "yellow",
	error: "red"
});
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
			level: global.config.winston.consoleLevel,
			colorize: true
		});
if (global.config.winston.transports.length > 0) {
	for (var i=0; i < global.config.winston.transports.length; i += 1){
		try {
			winston.add(winston.transports[global.config.winston.transports[i].type], 
				!!global.config.winston.transports[i].options ? global.config.winston.transports[i].options : null
			);
		} catch(error){
			console.error(error);
		}
	}
}

module.exports = winston;

