'use strict';

describe('Service: datapage', function () {

  // load the service's module
  beforeEach(module('siagmAppApp'));

  // instantiate service
  var datapage;
  beforeEach(inject(function (_datapage_) {
    datapage = _datapage_;
  }));

  it('should do something', function () {
    expect(!!datapage).toBe(true);
  });

});
