var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config').browsersync.development;

gulp.task('browserSync', function() {
  browserSync(config)
})