window.angular.module('iswf.controllers.games', [])
    .controller('GamesController', ['$scope', '$routeParams', '$location', 'Global', 'Games',
        function ($scope, $routeParams, $location, Global, Games) {
            $scope.global = Global;

            $scope.create = function () {
                var game = new Games({
                    name: this.game.name
                });

                game.$save(function (response) {
                    $location.path("games/" + response._id);
                });

                this.game.name = "";
            };

            $scope.find = function (query) {
                Games.query(query, function (games) {
                    $scope.games = games;
                });
            };

            $scope.findOne = function () {
                Games.get({ gameId: $routeParams.gameId }, function (game) {
                    $scope.game = game;
                });
            };

            $scope.update = function () {
                var game = $scope.game;
                game.$update(function () {
                    $location.path('games/' + game._id);
                });
            };

            $scope.remove = function (game) {
                game.$remove();
                for (var i in $scope.games) {
                    if ($scope.games[i] == game) {
                        $scope.games.splice(i, 1)
                    }
                }
            };
        }]);


