'use strict';

siagmApp.controller('SnapmenuCtrl', ['$scope', '$location', 'Datactivites', 
	function ($scope, $location, Datactivites) {
	   	Datactivites.getData(function(data) {
			console.log('data activites loaded');
			$scope.activites = data;
		});
	}]);