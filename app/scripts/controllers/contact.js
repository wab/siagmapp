'use strict';

siagmApp.controller('ContactCtrl',  ['$rootScope', '$scope', '$http' , 
	function ($rootScope, $scope, $http) {

		$rootScope.id = 'contact';
		
		// create a blank object to hold our form information
		// $scope will allow this to pass between controller and view
		$scope.formData = {};
		$scope.formData.newsletter = 'partenaires-newsletter';
		
		 // function to submit the form after all validation has occurred            
        $scope.submitForm = function(isValid) {

        	$scope.submitted = true;

            // check to make sure the form is completely valid
            if (isValid) {
            	$scope.submitted = false;

               $http({
			        method  : 'POST',
			        url     : 'process.php',
			        data    : $.param($scope.formData),  // pass in data as strings
			        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
			    })
			        .success(function(data, status, headers, config) {
			            console.log(data);

			            if (!data.success) {
			            	// if not successful, bind errors to error variables
			                $scope.e_name = data.errors.name;
			                $scope.e_email = data.errors.email;
			                $scope.e_contenu = data.errors.contenu;
			                
			            } else {
			            	// if successful, bind success message to message
			                $scope.message = data.message;
			                $scope.e_name = data.name;
			                $scope.e_email = data.email;
			                $scope.e_contenu = data.contenu;
			            }
			        });

            }

        };

        


	}]);