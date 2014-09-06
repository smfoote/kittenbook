module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
          release: {
            src: ['js/values.js', 'js/prompt.js'],
            dest: 'release/main.js'
          }
        },
        copy: {
          release: {
            src: 'manifest.json',
            dest: 'release/manifest.json'
          }
        },
        jshint: {
          files: ['js/values.js', 'js/prompt.js']
        },
        watch: {
          files: ['<%= jshint.files %>', 'manifest.json'],
          tasks: ['default']
        }
    });

    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('default', ['jshint', 'concat', 'copy']);
};
