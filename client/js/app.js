(function() {
	
	var app = angular.module('app', ['ngRoute', 'ngAnimate']);
	
	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		// Define Routes
		$routeProvider
			.when('/home', {
				templateUrl: 'home.html',
				controller: 'home'
			})
			.when('/about', {
				templateUrl: 'about.html',
				controller: 'about'
			})
			.when('/contact', {
				templateUrl: 'contact.html',
				controller: 'contact'
			})
			.otherwise({ redirectTo: '/home' });

		$locationProvider.html5Mode(true);
	}]);

}());