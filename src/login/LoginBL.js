/**
 * @ngdoc service
 * @name example.exampleService
 * @requires $example
 * @description  enter description of the service.
 *
 *
 */
(function(angular) {
    "use strict";

    /* ----- AngularJS Code ----- */
    angular.module('loginModule')
        .service('loginBL', LoginBL);

    /* ----- JavaScript Code ----- */

    //Constructor
    function LoginBL() {
        //Assign the services you need to use in this service into the this object
    }
    //Prototype
    LoginBL.prototype = {
            //Return only the functions you want to make public
            constructor:LoginBL,
            initAuthentication : initAuthentication
            //func2 : func2
    };

    /* ----- Functions ----- */
    function initAuthentication(userName){
        /**
         * @ngdoc function
         * @name example.exampleService.func1Func
         * @methodOf example.exampleService
         * @param {string} example example description of param or absolute URL specifying the destination of the request.
         * @description description of the method
         * @example here u put an example in this format:
         <pre>
         function funcName1(example){
         }
         </pre>
         */
        if(userName == 'avihai')
            return false;
             else
            return true;
    };
    //function func2Func(){};
})(angular);