var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', function() {
  gulp.watch('app/pages/**/*', ['pages']);
  gulp.watch('app/templates/**/*', ['pages']);
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/tasks/**/*.js', browserSync.reload);
  gulp.watch('app/gulpfile.js', browserSync.reload);
})