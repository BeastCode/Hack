var mongoose = require('mongoose')
    , env = process.env.NODE_ENV || 'development'
    , config = require('../../config/config')[env]
    , Schema = mongoose.Schema;

var GameSchema = new Schema({
    name: {type: String},
    commissioner: {type: Schema.ObjectId, ref: 'User'}
});

GameSchema.statics = {
    load: function (id, cb) {
        this.findOne({ _id: id }).populate('commissioner').exec(cb);
    }
};

mongoose.model('Game', GameSchema);
