var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var config = require('../config').autoprefixer;

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') 
    .pipe(sass()) 
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(config))
    .pipe(gulp.dest('app/css')) 
    .pipe(browserSync.reload({ 
      stream: true
    }));
})