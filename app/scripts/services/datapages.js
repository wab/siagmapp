'use strict';

siagmApp.factory('DataPages', ['$http', 
	function ($http) {
		return {
			getData: function(callback) {
				$http.get('contenus/pages.json').success(callback);
			}
      };
  }]);