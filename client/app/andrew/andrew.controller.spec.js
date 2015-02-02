'use strict';

describe('Controller: AndrewCtrl', function () {

  // load the controller's module
  beforeEach(module('myProjectApp'));

  var AndrewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AndrewCtrl = $controller('AndrewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
