'use strict';

siagmApp.controller('ActiviteCtrl',  ['$rootScope','$scope', '$filter', 'Datactivites', 'DataPages', '$routeParams',  
	function ($rootScope, $scope, $filter, Datactivites, DataPages, $routeParams) {
		
		Datactivites.getData(function(data) {
			console.log('data activites loaded');
			$scope.page = $filter('filter')(data, {id:$routeParams.activiteId})[0];
			$scope.$parent.seo.pageTitle = $scope.page.title;
			$scope.$parent.seo.pageDesc = $scope.page.contenu.chapo;
		});
		
	}]);