var gulp = require('gulp');
var hb = require('gulp-hb');
var frontMatter = require('gulp-front-matter');
var marked = require('gulp-marked');

gulp.task('basic', function () {
    return gulp
        .src('./app/pages/{*.html,*.md}')
        .pipe(frontMatter({property: 'page', remove: true}))
        .pipe(marked())
        .pipe(hb({
            partials: './app/templates/**/*.html',
            helpers: './app/helpers/*.js',
            data: './app/data/**/*.{js,json}'
        }))
        .pipe(gulp.dest('./web'));
});
