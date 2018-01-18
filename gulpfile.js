const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');


//CONFIG AUTO PREFIXEUR

const autoPrefixerConfig={
          browsers: ['last 2 versions','IE 10'],
          cascade: false
      }






// INIT BROWSER SYNC SERVER
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
          proxy: "appGrocerie.dev"

        }
    });
});

// RELOAD BROWSERSYNC
gulp.task('browser-sync-reload', function() {
  browserSync.reload();
});

// RELOAD BROWSERSYNC
gulp.task('css', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer(autoPrefixerConfig))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());


});


// WATCH
gulp.task('watch', ['browser-sync'], function(){
  gulp.watch('./*.html', ['browser-sync-reload']);
  gulp.watch('./scss/**/*.scss', ['css']);

});

//simple tasks
gulp.task('default',['css']);
gulp.task('build',['images','css','js-concat']);
