'use strict';
 
var os = require('os');
var gulp = require('gulp');
var open = require('gulp-open');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
 
 
// Default usage: 
// Open one file with default application 
 
gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open());
});

gulp.task('less', function() {
  gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('assets/css'))
    .pipe(livereload());
});
 
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./less/*.less', ['less']);
});
 
 
gulp.task('default', ['open', 'less', 'watch']);
