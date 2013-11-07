window.angular.module('iswf.controllers.portfolios', [])
    .controller('PortfoliosController', ['$scope', '$routeParams', '$location', 'Global', 'Games', 'Portfolios',
        function ($scope, $routeParams, $location, Global, Games, Portfolios) {

            $scope.global = Global;

            $scope.populateGames = function (query) {
                Games.query(query, function (games) {
                    $scope.games = games;
                });
            };

            $scope.create = function () {
                var portfolio = new Portfolios({
                    game: this.portfolio.game,
                    name: this.portfolio.name,
                    funds: this.funds
                });

                portfolio.$save(function (response) {
                    $location.path("portfolios/" + response._id);
                });

                this.game = "";
                this.name = "";
                this.funds = [];
            };

            $scope.update = function () {
                var portfolio = $scope.portfolio;

                portfolio.$update(function () {
                    $location.path('portfolios/' + portfolio._id);
                });
            };

            $scope.find = function (query) {
                Portfolios.query(query, function (portfolios) {
                    $scope.portfolios = portfolios;
                });
            };

            $scope.findOne = function () {
                Portfolios.get({ portfolioId: $routeParams.portfolioId }, function (portfolio) {
                    $scope.portfolio = portfolio;
                });
            };

            $scope.remove = function (portfolio) {
                portfolio.$remove();
                for (var i in $scope.portfolios) {
                    if ($scope.portfolios[i] == portfolio) {
                        $scope.portfolios.splice(i, 1);
                    }
                }
            };
        }]);
