'use strict';

var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    watch = require('gulp-watch'),
    sass = require('gulp-ruby-sass'),
    del = require('del'),
    node;



gulp.task('cleanPolymer', function(cb) {
    del(['public/assets/polymer-elements/**/*'], cb);
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


gulp.task('watch_task', ['polymer'], function() {
  gulp.watch('elements-src/**/*', ['polymer']);
});


// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('src/js/app.js')
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build/js'))
});

gulp.task('build', ['polymer', 'cleanPolymer' ]);
gulp.task('default', ['build' , 'watch_task']);

