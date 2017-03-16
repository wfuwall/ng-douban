var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {//定义目录路径
    srcPath: 'src/',
    devPath: 'build/',
    prdPath: 'dist/'
};

gulp.task('lib', function () {
    gulp.src('bower_components/**/*.js')
        .pipe(gulp.dest(app.devPath + 'vendor'))
        .pipe(gulp.dest(app.prdPath + 'vendor'))
        .pipe($.connect.reload())
});

gulp.task('html', function () {
    gulp.src(app.srcPath + '**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prdPath))
        .pipe($.connect.reload())
});

gulp.task('json',function () {
    gulp.src(app.srcPath + 'data/*.json')
        .pipe(gulp.dest(app.devPath + 'data'))
        .pipe(gulp.dest(app.prdPath + 'data'))
        .pipe($.connect.reload())
});

gulp.task('images',function () {
    gulp.src(app.srcPath + 'images/*')
        .pipe(gulp.dest(app.devPath + 'images'))
        .pipe(gulp.dest(app.prdPath + 'images'))
        .pipe($.connect.reload())
});

gulp.task('css',function () {
    gulp.src('bower_components/bootstrap/dist/css/*')
        .pipe(gulp.dest(app.devPath + 'vendor/bootstrap/dist/css'))
        .pipe(gulp.dest(app.prdPath + 'vendor/bootstrap/dist/css'))
        .pipe($.connect.reload())
});

gulp.task('js',function () {
    gulp.src(app.srcPath + 'script/**/*.js')
        .pipe($.concat('index.js'))
        .pipe(gulp.dest(app.devPath + 'js'))
        .pipe($.uglify())
        .pipe($.rename('index.min.js'))
        .pipe(gulp.dest(app.prdPath + 'js'))
        .pipe($.connect.reload())
});

gulp.task('svg',function () {
    gulp.src('bower_components/bootstrap/dist/fonts/*')
        .pipe(gulp.dest(app.devPath + 'vendor/bootstrap/dist/fonts'))
        .pipe(gulp.dest(app.prdPath + 'vendor/bootstrap/dist/fonts'))
        .pipe($.connect.reload())
});

gulp.task('build',['lib','html','json','css','js','svg','images']);
gulp.task('clean',function () {
    gulp.src([app.devPath,app.prdPath])
        .pipe($.clean())
});

gulp.task('server',['build'],function () {
    $.connect.server({
        root:[app.devPath],
        livereload:true,
        port:8080
    });
    open('http://localhost:8080');

    gulp.watch(app.srcPath + 'script/**/*.js',['js']);
    gulp.watch('bower_components/**/*',['lib']);
    gulp.watch(app.srcPath + '**/*.html',['html']);
    gulp.watch(app.srcPath + 'data/**/*.json',['json']);
    gulp.watch('bower_components/bootstrap/dist/css/*',['css']);
    gulp.watch(app.srcPath + 'images/*',['images']);
    gulp.watch('bower_components/bootstrap/dist/fonts/*',['svg']);
});

gulp.task('default',['server']);