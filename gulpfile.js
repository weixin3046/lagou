/**
 * Created by wyunfei on 2017/12/20.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');


// 定义目录路径
var app = {
    srcPath: 'src/',
    devPath: 'build/',
    prodPath: 'dist/'
};

// angularJS文件拷贝
gulp.task('lib', function () {
   gulp.src('bower_components/**/*.js')
       .pipe(gulp.dest(app.devPath + 'vendor'))
       .pipe(gulp.dest(app.prodPath + 'vendor'))
    .pipe($.connect.reload());
});

// html拷贝
gulp.task('html', function () {
    gulp.src(app.srcPath + '**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prodPath))
        .pipe($.connect.reload());
});

//拷贝数据
gulp.task('json', function () {
   gulp.src(app.srcPath+ 'data/**/*.json')
       .pipe(gulp.dest(app.devPath + 'data'))
       .pipe(gulp.dest(app.prodPath + 'data'))
       .pipe($.connect.reload());
});

// 编译sass
gulp.task('sass', function () {
    $.rubySass(app.srcPath + 'style/app.scss')
        .pipe(gulp.dest(app.devPath + 'style'))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.prodPath + 'style'))
        .pipe($.connect.reload());
});

// js
gulp.task('js', function () {
   gulp.src(app.srcPath + 'script/**/*.js')
       .pipe($.babel({
           presets: ['es2015']
       }))
       .pipe($.concat('index.js'))
       .pipe(gulp.dest(app.devPath + 'script'))
       .pipe($.ngAnnotate())
       .pipe($.uglify())
       .pipe(gulp.dest(app.prodPath + 'script'))
       .pipe($.connect.reload());
});

//image
gulp.task('imgs', function () {
    gulp.src(app.srcPath + 'imgs/**/*')
        .pipe(gulp.dest(app.devPath + 'imgs'))
        .pipe($.imagemin())
        .pipe(gulp.dest(app.prodPath + 'imgs'))
        .pipe($.connect.reload());
});

//clean
gulp.task('clean', function () {
    gulp.src([app.devPath, app.prodPath])
        .pipe($.clean());
});

// 总任务
gulp.task('build', ['imgs', 'js', 'sass', 'lib', 'html', 'json']);

gulp.task('server', ['build'], function () {
    $.connect.server({
        host: 'localhost',
        root: [app.devPath],
        livereload: true,
        port: 1234
    });
    // open('http://localhost:1234');

    gulp.watch('bower_components/**/*', ['lib']);
    gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
    gulp.watch(app.srcPath + '**/*.html', ['html']);
    gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
    gulp.watch(app.srcPath + 'style/**/*.scss', ['sass']);
    gulp.watch(app.srcPath + 'imgs/**/*', ['imgs']);
});

gulp.task('default', ['server']);
