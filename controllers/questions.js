const {qcms} = require('../models/inmemory');


const displayFormQuestion = (req, res) => {
    res.render('question', {qcms: qcms});
};
const createNewForm = (req, res) => {
    console.log(req.body);
    addQuestion({
        question: req.body.question,
        qcm_id: req.body.qcm_id,
        category: req.body.category,
        difficulty: req.body.difficulty
    });
    res.redirect('/qcms');
}



module.exports = {displayFormQuestion, createNewForm};