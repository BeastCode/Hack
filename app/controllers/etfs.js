var mongoose = require('mongoose')
    , async = require('async')
    , Etf = mongoose.model('Etf')
    , _ = require('underscore')

exports.create = function (req, res) {
    var etf = new Etf(req.body);
    etf.commissioner = req.user;
    etf.save();
    res.jsonp(etf);
}

exports.show = function (req, res) {
    res.jsonp(req.etf);
}

exports.etf = function (req, res, next, id) {
    var Etf = mongoose.model('Etf');

    Etf.load(id, function (err, etf) {
        if (err) return next(err);
        if (!etf) return next(new Error('Failed to load etf ' + id));
        req.etf = etf;
        next();
    });
}

exports.all = function (req, res) {
    Etf.find().populate('commissioner').exec(function (err, etfs) {
        if (err) res.render('error', {status: 500});
        else res.jsonp(etfs);
    });
}

exports.update = function (req, res) {
    var etf = req.etf
    etf = _.extend(etf, req.body)

    etf.save(function (err) {
        res.jsonp(etf)
    })
}

exports.destroy = function (req, res) {
    var etf = req.etf
    etf.remove(function (err) {
        if (err) {
            res.render('error', {status: 500});
        } else {
            res.jsonp(1);
        }
    })
}
