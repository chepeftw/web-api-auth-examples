// contactController.js
// Import contact model
const TopEntity = require('./apiModel');
// Handle index actions
// exports.index = async function (req, res) {
//     console.log("Index!");
//
//     // get all the users
//     TopEntity.find({}).limit(20).exec(function (err, result) {
//         if (err) {
//             res.status(404).json({
//                 status: "error",
//                 message: err
//             });
//         } else {
//             // object of all the users
//             console.log(result);
//             res.json({
//                 status: "success",
//                 message: "Showing all results",
//                 data: result
//             });
//         }
//     });
// };

exports.view = function (req, res) {
    console.log("View!");
    const isrc = req.params.isrc.toUpperCase();
    console.log(" - query: %j", {isrc: isrc});

    TopEntity.find({isrc: isrc}).limit(1).exec(function (err, docs) {
        if (docs[0] == null) {
            console.log(" - docs[0] is NULL");
        } else {
            console.log(" - docs[0] = %j", docs[0]);
        }
        res.json({
            req: isrc,
            message: 'Contact details loading..',
            data: docs[0]
        });
    });
};