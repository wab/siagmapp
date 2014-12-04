'use strict';

siagmApp.controller('ActiviteCtrl',  ['$scope', 'Datactivites', 
	function ($scope, Datactivites) {
		Datactivites.getData(function(data) {
			console.log('data activites loaded');
			$scope.activites = data;
		});
	}]);