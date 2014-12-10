'use strict';

siagmApp.controller('FooterCtrl',  ['$scope', '$filter', 'DataPages' ,
	function ($scope, $filter, DataPages) {
		
		DataPages.getData(function(data) {
			console.log('data pages footer loaded');
			$scope.liens = $filter('filter')(data, {id:'liens-utiles'})[0];
			$scope.partenariats = $filter('filter')(data, {id:'partenariats'})[0];

		});

		

}]);