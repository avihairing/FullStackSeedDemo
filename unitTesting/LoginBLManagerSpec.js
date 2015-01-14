describe("loginBL unit tests", function () {

    var service;

    beforeEach(module('loginModule'));

    beforeEach(inject(function (loginBL) {
        service = loginBL;
    }));

    it("test return type authentication", function(){
        var bla = service.initAuthentication();
        expect(bla).toBeTruthy();
    });

    it("test return type authentication", function(){
        var bla = service.initAuthentication();
        expect(bla).toBeTruthy();
    });

    it("test return type authentication", function(){
        var bla = service.initAuthentication();
        expect(bla).toBeTruthy();
    });

    it("test return type authentication", function(){
        var bla = service.initAuthentication();
        expect(bla).toBeTruthy();
    });

    it("checking username equal avihai", function(){
        var name = 'avihai';
        var bla = service.initAuthentication(name);
        expect(bla).toBeFalsy();
    });

});