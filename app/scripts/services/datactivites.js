'use strict';

siagmApp.factory('Datactivites', ['$http', 
	function ($http) {
		return {
			getData: function(callback) {
				$http.get('contenus/activites.json').success(callback);
			}
      };
  }]);