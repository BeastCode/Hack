window.angular.module('iswf.controllers.etfs', [])
    .controller('EtfsController', ['$scope', '$routeParams', '$location', 'Global', 'Etfs',
        function ($scope, $routeParams, $location, Global, Etfs) {
            $scope.global = Global;

            $scope.create = function () {
                var etf = new Etfs({
                    name: this.etf.name
                });

                etf.$save(function (response) {
                    $location.path("etfs/" + response._id);
                });

                this.etf.name = "";
            };

            $scope.find = function (query) {
                Etfs.query(query, function (etfs) {
                    $scope.etfs = etfs;
                });
            };

            $scope.findOne = function () {
                Etfs.get({ etfId: $routeParams.etfId }, function (etf) {
                    $scope.etf = etf;
                });
            };

            $scope.update = function () {
                var etf = $scope.etf;
                etf.$update(function () {
                    $location.path('etfs/' + etf._id);
                });
            };

            $scope.remove = function (etf) {
                etf.$remove();
                for (var i in $scope.etfs) {
                    if ($scope.etfs[i] == etf) {
                        $scope.etfs.splice(i, 1)
                    }
                }
            };
        }]);


