var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var jsFiles = ['*.js', 'lib/**/*.js']

gulp.task('default', function() {
  console.log('Test');
});

gulp.task('serve', function() {
  var options = {
    script: 'app.js',
    ext: 'js html',
    delayTime: 1,
    env: {
      'NODE_ENV': 'development',
      'PORT': 3000
    },
    watch: jsFiles
  };

  return $.nodemon(options)
    .on('restart', function(event) {
      console.log('[nodemon]: Restarting...');
    });
});
