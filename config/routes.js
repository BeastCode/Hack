var async = require('async')

module.exports = function (app, passport, auth) {

    // user routes
    var users = require('../app/controllers/users');
    app.get('/signin', users.signin);
    app.get('/signup', users.signup);
    app.get('/signout', users.signout);
    app.post('/users', users.create);
    app.post('/users/session', passport.authenticate('local', {failureRedirect: '/signin', failureFlash: 'Invalid email or password.'}), users.session);
    app.get('/users/me', users.me);
    app.get('/users/:userId', users.show);

    app.param('userId', users.user);

    // Game routes
    var games = require('../app/controllers/games');
    app.get('/games', games.all);
    app.post('/games', auth.requiresLogin, games.create);
    app.get('/games/:gameId', games.show);
    app.put('/games/:gameId', auth.requiresLogin, games.update);
    app.del('/games/:gameId', auth.requiresLogin, games.destroy);

    app.param('gameId', games.game);

    // etf routes
	var etfs = require('../app/controllers/etfs');
    app.get('/etfs', etfs.all);
    app.post('/etfs', auth.requiresLogin, etfs.create);
    app.get('/etfs/:etfId', etfs.show);

    app.param('etfId', etfs.etf);

    // portfolio routes
    var portfolios = require('../app/controllers/portfolios');
    app.get('/portfolios', portfolios.all);
    app.post('/portfolios', auth.requiresLogin, portfolios.create);
    app.get('/portfolios/:portfolioId', portfolios.show);
    app.put('/portfolios/:portfolioId', auth.requiresLogin, portfolios.update);
    app.del('/portfolios/:portfolioId', auth.requiresLogin, portfolios.destroy);

    app.param('portfolioId', portfolios.portfolio);

    // home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

}
