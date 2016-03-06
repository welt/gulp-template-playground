var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
  runSequence(['sass', 'pages', 'browserSync', 'watch'],
    callback
  )
});

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    'sass',
    'pages',
    ['useref', 'images', 'fonts'],
    callback
  )
});