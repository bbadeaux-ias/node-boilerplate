/**
 * # Gulpfile
 */

 "use strict";

/**
 * Gulp Dependencies
 */
var gulp = require("gulp"),
  rename = require("gulp-rename");

/**
 * Build Dependencies
 */
var browserify = require("gulp-browserify"),
  uglify = require("gulp-uglify");

/**
 * Style Dependencies
 */
var less = require("gulp-less"),
  prefix = require("gulp-autoprefixer"),
  minifyCSS = require("gulp-minify-css");

/**
 * Dev Dependencies
 */
var jshint = require("gulp-jshint");

/**
 * Test Dependencies
 */
var mochaPhantomjs = require("gulp-mocha-phantomjs");

/**
 * JSHINT tasks
 */
gulp.task("lint-client", function() {
  return gulp.src("./lib/client/scripts/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});

gulp.task("lint-test-client", function() {
  return gulp.src("./lib/test/client/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});

gulp.task("lint-server", function() {
  return gulp.src("./lib/server/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});
/**
 * Browserify tasks
 */
gulp.task("browserify-client", ["lint-client"], function() {
  return gulp.src("./lib/client/scripts/client.js")//TODO: Add this file
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename("main.js"))
    .pipe(gulp.dest("./static/js"));
});

gulp.task("browserify-test", ["lint-test-client"], function() {
  return gulp.src("./lib/test/client/index.js")
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename("client-test.js"))
    .pipe(gulp.dest("./static/test"));
});

/**
 * Testing tasks
 */
gulp.task("test", ["lint-test-client", "browserify-test"], function() {
  return gulp.src("./lib/test/client/index.html")
    .pipe(mochaPhantomjs({reporter: "spec", dump:"./logs/test.log"}));
});

/**
 * Asset building tasks
 */
gulp.task("styles", function() {
  return gulp.src("./lib/client/less/main.less")
    .pipe(less())
    .pipe(prefix({ cascade: true }))
    .pipe(rename("main.css"))
    .pipe(gulp.dest("./static/css"));
});

gulp.task("minify", ["styles"], function() {
  return gulp.src("./static/css/main.css")
    .pipe(minifyCSS())
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest("./static/css"));
});

/**
 * Client Watch
 */
gulp.task("watch", function() {
  gulp.watch("./lib/client/less/**/*.less", ["minify"]);
  gulp.watch("./lib/client/scripts/**/*.js", ["browserify-client", "test"]);
  gulp.watch("./lib/test/client/**/*.js", ["test"]);
  gulp.watch("./lib/server/**/*.js", ["lint-server"]);
});

gulp.task("uglify", ["browserify-client"], function() {
  return gulp.src("./static/js/main.js")
    .pipe(uglify())
    .pipe(rename("main.min.js"))
    .pipe(gulp.dest("./static/js"));
});

gulp.task("build", ["lint-server", "uglify", "minify"]);

gulp.task("default", ["test", "build", "watch"]);