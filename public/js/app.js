(function() {
	
	var app = angular.module('main', ['ngRoute']);
	
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