var gulp = require('gulp');
var frontMatter = require('gulp-front-matter');
var marked = require('gulp-marked');
var rename = require('gulp-rename');
var through = require('through2');
var path = require('path');
var swig = require('swig');
var site = require('../site.json');

swig.setDefaults({
    loader: swig.loaders.fs(__dirname + '/../app/templates'),
    cache: false
});

gulp.task('pages', ['pages:md','pages:html']);

gulp.task('pages:md', function () {
    return gulp.src('app/pages/*.md')
        .pipe(frontMatter({property: 'page', remove: true}))
        .pipe(marked())
        .pipe(applyTemplate('../app/templates/page.hbs'))
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest('app'));
});

gulp.task('pages:html',  function () {
    return gulp.src('app/pages/*.html')
        .pipe(frontMatter({property: 'page', remove: true}))
        .pipe(applyTemplate('../app/templates/page.hbs'))
        .pipe(gulp.dest('app'));
});

function applyTemplate(templateFile) {
    var tpl = swig.compileFile(path.join(__dirname, templateFile));

    return through.obj(function (file, enc, cb) {
        var data = {
            site: site,
            page: file.page,
            content: file.contents.toString()
        };
        file.contents = new Buffer(tpl(data), 'utf8');
        this.push(file);
        cb();
    });
}
