window.angular.module('iswf.services.games', [])
    .factory('Games', ['$resource',
        function ($resource) {
            return $resource(
                'games/:gameId',
                {
                    gameId: '@_id'
                },
                {
                    update: {method: 'PUT'}
                }
            )
        }]);

