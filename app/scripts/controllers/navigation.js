'use strict';

siagmApp.controller('NavigationCtrl', ['$scope', '$location', 'Data',  function ($scope, $location, Data) {
    Data.getData(function(data) {
    console.log('data navigation loaded');
    $scope.pages = data.pages;
  });
    // classe active
    $scope.isActive = function(page) {
      if (page.path === $location.path()) {
        return true;
      }
      return false;
    };
  }]);