var gulp        = require('gulp');
var browserSync = require('browser-sync');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');

gulp.task('default', function() {
// place code for your default task here
});


gulp.task('bootstrap:update', function() {
	var js = [
		'./bower_components/jquery/dist/jquery.min.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
	];
	return gulp.src(js)
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./javascripts/'))
})
/**
* gulp watch
*
* This task rebuild the jekyll site when a post is updated.
* Jekyll automatically rebuild the site when something change. 
* Needs to watch the changes in site?
*/
gulp.task('watch', function() {
	browserSync.init({
		proxy: "127.0.0.1:4000",
		online: false,
		logPrefix: 'JEKYLL',
		open: false,
		ui: false,
	});
	gulp.watch('_sass/**', ['sass']);
});

gulp.task('sass', function() {
	// var files = ;
	return gulp.src('_sass/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./_site/css'))
		.pipe(browserSync.stream());
})
