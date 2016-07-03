var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default', function() {
  // place code for your default task here
});

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
	gulp.watch('_site/feed.xml').on('change', browserSync.reload);
});
