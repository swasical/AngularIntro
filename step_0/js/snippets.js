// create a module
var app = angular.module('demoApp',['ngRoute', 'ngAnimate']);

// create a conctroller
app.controller('ctrleStudents', function($scope, StudentsFactory) {
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

// create a factory
app.factory('StudentsFactory', function($http) { 
	var factory = {};
	factory.getStudents = function() {
		return $http.get('/Students.json');
	};
	return factory;
});

// setup routing
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

// <script src="lib/angular-1.2.25.js"></script>
// <script src="lib/angular-route.js"></script>
// <script src="lib/angular-animate.js"></script>
// <script src="js/app.js"></script>