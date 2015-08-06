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
    gulp.src(['js/app.js','js/builder.js','js/gameClient.js'])
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(gulp.dest('public/js/build'))
});



/* ==================================================== */
/* testing */
/* ==================================================== */

var karma = require('gulp-karma');

var testFiles = [
    'js/test/*.js'
];

gulp.task('test', function() {
    gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'watch'
        }));
});





/* ==================================================== */
// clean up if an error goes unhandled.
/* ==================================================== */



process.on('exit', function() {

    console.log('\u0007');console.log('\u0007');console.log('\u0007');console.log('\u0007');
    console.log('fix error and run again');

});



/* ==================================================== */
/* Data base */
/* ==================================================== */



var exec = require('child_process').exec;

function runCommand(command) {
    return function (cb) {
        exec(command, function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        });
    }
}





/* ==================================================== */
/* Data base */
/* ==================================================== */


//Running mongo
//http://stackoverflow.com/a/28048696/46810
gulp.task('start-mongo', runCommand('mongod --dbpath ./data/'));
gulp.task('stop-mongo', runCommand('mongo --eval "use admin; db.shutdownServer();"'));
gulp.task('start-app', runCommand('node app.js'))




gulp.task('build', ['polymer','scripts', 'cleanPolymer' ]);
gulp.task('default', ['build' , 'watch_task']);

