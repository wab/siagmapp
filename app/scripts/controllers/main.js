'use strict';

siagmApp.controller('MainCtrl',  ['$scope', 'Datactivites' ,
	function ($scope, Datactivites) {
		
		Datactivites.getData(function(data) {
			console.log('data activites loaded');
			$scope.activites = data;
		});

		$scope.$parent.seo = {
			pageTitle : "Golfe du Morbihan",
			pageDesc : "Le guide des bonnes pratiques sur le Parc Naturel Régional du Golfe du Morbihan"

		}

		$scope.status = 'ready';

}]);