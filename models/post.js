var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;

var PostSchema 	= new Schema({
    author: String,
    title: String,
    shortDescription: String,
    description: String,

    added: { type: Date, default: Date.now },
    updated: Date,
    deleted: Date

});

module.exports = mongoose.model('Post', PostSchema);