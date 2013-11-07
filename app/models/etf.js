var mongoose = require('mongoose')
    , env = process.env.NODE_ENV || 'development'
    , config = require('../../config/config')[env]
    , Schema = mongoose.Schema;

var EtfSchema = new Schema({
    name: {type: String},
    desc: {type: String},
    ticker: {type: String},
    type: {type: String}
});

EtfSchema.statics = {
    load: function (id, cb) {
        this.findOne({ _id: id }).exec(cb);
    }
};

mongoose.model('Etf', EtfSchema);
