var app = './app/';

  var gulp       = require('gulp'),
  connect        = require('gulp-connect'),
  del          = require('del'),
  mainBowerFiles = require('main-bower-files'),
  inject         = require('gulp-inject'),
  less           = require('gulp-less'),
  gulpif         = require('gulp-if'),
  uglify         = require('gulp-uglify'),
  minifyCss      = require('gulp-minify-css'),
  gulpFilter     = require('gulp-filter'),
  copy           = require('gulp-copy'),
  htmlmin        = require('gulp-htmlmin'),
  imagemin       = require('gulp-imagemin'),
  useref         = require('gulp-useref');

gulp.task('bower', function() {
    return gulp.src(app + 'index.html')
    .pipe(inject(gulp.src(mainBowerFiles(), {base: './app/bower_components'}, {name: 'bower'})))
    .pipe(gulp.dest(app));
});      

gulp.task('connect', function() {
 connect.server({
    root: app,
    port: 9000,
    livereload: true,
     middleware: function (connect) {
            return [
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              )
            ];
          }
  });
});

gulp.task('clean', function () {
    return del('dist');
});

gulp.task('reload', function () {
  gulp.src(app + '*.html')
    .pipe(connect.reload());
});

gulp.task('less', function() {
	return gulp.src(app + 'styles/main.less')
	.pipe(less())
	.pipe(gulp.dest(app + 'styles'));
})

gulp.task('watch', function() {
	gulp.watch([app + 'styles/{,*/}*.less'], ['less']);
	gulp.watch(
    [
    app + '*.html', 
    app + 'views/*.html', 
    app + 'styles/*.css', 
    app + 'scripts/{,*/}*.js',
    'gulpfile.js'
    ], 
    ['reload']
    );

});

gulp.task('copy', function() {
  gulp.src(app + '*.*')
    .pipe(gulp.dest('dist'));
  gulp.src(app +'fonts/**/*.{ttf,woff,eot,svg}')
    .pipe(gulp.dest('dist/fonts'));
   gulp.src(app +'contenus/*.json')
    .pipe(gulp.dest('dist/contenus'));
  gulp.src('app/views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/views'));
  gulp.src('app/images/**/*')
    .pipe(imagemin({
            progressive: true
        }))
    .pipe(gulp.dest('dist/images'));
})

gulp.task('default', ['connect', 'watch']);

gulp.task('build', ['clean', 'less', 'copy'],  function() {
  var assets = useref.assets();

    return gulp.src(app +'/index.html')
       .pipe(assets)
       .pipe(gulpif('**/*.js', uglify()))
       .pipe(gulpif('**/*.css', minifyCss()))
       .pipe(assets.restore())
       .pipe(useref())
       .pipe(gulp.dest('dist'));

});