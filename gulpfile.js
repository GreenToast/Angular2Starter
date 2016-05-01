var gulp = require('gulp'),
	del = require('del'),
    $ = require('gulp-load-plugins')( {lazy:true} ),
    sourcemaps = require('gulp-sourcemaps'),
    ts = require('gulp-tsc')
    webpack = require('webpack-stream');
    
var serverConfig = require('./server/server.config');

var dest = '.release';

var paths = {
    e2eTs: ['test/e2e/**/*.ts'],
    e2eJs: ['test/e2e/**/*.js'],
    webPackTs:['webpack/webpack-*.ts'],
    webPackJs:['webpack/webpack-*.js']
};
var destpath = 'test/e2e/';
var destpathWebpack = 'build';

gulp.task('clean:release', function(doneCb) {
    return del(dest, doneCb);
});

gulp.task('clean:webpack', function(doneCb) {
    return del(destpathWebpack, doneCb);
});

gulp.task('build:server', function() {
    return gulp.src(['server/server.js', 'package.json', 'server/web.config', 'server/config.js'])
        .pipe(gulp.dest(dest));
});

gulp.task('build:html', function() {
    return gulp.src(['**/*.html', '!node_modules', '!node_modules/**'])
        .pipe(gulp.dest(dest));
});
/*
gulp.task('build:frontend', ['compileWebpack'],function() {
    return gulp.src('./app/boot_worker.ts','./app/boot_worker_app.ts')
    //TODO make configurable between worker and browser version
        .pipe($.webpack( require('./webpack-app-worker.config.js')))
        .pipe(gulp.dest(dest + '/app'));
});*/

gulp.task('build:frontend', ['compileWebpack'],function() {
    if(serverConfig.prodServer.webWorker){   
        var bootconfig = require('./build/webpack-worker-boot-prod.config').WORKER_BOOT_CONFIG; 
        var appconfig = require('./build/webpack-worker-app-prod.config').WORKER_APP_CONFIG; 
        gulp.src('./app/boot_worker.ts')
        .pipe(webpack(bootconfig))
        .pipe(gulp.dest(dest + '/app'));
        return gulp.src('./app/boot_worker_app.ts')
            .pipe(webpack(appconfig))
            .pipe(gulp.dest(dest + '/app'));
    }
    else{
        return gulp.src('./app/boot.ts')
            .pipe(webpack( require('./build/webpack-browser-prod.config').BROWSER_CONFIG))
            .pipe(gulp.dest(dest + '/app'));
    }
});

gulp.task('package-create', function() {

});

gulp.task('build:release', ['build:server', 'build:frontend','build:html']);

gulp.task('build:package', function() {
    return gulp.src(dest + '/**')
        .pipe($.zip('package.zip'))
        .pipe(gulp.dest(dest));
});

gulp.task('compileE2e', function () {
    return gulp.src(paths.e2eTs)
        //.pipe(sourcemaps.init())
        .pipe(ts({
            module: "commonjs",
            target: "es5",
            noImplicitAny: false,
            outDir: "dist",
            rootDir: ".",
            sourceMap: false,
            moduleResolution: "node",
            experimentalDecorators: true,
            emitDecoratorMetadata: true
             }))
        //.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(destpath))
});

gulp.task('compileWebpack', function () {
    return gulp.src(paths.webPackTs)
        //.pipe(sourcemaps.init())
        .pipe(ts({
            module: "commonjs",
            target: "es5",
            noImplicitAny: false,
            outDir: "dist",
            rootDir: ".",
            sourceMap: false,
            moduleResolution: "node",
            experimentalDecorators: true,
            emitDecoratorMetadata: true
             }))
        //.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(destpathWebpack))
});

gulp.task('cleanE2e', function (doneCb) {
    return del(paths.e2eJs, doneCb);
});