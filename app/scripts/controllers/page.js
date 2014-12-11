'use strict';

siagmApp.controller('PageCtrl',  ['$scope', '$filter', 'DataPages', '$routeParams',  
	function ($scope, $filter, DataPages, $routeParams) {
		
		DataPages.getData(function(data) {
			console.log('data pages loaded');
			$scope.page = $filter('filter')(data, {id:$routeParams.pageId})[0];
		});

	}]);