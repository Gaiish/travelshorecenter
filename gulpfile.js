var gulp = require('gulp'),
    sass = require('gulp-ruby-sass')
    notify = require('gulp-notify')
    bower = require('gulp-bower')
    concat = require('gulp-concat')
    uglify = require('gulp-uglify');//for minifying js

var config = {
  sassPath: './sass',
  bowerDir:'./bower_components',
  js: [
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
  ]
}
gulp.task('bower', function(){
  return bower()
          .pipe(gulp.dest(config.bowerDir))
});
gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});
gulp.task('css', function() {
    return sass(config.sassPath + '/app.scss',
      {
          style: 'compressed',
          loadPath: [
              './sass',
              config.bowerDir + '/bootstrap-sass/assets/stylesheets',
              config.bowerDir + '/font-awesome/scss',
          ]
      }).on("error", notify.onError(function (error) {
              return "Error: " + error.message;
          })).pipe(gulp.dest('./public/css'));
});

gulp.task('js', function(){
  return gulp.src(config.js)
              .pipe(concat('app.js'))
              .pipe(gulp.dest('./public/js'))
});//.pipe(uglify())

gulp.task('watch', function() {
  gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});

gulp.task('default', ['bower', 'icons', 'css', 'js']);
