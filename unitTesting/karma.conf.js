module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            'libs/angularjs/angular.js',
            'libs/angular-mocks/angular-mocks.js',
            'libs/jasmine/lib/jasmine-core/jasmine.js',
            'libs/jasmine/lib/jasmine-core/jasmine-html.js',
            'src/login/loginCtrl.js',
            'src/login/LoginBL.js',
            //'test/StorageManagerSpec.js'
            'unitTesting/LoginBLManagerSpec.js'
            //'test/LoginProxyManagerSpec.js'
        ],

//        exclude: [
//            'src/app.js',
//            'src/directives.js',
//            'src/symbole.js'
//        ],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/**/*.js': ['coverage']
        },

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
