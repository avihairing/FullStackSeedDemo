/**
     * @ngdoc object
     * @name example.exampleController
     * @requires  $example
     * @description
     * Hello App controller
     */
(function(angular) {
    "use strict";

    /* ----- AngularJS Code ----- */
    angular.module('loginModule', [])
        .controller('loginCtrl', LoginCtrl);


    function LoginCtrl(loginBL) {
        //Define as properties instead of this:
        this.loginBL = loginBL;
        var self = this;
    }
    /* ----- JavaScript Code ----- */

    LoginCtrl.prototype = {
            constructor:LoginCtrl,
            doLogin:doLogin
    };

    //Constructor
    function doLogin() {
        var self = this;
        var userData = {
            "userName": this.userName,
            "password": this.password
        };

        if(self.loginBL.initAuthentication('aaaaa')){
            console.log("it-is")
        }else{
            console.log("its-not")
        }
    }
    //Prototype
})(angular);