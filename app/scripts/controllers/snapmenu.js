'use strict';

siagmApp.controller('SnapmenuCtrl', ['$scope', 'Datactivites', 
	function ($scope, Datactivites) {
	   	Datactivites.getData(function(data) {
			console.log('data menu activites loaded');
			$scope.activites = data;
		});
	}]);