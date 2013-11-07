window.angular.module('iswf.services.portfolios', [])
    .factory('Portfolios', ['$resource',
        function ($resource) {
            return $resource(
                'portfolios/:portfolioId',
                {
                    portfolioId: '@_id'
                },
                {
                    update: {method: 'PUT'}
                }
            )
        }]);
