module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-ngdocs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  //grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    ngdocs: {
      options: {
        scripts: ['angular.js'],
        html5Mode: false
      },
      all: ['src/**/**.js']
    },
    connect: {
      options: {
        keepalive: true
      },
      server: {}
    },
    clean: ['docs'],
    jasmine : {
      src : 'src/**/*.js',
      specs : 'unitTesting/*.js'
    },
    karma: {
      unit: {
        configFile: 'unitTesting/karma.conf.js',
        browsers: ['Chrome'],
        singleRun: true
      }
    }
  });

  //grunt.registerTask('default', ['clean','jasmine', 'ngdocs', 'connect']);
  grunt.registerTask('default', ['clean','karma','ngdocs', 'connect']);

};
