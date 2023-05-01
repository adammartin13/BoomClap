const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;
const MusicFormDataSchema = new mongoose.Schema({
    _id: {type: ObjectId},
    file: {type: String},
    artist: {type: String},
    publisher: {type: String},
    genre: {type: String},
    art: {type: String}
} ,
{ collection: "music" }
);
const Song = mongoose.model('Song', MusicFormDataSchema);
module.exports = Song;