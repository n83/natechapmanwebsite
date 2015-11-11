(function() {

	var app = angular.module('app');

	var siteController = function($scope, loginService) {
		$scope.pageClass = 'home';
	};

	app.controller('site', ['loginService', siteController]);
}());