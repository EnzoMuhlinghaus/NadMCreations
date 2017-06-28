var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    filter = require('gulp-filter'),
    useref = require('gulp-useref'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    zip = require('gulp-zip'),
    plumber = require('gulp-plumber'),
    gulpif = require('gulp-if'),
    htmlclean = require('gulp-htmlclean'),
    livereload  = require('gulp-livereload');

// Compile SCSS files from /scss into /css
gulp.task('sass', function() {
    return gulp.src('assets/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});

// Clean dist folder
gulp.task('clean', function () {
    return gulp.src('dist', {read:false})
        .pipe(clean())
});

// Run everything
gulp.task('default', ['sass', 'clean'], function () {
    gulp.src('assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets_dist/images'));
    return gulp.src('assets/**/*')
        // Minify css and js
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCSS()))
        .pipe(gulp.dest('assets_dist'))
});

// Check events
gulp.task('watch', function () {
    gulp.watch('assets/sass/style.scss', ['sass']);
    gulp.watch(['*.htm', '/*.js', '/*.css']).on('change', function (event) {
        console.log(event);
    });
});