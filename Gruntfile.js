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
      }
    });

    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Register tasks
    grunt.registerTask('default', ['jshint', 'concat', 'copy']);
};
