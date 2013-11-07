//Setting up route
window.app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'views/index.html' })
        .when('/games', { templateUrl: 'views/games/list.html' })
        .when('/games/create', { templateUrl: 'views/games/create.html' })
        .when('/games/:gameId/edit', { templateUrl: 'views/games/edit.html' })
        .when('/games/:gameId', { templateUrl: 'views/games/view.html' })
        .when('/portfolios', { templateUrl: 'views/portfolios/list.html' })
        .when('/portfolios/create', { templateUrl: 'views/portfolios/create.html' })
        .when('/portfolios/:portfolioId/edit', { templateUrl: 'views/portfolios/edit.html' })
        .when('/portfolios/:portfolioId', { templateUrl: 'views/portfolios/view.html' })
        .when('/etfs', { templateUrl: 'views/etfs/list.html' })
        .when('/etfs/:etfId', { templateUrl: 'views/etfs/view.html' })
        .otherwise({redirectTo: '/'});
}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function ($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function ($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);
