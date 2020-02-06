// contactModel.js
const mongoose = require('mongoose');
// Setup schema
const surveySchema = mongoose.Schema({
    user: String,
    us: {
        range0_1K: Number,
        range1K_5K: Number,
        range5K_10K: Number,
        range10K_50K: Number,
        range50Kplus: Number
    },
    fr: {
        range0_1K: Number,
        range1K_5K: Number,
        range5K_10K: Number,
        range10K_50K: Number,
        range50Kplus: Number
    }
});

// Export Contact model
module.exports = mongoose.model('survey', surveySchema);
