'use strict';

siagmApp.controller('ActiviteCtrl',  ['$scope', 'Datactivites', 'DataPages', '$routeParams',  
	function ($scope, Datactivites, DataPages, $routeParams) {
		
		Datactivites.getData(function(data) {
			console.log('data activites loaded');
			$scope.activites = data;
		});

		DataPages.getData(function(data) {
			console.log('data pages loaded');
			$scope.pages = data;
		});

		$scope.activiteId = $routeParams.activiteId;

	}]);