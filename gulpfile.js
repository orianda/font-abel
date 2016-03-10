'use strict';

var gulp = require('gulp-help')(require('gulp'));

gulp.task('build:less', 'Build css using less source.', function () {
    var less = require('gulp-less');
    return gulp.src('./less/abel.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

gulp.task('build:scss', 'Build css using scss source.', function () {
    var scss = require('gulp-sass');
    return gulp.src('./scss/abel.scss')
        .pipe(scss())
        .pipe(gulp.dest('./css'));
});

gulp.task('build:min', 'Build compressed css.', function () {
    var cssmin = require('gulp-cssmin'),
        rename = require('gulp-rename');
    return gulp.src('./css/abel.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
});

gulp.task('build', 'Build css files.', function (done) {
    var runSequence = require('run-sequence');
    runSequence('build:less', 'build:min', done);
});
