/**
 * # Landing Routes
 */

"use strict";

 module.exports = {
 	get: function(req, res){
 		var conf = {
 			server: global.config.server,
 			redis: global.config.redis,
 			winston: global.config.winston,
 		};
 		res.render("status", { 
 			sessionId: req.hasOwnProperty("session") ? req.session.id : "undefined",
 			session: req.hasOwnProperty("session") ? JSON.stringify(req.session) : "undefined",
 			redisStatus: req.app.get("redisStatus"),
 			appEnv: global.environment,
 			config: JSON.stringify(conf)
 		});
 	}
 };