'use strict';

siagmApp.controller('ContactCtrl',  ['$scope', 'DataPages', '$routeParams',  
	function ($scope, DataPages, $routeParams) {
		
		DataPages.getData(function(data) {
			console.log('data pages loaded');
			$scope.pages = data;
		});
		
		$scope.pageId = $routeParams.pageId;

	}]);