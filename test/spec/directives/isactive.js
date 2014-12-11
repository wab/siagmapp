'use strict';

describe('Directive: isActive', function () {

  // load the directive's module
  beforeEach(module('siagmAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<is-active></is-active>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the isActive directive');
  }));
});
