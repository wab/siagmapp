'use strict';

siagmApp.controller('ActiviteCtrl',  ['$scope', 'Datactivites', '$routeParams',  
	function ($scope, Datactivites, $routeParams) {
		
		Datactivites.getData(function(data) {
			console.log('data activites loaded');
			$scope.activites = data;
		});

		$scope.activiteId = $routeParams.activiteId;

	}]);