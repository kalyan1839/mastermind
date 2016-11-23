app.controller("homeCtrl", ['$scope', 'Football',function($scope, Football){
	var football = new Football();
	var data1 = football.competitions().success(function(data){
		console.log(data);
		$scope.competitions = data;
	});
	
}]);