// contactModel.js
const mongoose = require('mongoose');
// Setup schema
const apiSchema = mongoose.Schema({
    isrc: String,
    rank: Number,
    track: {
        original: String,
        value: String
    },
    album: {
        original: String,
        value: String
    },
    artist: {
        original: String,
        value: String
    }
});

// Export Contact model
module.exports = mongoose.model('top50fr', apiSchema);
