'use strict';

siagmApp.controller('ActiviteCtrl',  ['$rootScope','$scope', '$filter', 'Datactivites', 'DataPages', '$routeParams',  
	function ($rootScope, $scope, $filter, Datactivites, DataPages, $routeParams) {
		
		$rootScope.activiteId = $routeParams.activiteId;
		
		Datactivites.getData(function(data) {
			console.log('data activites loaded');
			$scope.page = $filter('filter')(data, {id:$routeParams.activiteId})[0];
		});
		
	}]);