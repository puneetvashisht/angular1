//'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    rimraf = require('gulp-rimraf');

var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();


// Dev task
gulp.task('dev', ['clean', 'views', 'styles', 'lint', 'browserify'], function() { });

// Clean task
gulp.task('clean', function() {
	gulp.src('./dist/**/', { read: false }) // much faster
  .pipe(rimraf({force: true}));
});

// JSHint task
gulp.task('lint', function() {
  gulp.src('app/scripts/*.js')
  .pipe(jshint())
//  .pipe(jshint.reporter('default'));
  .pipe(jshint.reporter(stylish));
});

// Styles task
gulp.task('styles', function() {
  gulp.src('app/styles/*.css')
  .pipe(gulp.dest('dist/css/'));
});

// Browserify task
gulp.task('browserify', function() {
  gulp.src(['app/scripts/main.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: false
  }))
//	.pipe(concat('bundle.js'))
	.pipe(concat('bundle.min.js'))
    .pipe(uglify())
	.pipe(gulp.dest('dist/js'))
  	.pipe(browserSync.stream());
});

// Views task
gulp.task('views', function() {
  gulp.src('app/index.html')
  .pipe(gulp.dest('dist/'));

  gulp.src('app/views/**/*')
  .pipe(gulp.dest('dist/views/'));
});

gulp.task('watch', ['lint'], function() {

  gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'],[
    'lint',
    'browserify'
  ]);
	
  gulp.watch(['app/styles/**/*.css'], [
    'styles'
  ]);

  gulp.watch(['app/**/*.html'], [
    'views'
  ]);

  browserSync.init({
	  server: './dist' //contains index.html
	  
  })

});

gulp.task('default', ['dev', 'watch']);
