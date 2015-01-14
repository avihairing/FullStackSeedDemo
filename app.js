(function(angular){
    "use strict";
    ///////////// AngularJS Code ///////
    var app = angular.module('learn',
        [
            'ui.router',
            'loginModule',
            'loginModule'
        ])
        .config(function($stateProvider,$urlRouterProvider){
            //make case insensitive
            $urlRouterProvider.rule(function ($injector, $location) {
                //what this function returns will be set as the $location.url
                var path = $location.path(), normalized = path.toLowerCase();
                if (path != normalized) {
                    //instead of returning a new url string, I'll just change the $location.path directly so I don't have to worry about constructing a new url string and so a new state change is not triggered
                    $location.replace().path(normalized);
                }
            });
            //make case insensitive
            $urlRouterProvider
                // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                .otherwise('login');
            $stateProvider
                .state('LoggedOut', {
                    url: '/login',
                    templateUrl: 'src/views/login.html'
                })
                .state('PreLoggedIn', {
                    url: '/loading',
                    templateUrl: 'src/views/loading.html'
                })
                .state('LoggedIn', {
                    url: '/main',
                    templateUrl: 'src/views/main.html'
                })
        });



})(angular);