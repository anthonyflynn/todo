var todoControllers = angular.module('todoControllers', []);

todoControllers.controller('MainController', ['$scope', '$http', function($scope, $http) {
	$scope.formData = {};

	$http.get('/api/todos')
	  .success(function(data) {
	  	$scope.todos = data;
	  	console.log(data);
	  })
	  .error(function(data) {
	  	console.log('Error: ' + data);
	  });

	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}]);

todoControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.whichItem = $routeParams.itemID;

    $http.get('/api/todos')
    .success(function(data) {
        $scope.todos = data;
        $scope.formData = $scope.todos[$routeParams.itemID];
        console.log(data);
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });

    $scope.editTodo = function(id) {
        $http.put('/api/todos/' + id, $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}]);

//Need to add todoControllers.controller('CalendarController')
