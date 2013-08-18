/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    env = process.env.NODE_ENV || 'development',
    config = require('../../config/config')[env],
    Schema = mongoose.Schema;

/**
 * AccessToken Schema
 */
var AccessTokenSchema = new Schema({
    token: String,
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Statics
 */
AccessTokenSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

mongoose.model('AccessToken', AccessTokenSchema);
