var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function (){
  return gulp.src('api/src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('api/dist'));
});

gulp.task('watch:babel', ['babel'], function () {
  gulp.watch('api/src/**/*.js', ['babel']);
});