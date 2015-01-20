'use strict'

var path = require('path');

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-ngdocs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-ftpush');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-prompt');
  grunt.loadNpmTasks('grunt-template');

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
    clean: ['server'],
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
    },
    ftpush: {
      build: {
        auth: {
          host: 'ftp.ng-root.com',
          port: 21,
          authKey: 'key1'
        },
        src: path.resolve()+'/server/',
        dest: '/',
        simple:true
        //exclusions: ['c:/users/avihai/webstormprojects/fullstackseeddemo/libs','c:/users/avihai/webstormprojects/fullstackseeddemo/node_modules']
        //keep: ['/libs','node_modules/']
      }
    },
    prompt: {
      target: {
        options: {
          questions: [
            {
              config: 'echo.Siteinput',
              type: 'input',
              message: 'Enter Site Name',
              validate: function(value) {
                if (value === '') {
                  return 'A value is required.';
                }
                return true;
              }
            },
            {
              config: 'echo.Userinput',
              type: 'input',
              message: 'Enter UserName',
              validate: function(value) {
                if (value === '') {
                  return 'A value is required.';
                }
                var  test =  value;
                return true;
              }
            },
            {
              config: 'echo.password',
              type: 'password',
              message: 'Password input',
              validate: function(value) {
                if (value.length < 5) {
                  return 'Password should be at least 5 characters.';
                }

                return true;
              }
            }
          ],
          then: function() {
            console.log(path.resolve());
          }
        }
      }
    },
    copy: {
      main: {
        src: ['index.html','app.js','src/**/**.*','*.json','fonts/**.*','css/**.*','.bowerrc','/unitTesting'],
        dest: 'server/<%= echo.Siteinput %>/'
      }
    },
    'template': {
      'dev': {
        'options': {
          'data': {
            'title': '<%= echo.Siteinput %>',
            'userName': '<%= echo.Userinput %>'
          }
        },
        'files': {
          'index.html': ['index.html']
        }
      }
    }
  });
  //grunt.registerTask('default', ['clean','karma','ngdocs', 'connect']);
  grunt.registerTask('default', ['prompt','clean','template','copy','ftpush']);


  //grunt.registerTask('default2', ['results']);

};