var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');


gulp.task('sass', function() {
    return gulp.src('./src/style/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})
gulp.task('watch', function() {
    return gulp.watch('./src/style/*.scss', gulp.series('sass'))
})
gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(server({
            port: 3500,
            proxies: [
                { source: '/api/get/list', target: 'http://localhost:3000/api/get/list]' }
            ]
        }))
})
gulp.task('default', gulp.series('sass', 'server', 'watch'))