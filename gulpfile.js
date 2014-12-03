/**
 * # Gulpfile
 */

 "use strict";

var gulp = require("gulp"),
   	autoprefixer = require("gulp-autoprefixer"),
    	minifycss = require("gulp-minify-css"),
    	jshint = require("gulp-jshint"),
    	uglify = require("gulp-uglify"),
    	less = require("gulp-less"),
    	imagemin = require("gulp-imagemin"),
    	rename = require("gulp-rename"),
    	concat = require("gulp-concat"),
    	notify = require("gulp-notify"),
    	cache = require("gulp-cache"),
    	livereload = require("gulp-livereload"),
    	del = require("del"),
 	bootstrapPath = __dirname + "/lib/client/bootstrap-3.3.1";

gulp.task("scripts", function() {
	return gulp.src(__dirname + "/lib/client/scripts/**/*.js")
		.pipe(jshint(".jshintrc"))
		.pipe(jshint.reporter("default"))
		.pipe(concat("main.js"))
		.pipe(gulp.dest(__dirname + "/static/js"))
		.pipe(rename({suffix: ".min"}))
		.pipe(uglify())
		.pipe(gulp.dest(__dirname + "/static/js"))
		.pipe(notify({ message: "Scripts task complete" }));
});
 
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
.		pipe(gulp.dest(__dirname + "/static/js"));
});

gulp.task("copy:fonts", function(){
	return gulp.src([bootstrapPath + "/dist/fonts/*"])
		.pipe(gulp.dest(__dirname + "/static/fonts"));
});

gulp.task("clean", function(cb) {
	del([__dirname + "/static"], cb)
});

gulp.task("watch", function() {
	// Watch .less files
	gulp.watch(__dirname + "/lib/client/less/**/*.less", ["less:custom"]);

	// Watch .js files
	gulp.watch(__dirname + "/lib/client/scripts/**/*.js", ["scripts"]);
});

gulp.task("default", ["clean"], function() {
	gulp.start("scripts", "copy:js", "copy:fonts", "less:bootstrap", "less:theme", "less:custom", "watch");
});

