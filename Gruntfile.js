
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      dev: {
        options: {
          compress: false
        },
        files: {
          'flexbox-grid.css': 'flexbox-grid.styl'
        }
      },
      prod: {
        options: {
          compress: true
        },
        files: {
          'flexbox-grid.min.css': 'flexbox-grid.styl'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.registerTask('default', ['stylus']);
};