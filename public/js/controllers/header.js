window.angular.module('iswf.controllers.header', [])
  .controller('HeaderController', [ '$scope', 'Global',
    function($scope, Global) {
        $scope.global = Global;

        $scope.navbarEntries = [
            {
                "title": "Admin",
                "link": "games"
            },
            {
                "title": "Portfolios",
                "link": "portfolios"
            },
            {
                "title": "Funds",
                "link": "etfs"
            }
        ];

    }]);
