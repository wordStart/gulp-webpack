var gulp = require('gulp');
var uglify = require('gulp-uglify');
var mincss = require('gulp-clean-css');
var stylmin = require('gulp-stylus');
var lessmin = require('gulp-less');
var sassmin = require('gulp-sass');
var autoprefixer = require("gulp-autoprefixer");
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var webpack =  require('webpack-stream');
var del = require('del');
var webpackConfig = require('./webpack.config.js');
gulp.task('copyJs', function() {
  return gulp.src('./src/js/*.js')
  .pipe(webpack(webpackConfig))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js/'))
})
gulp.task('copyHtml', function() {
  var options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    removeEmptyAttributes: true, //space
    removeScriptTypeAttributes: true, //script-type
    removeStyleLinkTypeAttributes: true, //style-type
  };
  return gulp.src('./src/*.html')
  .pipe(htmlmin(options))
  .pipe(gulp.dest('./dist/'))
})
gulp.task('copyCss', function() {
  return gulp.src('./src/css/*.css')
  .pipe(autoprefixer({
    browsers: ['last 3 version']
  }))
  .pipe(mincss())
  .pipe(gulp.dest('./dist/css/'))
})
gulp.task('copyStyl', function() {
  return gulp.src('./src/css/*.styl')
  .pipe(stylmin())
  .pipe(autoprefixer({
    browsers: ['last 3 version']
  }))
  .pipe(mincss())
  .pipe(gulp.dest('./dist/css/'))
})
gulp.task('copyLess', function() {
  return gulp.src('./src/css/*.less')
  .pipe(lessmin())
  .pipe(autoprefixer({
    browsers: ['last 3 version']
  }))
  .pipe(mincss())
  .pipe(gulp.dest('./dist/css/'))
})
gulp.task('copyScss', function() {
  return gulp.task('./src/css/*.scss')
  .pipe(sassmin())
  .pipe(autoprefixer({
    browsers: ['last 3 version']
  }))
  .pipe(mincss())
  .pipe(gulp.dest('./dist/css/'))
})
gulp.task('copyImagePng', function() {
  return gulp.src('./src/images/*.png')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/images/'))
})
gulp.task('copyImagejpg', function () {
  return gulp.src('./src/images/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images/'))
})
gulp.task('clean', function() {
  return del.sync('./dist/')
})
// ftp

gulp.task('default', ['clean', 'copyCss', 'copyStyl', 'copyLess', 'copyScss', 'copyJs', 'copyHtml', 'copyImagePng', 'copyImagejpg'])