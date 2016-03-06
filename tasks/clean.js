var gulp = require('gulp');
var del = require('del');
var cache = require('gulp-cache');

gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
});

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', 'web/**/*', '!dist/images', '!dist/images/**/*', 'app/*.html']);
});
