var mongoose = require('mongoose')
    , async = require('async')
    , Portfolio = mongoose.model('Portfolio')
    , _ = require('underscore');

exports.create = function (req, res) {
    var portfolio = new Portfolio(req.body);
    portfolio.owner = req.user;
    portfolio.game = req.body.game;
    portfolio.save();
    res.jsonp(portfolio);
};

exports.show = function (req, res) {
    res.jsonp(req.portfolio);
};

exports.portfolio = function (req, res, next, id) {
    var Portfolio = mongoose.model('Portfolio');
    Portfolio.load(id, function (err, portfolio) {
        if (err) return next(err);
        if (!portfolio) return next(new Error('Failed to load portfolio ' + id));
        req.portfolio = portfolio;
        next();
    })
};

exports.all = function (req, res) {
    Portfolio.find().populate('owner').populate('game').exec(function (err, portfolios) {
        if (err) {
            res.render('error', {status: 500});
        } else {
            res.jsonp(portfolios);
        }
    });
};

exports.update = function (req, res) {
    var portfolio = req.portfolio;
    portfolio = _.extend(portfolio, req.body);
    portfolio.save(function (err) {
        res.jsonp(portfolio);
    })
};

exports.destroy = function (req, res) {
    var portfolio = req.portfolio;
    portfolio.remove(function (err) {
        if (err) {
            res.render('error', {status: 500});
        } else {
            res.jsonp(1);
        }
    })
};
