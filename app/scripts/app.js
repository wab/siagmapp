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
siagmApp.config(['$routeProvider', 'snapRemoteProvider', '$locationProvider', function ($routeProvider, snapRemoteProvider, $locationProvider) {
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
    snapRemoteProvider.globalOptions = {
      disable: 'right',
      tapToClose: 'true'
    };
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }
]);