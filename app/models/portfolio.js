var mongoose = require('mongoose')
    , env = process.env.NODE_ENV || 'development'
    , config = require('../../config/config')[env]
    , Schema = mongoose.Schema;

var PortfolioSchema = new Schema({
    owner: {type: Schema.ObjectId, ref: 'User'},
    game: {type: Schema.ObjectId, ref: 'Game'},
    name: {type: String},
    funds: [
        {type: Schema.ObjectId, ref: 'Fund'}
    ]
});

PortfolioSchema.statics = {
    load: function (id, cb) {
        this.findOne({ _id: id }).populate('owner').populate('game').exec(cb);
    }
};

mongoose.model('Portfolio', PortfolioSchema);
