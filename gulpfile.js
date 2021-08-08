const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

gulp.task('processCSS', async function() {
    gulp.src([
        "./src/css/*.css",
    ])
    .pipe(concat("style.css"))
    .pipe(cleanCSS())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest("./public/css"))
})

gulp.task('processJS', async function() {
    gulp.src([
        './src/js/*.js'
    ])
    .pipe(concat('bundle.min.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('watch', function() {
    gulp.watch('./src/css/*.css', gulp.series('processCSS'));
});