'use strict';

var siagmApp = angular.module('siagmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'snap'
  ]);
siagmApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/page/:pageId', {
        templateUrl: 'views/page.html',
        controller: 'PageCtrl'
      })
      .when('/activite/:activiteId', {
        templateUrl: 'views/activite.html',
        controller: 'ActiviteCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
])

.config(['snapRemoteProvider', function(snapRemoteProvider) {
  snapRemoteProvider.globalOptions = {
    disable: 'right',
    tapToClose: 'true'
  };
}]);