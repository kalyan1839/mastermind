var app = angular.module("mindSportsApp", ["ngRoute"]);

app.run(['$rootScope', function($rootScope) {
    $rootScope.page = {
        setTitle: function(title) {
            this.title = title + ' | Master Mind Sports';
        },

        activeThis: function(event) {
            var thisevent = angular.element(event.target);
            thisevent.parent().parent().find('li').removeClass('active');
            thisevent.parent().addClass('active');
        }
    }

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.page.setTitle(current.$$route.title || 'Competitions');
    });

}]);

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "views/home.html",
		controller: "homeCtrl"
	})
	.when("/Competitions", {
		templateUrl: "views/home.html",
		controller: "homeCtrl"
	});
});