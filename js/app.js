var app = angular.module('demoApp',['ngRoute', 'ngAnimate']);
app.controller('ctrlStudents', function($scope, StudentsFactory) {
	function init() {
		$scope.SortDesc = true;
		StudentsFactory.getStudents().success(function(students) {
			$scope.Students = students;			
		});
	}	
	init();
	
	$scope.ToggleSortDesc = function() {
		$scope.SortDesc = !$scope.SortDesc;
	}
});

app.factory('StudentsFactory', function($http) { 
	var factory = {};
	factory.getStudents = function() {
		return $http.get('/Students.json');
	};
	return factory;
});

// Routing
app.config(function($routeProvider) {
	$routeProvider.when('/',
	{
		controller: 'ctrlStudents',
		templateUrl: 'views/students.html'
	})
	.when('/orders/:customerId',
	{
		controller: 'ctrlOrders',
		templateUrl: 'views/orders.html'
	});
});
app.controller('ctrlOrders', function($scope, $routeParams) {
	$scope.customerId = $routeParams.customerId;
});