/**
 * # Landing Routes
 */

"use strict";

 module.exports = {
 	get: function(req, res){
 		res.render("status", { 
 			sessionId: req.hasOwnProperty("session") ? req.session.id : "undefined",
 			session: req.hasOwnProperty("session") ? JSON.stringify(req.session) : "undefined",
 			redisStatus: req.app.get("redisStatus"),
 			appEnv: req.app.get("environment")
 		});
 	}
 };