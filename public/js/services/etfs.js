window.angular.module('iswf.services.etfs', [])
    .factory('Etfs', ['$resource',
        function ($resource) {
            return $resource(
                'etfs/:etfId',
                {
                    etfId: '@_id'
                },
                {
                    update: {method: 'PUT'}
                }
            )
        }]);

