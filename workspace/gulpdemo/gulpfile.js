var gulp = require('gulp');
var gulpUtil = require('gulp-util')
var jshint = require('gulp-jshint')

gulp.task('copyhtml', function(){
    gulp.src('public/**/*.html')
    .pipe(gulp.dest('./dist'));
})

gulp.task('jshint', function() {
    return gulp.src('public/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function(){
    gulp.watch('public/js/**/*.js', ['jshint'])
})

gulp.task('task2', ['task1'], function(){
    console.log('does sometihng else');
})