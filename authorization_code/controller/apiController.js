// contactController.js
// Import contact model
const TopEntityUS = require('../model/apiModel_US');
const TopEntityFR = require('../model/apiModel_FR');

exports.view = function (req, res) {
    console.log("View!");
    const isrc = req.params.isrc.toUpperCase();
    console.log(" - query: %j", {isrc: isrc});

    TopEntityUS.find({isrc: isrc}).limit(1).exec(function (err, docs) {
        if (docs[0] == null) {
            console.log(" - docs[0] is NULL");
        } else {
            console.log(" - docs[0] = %j", docs[0]);
        }
        res.json({
            req: isrc,
            lang: "us",
            message: 'Contact details loading..',
            data: docs[0]
        });
    });
};

exports.viewFr = function (req, res) {
    console.log("View FR!");
    const isrc = req.params.isrc.toUpperCase();
    console.log(" - query: %j", {isrc: isrc});

    TopEntityFR.find({isrc: isrc}).limit(1).exec(function (err, docs) {
        if (docs[0] == null) {
            console.log(" - docs[0] is NULL");
        } else {
            console.log(" - docs[0] = %j", docs[0]);
        }
        res.json({
            req: isrc,
            lang: "fr",
            message: 'Contact details loading..',
            data: docs[0]
        });
    });
};