var gulp = require('gulp');
//var clean = require('gulp-clean');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

//gulp.task('clean', function() {
//  return gulp.src(['./src/client/js/build.js'], {read: false}).pipe(clean());
//});

gulp.task('browserify', function() {
  var bundler = browserify({
    entries: ['./src/server/jsx/router.jsx'],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  });

  var watcher = watchify(bundler);

  return watcher
    .on('update', function () { // When any files update
      var updateStart = Date.now();
      console.log('Updating!');
      watcher.bundle() // Create new bundle that uses the cache for high performance
        .pipe(source('build.js'))
        // This is where you add uglifying etc.
        .pipe(gulp.dest('./src/client/js/'));
      console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('build.js'))
    .pipe(gulp.dest('./src/client/js/'));
});

gulp.task('default', ['browserify']);