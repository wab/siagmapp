'use strict';

describe('Controller: SnapmenuCtrl', function () {

  // load the controller's module
  beforeEach(module('siagmAppApp'));

  var SnapmenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SnapmenuCtrl = $controller('SnapmenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
