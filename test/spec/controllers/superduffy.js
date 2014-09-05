'use strict';

describe('Controller: SuperduffyCtrl', function () {

  // load the controller's module
  beforeEach(module('penelopejsApp'));

  var SuperduffyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuperduffyCtrl = $controller('SuperduffyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
