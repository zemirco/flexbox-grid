
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      compile: {
        options: {
          compress: false
        },
        files: {
          'flexbox-grid.css': 'flexbox-grid.styl'
        }
      }
    },
    cssmin: {
      minify: {
        options: {
          report: 'gzip'
        },
        files: {
          'flexbox-grid.min.css': 'flexbox-grid.css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['stylus', 'cssmin']);
};