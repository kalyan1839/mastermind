app.factory('Football', ['$http', function($http){

	function Football(){

	}


	Football.prototype = {
		competitions: function(){
			var scope = this;
			return $http.get('https://api.football-data.org/v1/competitions/?season=2016', { headers: {'Authorization': '0a5b1343569648638cddb1e8ffb5128a'}});
		}
	}

	return Football;

}]);