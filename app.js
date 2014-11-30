/**
 * # App Server
 */

"use strict";

var express = require("express"),
	app = express(),
	env = !!process.env.APP_ENV ? process.env.APP_ENV : "default",
	config = require("./config/" + env),
	redis = require("redis"),
	session = require("express-session"),
	RedisStore = require("connect-redis")(session),
	RedisClient = redis.createClient(
		config.redis.port, 
		config.redis.host, 
		config.redis.options
		),
	sessionOptions = config.session;
global.config = config;
global.environment = env;

var log = require("./lib/server/utils/logger");

/**
 * Below are all avilable log levels when requiring the logger utility:
 * @example 
 *   log.debug("Testing winston logger");
 *   log.info("Testing winston logger");
 *   log.warn("Testing winston logger");
 *   log.error("Testing winston logger");
 */

/**
 * Create a redis store for app sessions.
 */
sessionOptions.store = new RedisStore({
		client: RedisClient,
		prefix: config.redis.sessionPrefix
		});

/**
 * Set Jade as default view template engine.
 */
app.set("views", "./lib/server/views");
app.set("view engine", "jade");
app.engine("jade", require("jade").__express);

/**
 * Set default path for static files.
 */
 app.use("/static", express.static(__dirname + '/static'));

/**
 * Tell the app to use your session configuration.
 */
app.use(session(sessionOptions));

/**
 * Set event listeners for Redis to monitor it's state.
 */
RedisClient.on("ready", function(){
	log.info("Connection to Redis established on port " + config.redis.port);
	app.set("redisStatus", "Connected");
});
RedisClient.on("error", function(){
	log.error("Unable to establish connection with Redis");
	app.set("redisStatus", "Disconnected");
});
RedisClient.on("end", function(){
	log.warn("Connection with Redis was terminated");
	app.set("redisStatus", "Disconnected");
});

/**
 * Require the url map to process user requests.
 */
require("./lib/server/routes/urlMap")(app);

/**
 * Set the app to listen for requests in the port set in the selected configuration.
 */
app.listen(config.server.port, function(){
	log.info("Server listening on port " + config.server.port);
});