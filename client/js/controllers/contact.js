(function() {

	var app = angular.module('app');

	var contactController = function($scope) {
		$scope.pageClass = 'contact';
	};

	app.controller('contact', contactController);
}());