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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/page', {
        templateUrl: 'views/page.html',
        controller: 'PageCtrl'
      })
      .when('/activite', {
        templateUrl: 'views/activite.html',
        controller: 'ActiviteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
])