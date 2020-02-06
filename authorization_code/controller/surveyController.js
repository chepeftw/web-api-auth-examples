const Survey = require('../model/surveyModel');

function saveSurvey(err, survey, req, res) {
    console.log("Survey New!");
    if (err) {
        res.send(err); // Check when survey is null
        console.log("Survey New - ERROR!");
    }

    if (survey == null) {
        console.log("Survey New - Survey is null");
        survey = new Survey();
        survey.user = req.body.user;
    } else {
        if (Array.isArray(survey)) {
            console.log("survey.length = " + survey.length);
            if (survey.length === 0) {
                console.log("survey.length = ZERO");
                survey = new Survey();
                survey.user = req.body.user;
            } else {
                console.log("survey.length = SOMETHING");
                survey = survey[0];
            }
        }
    }

    console.log("req.body.user = " + req.body.user);
    console.log("req.body.user = " + req.body.us.top0_1K);

    survey.us.range0_1K = req.body.us.top0_1K;
    survey.us.range1K_5K = req.body.us.top1K_5K;
    survey.us.range5K_10K = req.body.us.top5K_10K;
    survey.us.range10K_50K = req.body.us.top10K_50K;
    survey.us.range50Kplus = req.body.us.top50Kplus;

    survey.fr.range0_1K = req.body.fr.top0_1K;
    survey.fr.range1K_5K = req.body.fr.top1K_5K;
    survey.fr.range5K_10K = req.body.fr.top5K_10K;
    survey.fr.range10K_50K = req.body.fr.top10K_50K;
    survey.fr.range50Kplus = req.body.fr.top50Kplus;
    // save the contact and check for errors
    survey.save(function (err) {
        // Check for validation error
        if (err) {
            console.log("Survey New - Save Error");
            res.json(err);
        } else {
            console.log("Survey New - Save SUCCESS");
            res.json({
                message: 'New survey data added!',
                data: survey
            });
        }
    });
}

exports.new = function (req, res) {
    console.log(req.body);
    if (req.body.user == null) {
        saveSurvey(null, new Survey(), req, res)
    } else {
        Survey.find({user: req.body.user}).limit(1).exec(function (err, survey) {
            saveSurvey(err, survey, req, res);
        });
    }
};

exports.view = function (req, res) {
    console.log("Survey View!");
    console.log(" - User ID query: %j", {user: req.params.user});

    Survey.findOne({user: req.params.user}).exec(function (err, survey) {
        if (err) res.send(err);

        res.json({
            message: 'Survey data',
            data: survey
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Survey.remove({
        user: req.body.user
    }, function (err, survey) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Survey data deleted'
        });
    });
};