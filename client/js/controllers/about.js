(function() {

	var app = angular.module('app');

	var aboutController = function($scope) {
		$scope.pageClass = 'about';
	};

	app.controller('about', ['$scope', aboutController]);
}());