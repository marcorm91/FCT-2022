const gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    browserSync = require('browser-sync').create();
var stripCssComments = require('gulp-strip-css-comments');
var strip_comments = require('gulp-strip-json-comments');
var replace = require('gulp-replace');
var changed = require('gulp-changed');



gulp.task('dist', function () {
    'use strict';
    var twig = require('gulp-twig');

    gulp.src('./dev/assets/**/*')
        .pipe(gulp.dest('./dist/assets/'));

    gulp.src('./dev/modules/pages/**/*.twig')
        .pipe(twig())
        .pipe(gulp.dest('./dist/paginas')
        );

        gulp.src('./dev/modules/components/**/*.twig')
        .pipe(twig())
        .pipe(gulp.dest('./dist/components')
        );

    return gulp.src('./dev/modules/components/**/*.twig')
        .pipe(twig())
        .pipe(gulp.dest('./dist/componentes')
        );
});

gulp.task('concatJS', function () {
    'use strict';
    var concat = require('gulp-concat');

    return gulp.src(['./dev/modules/**/*.js'])
        .pipe(concat("main.js"))
        .pipe(gulp.dest('./dev/assets/js/'));


});

gulp.task('compile',['sass','concatJS'], function () {
    'use strict';
    var twig = require('gulp-twig');

    gulp.src('./dev/modules/pages/**/*.twig')
  //  .pipe(changed('./dev/modules/pages', {extension: '.html'}))   
    .pipe(twig())
        
    .pipe(gulp.dest('./dev/modules/pages')
    );

    gulp.src('./dev/modules/components/**/*.twig')
    //  .pipe(changed('./dev/modules/pages', {extension: '.html'}))   
      .pipe(twig())

      .pipe(gulp.dest('./dev/modules/components')
      );


        gulp.src('./dev/index.twig')        
          .pipe(twig())
              .pipe(gulp.dest('./dev/')
              );

    return gulp.src('./dev/modules/components/**/*.twig')
        .pipe(twig())
        .pipe(gulp.dest('./dev/modules/components')
        );

});

gulp.task('sass', () => {

    gulp.src(['./dev/_scss/*.scss'])
        .pipe(sass({
            outputStyle: 'uncompressed'
        }).on('error', sass.logError))
        .pipe(strip_comments())
        .pipe(stripCssComments())
        .pipe(gulp.dest('./dev/assets/css/'));


    gulp.src(['./dev/modules/**/*.scss'])
        .pipe(sass({
            outputStyle: 'uncompressed'
        }).on('error', sass.logError))
        .pipe(strip_comments())
        .pipe(stripCssComments())
        .pipe(gulp.dest('./dev/modules/'))
        .on('error', console.log);

    gulp.src(['./dev/modules/**/*.scss'])
        .pipe(sass({
            outputStyle: 'uncompressed'
        }).on('error', sass.logError))
        .pipe(strip_comments())
        .pipe(stripCssComments())
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest('./dev/assets/css/'));


});



gulp.task('default', () => {

    browserSync.init(null, {
        server: {
            baseDir: './',
        //    directory: true 
             index: "dev/index.html"
        },
        open: false,
    }, function (err, browserSync) {
        require('opn')(browserSync.options.getIn(['urls', 'local']), { app: ['chrome.exe', '--incognito'] });
    });

    gulp.start('compile');
    gulp.watch("./dev/**/*.scss", ['sass']);
    gulp.watch("./dev/**/*.js", ['concatJS']);
    gulp.watch("./dev/**/*.twig", ['compile', 'sass']);
    gulp.watch('./**/*.twig').on('change', browserSync.reload);
    gulp.watch('./**/*.scss').on('change', browserSync.reload);
    gulp.watch('./dev/assets/js/*.js').on('change', browserSync.reload);
 
});