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
siagmApp.config(['$routeProvider', 'snapRemoteProvider', '$locationProvider', function ($route, snapRemoteProvider, $location) {
    $route
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
    // $location.html5Mode(true);
    $location.hashPrefix('!');
  }
]);