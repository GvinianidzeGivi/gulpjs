const gulp = require('gulp');
const sass = require('gulp-sass');
const nano = require('gulp-cssnano');
const prefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');



gulp.task('styles', function () {
    return gulp.src(['assets/styles/app.scss'])
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
        }))
        .pipe(nano())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function () {
       return gulp.src([
           'assets/scripts/app.js',
           'bower_components/jquery/dist/jquery.js'
       ])
       .pipe(concat('app.js'))
       .pipe(uglify())
       .pipe(gulp.dest('./public/js'))
});

gulp.task('watch-build', function () {
    gulp.watch('assets/styles/**/**/*.scss', ['styles']);
    gulp.watch('assets/scripts/**/**/*.js', ['scripts']);

});

gulp.task('default', ['styles', 'scripts']);
gulp.task('watch', ['default', 'watch-build']);
