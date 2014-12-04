'use strict';

describe('Controller: ActiviteCtrl', function () {

  // load the controller's module
  beforeEach(module('siagmAppApp'));

  var ActiviteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActiviteCtrl = $controller('ActiviteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
