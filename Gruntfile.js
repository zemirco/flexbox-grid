module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus: {
            compile: {
                options: {
                    compress: false
                },
                files: {
                    'css/grid.css': 'src/grid.styl'
                }
            }
        },

        autoprefixer: {
            dist: {
                options: {
                    /*
                     * Add target browsers here
                     * https://github.com/ai/autoprefixer#browsers
                     * browsers: ['android 4']
                     */
                },
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/'
                }]
            }

        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'css',
                ext: '.min.css'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['stylus', 'autoprefixer', 'cssmin']);
};
