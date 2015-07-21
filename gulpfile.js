'use strict';

var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    watch = require('gulp-watch'),
    sass = require('gulp-ruby-sass'),
    del = require('del'),
    browserify = require('gulp-browserify'),
    node;



gulp.task('cleanPolymer', function(cb) {
    del(['public/assets/polymer-elements/**/*'], cb);
});

gulp.task('cleanScripts', function(cb) {
    del(['public/js/**/*'], cb);
});



gulp.task('polymerStyles',['cleanPolymer'], function() {
  return sass('./elements-src/', { style: 'expanded' })
      .pipe(gulp.dest('./public/assets/css/polymer-elements'));
});


gulp.task('polymer',['polymerStyles'], function() {
    return gulp.src('elements-src/**/*.html')
        .pipe(fileinclude({basepath: './public/assets/css/polymer-elements/' , prefix: '\\/\\*',  suffix: '\\*\\/' }))
        .pipe(gulp.dest('public/assets/polymer-elements/'));
});


gulp.task('watch_task', ['build'], function() {
    gulp.watch('elements-src/**/*', ['polymer']);
    gulp.watch('js/**/*', ['scripts']);
});


// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('js/app.js')
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(gulp.dest('public/js/build'))
});

// clean up if an error goes unhandled.
process.on('exit', function() {

    console.log('\u0007');console.log('\u0007');console.log('\u0007');console.log('\u0007');
    console.log('fix error and run again');

});

gulp.task('build', ['polymer','scripts', 'cleanPolymer' ]);
gulp.task('default', ['build' , 'watch_task']);

