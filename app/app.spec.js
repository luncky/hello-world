'use strict';

describe('PhoneListController', function() {

  beforeEach(module('phonecatApp'));

  it('should create a `phones` model with 3 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});

    expect(scope.phones.length).toBe(3);
  }));


  it("the name field should be 'world'", inject(function($controller){
  		var scope={};
  		var crtl=$controller("PhoneListController", {$scope: scope});
  		expect(scope.name).toBe('world');
  }));



});
