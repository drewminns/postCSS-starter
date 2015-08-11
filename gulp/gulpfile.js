var gulp = require('gulp'),
		postcss = require('gulp-postcss');

// Array to store PostCSS plugins
var processors = [
	require('autoprefixer-core')({ browsers: ['last 2 versions', 'Firefox > 20']  }),
	require('cssnext')(),
	require('precss')(),
	require('postcss-quantity-queries')(),
	require('postcss-at2x')(),
	require('postcss-short')()
];

// 'styles' task used to transform CSS
gulp.task('styles', function() {
	return gulp.src('dev/main.css')
		// Pipe the styles in through PostCSS and pass in the 'processors' array.
		.pipe(postcss(processors))
		// Output the transformed CSS to the 
		.pipe(gulp.dest('prod'));
});