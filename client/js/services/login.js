(function() {

	var loginService = function($http) {

		var login = function(userName, password) {
			console.log('Logged In');
		}

		return {
			login: login
		};
	};

	var module = angular.module('app');
	module.factory('loginService', loginService);

}());