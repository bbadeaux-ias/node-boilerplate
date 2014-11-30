/**
 * # URL Map
 */

 "use strict";

 module.exports = function(app){
 	//Root
 	app.get("/", require("./landing").get);
 };