/**
 * # Gulpfile
 */

 "use strict";

 var gulp  = require("gulp"),
 	less = require("gulp-less"),
 	del = require("del"),
 	bootstrapPath = __dirname + "/lib/client/bootstrap-3.3.1";

 gulp.task("less:bootstrap", function(){
 	return gulp.src([bootstrapPath + "/less/bootstrap.less"])
 		.pipe(less())
 		.pipe(gulp.dest(__dirname + "/static/css"));
 });

 gulp.task("less:theme", function(){
 	return gulp.src([bootstrapPath + "/less/theme.less"])
 		.pipe(less())
 		.pipe(gulp.dest(__dirname + "/static/css"));
 });

 gulp.task("less:custom", function(){
 	return gulp.src([__dirname + "/lib/client/less/**.less"])
 		.pipe(less())
 		.pipe(gulp.dest(__dirname + "/static/css"));
 });

 gulp.task("copy:js", function(){
 	return gulp.src([bootstrapPath + "/dist/js/bootstrap.min.js"])
	.pipe(gulp.dest(__dirname + "/static/js"));
 });
 
 gulp.task("copy:fonts", function(){
 	return gulp.src([bootstrapPath + "/dist/fonts/*"])
	.pipe(gulp.dest(__dirname + "/static/fonts"));
 });

 gulp.task("clean", function(cb) {
    del([__dirname + '/static'], cb)
 });

 gulp.task("default", ["clean"], function() {
    gulp.start("copy:js", "copy:fonts", "less:bootstrap", "less:theme", "less:custom");
 });

