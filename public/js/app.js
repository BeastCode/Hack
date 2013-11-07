window.app = angular.module('iSWF', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ngRoute', 'iswf.controllers', 'iswf.directives', 'iswf.services']);

// bundling dependencies
window.angular.module('iswf.controllers', ['iswf.controllers.header','iswf.controllers.index', 'iswf.controllers.games', 'iswf.controllers.portfolios', 'iswf.controllers.etfs']);
window.angular.module('iswf.services', ['iswf.services.global', 'iswf.services.games', 'iswf.services.portfolios', 'iswf.services.etfs']);
