module.exports = function(grunt) {

  var processors = [
    require('autoprefixer')({ browsers: ['last 2 versions', 'Firefox > 20']  }),
    require('cssnext')(),
    require('precss')(),
    require('postcss-quantity-queries')(),
    require('postcss-short')()
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    postcss: {
      options: {
        processors: processors
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'dev/',
          src: ['**/*.css'],
          dest: 'prod/'
        }]
      }
    }
  });

  // Load post-css.
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['postcss']);

};