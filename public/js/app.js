var myApp = angular.module('myApp', [
	'ngRoute',
	'todoControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'MainController'
	})
	.when('/details/:itemID', {
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	})
	.when('/calendar', {
		templateUrl: 'partials/calendar.html',
		controller: 'CalendarController'
	})
	.otherwise({
		redirectTo: '/list'
	});
}]);