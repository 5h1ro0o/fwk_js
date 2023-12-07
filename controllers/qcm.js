const qcms = require('../models/inmemory.js');
const displayQcms = (req, res) => {
    
    res.render('qcms', {qcms: qcms});
};

module.exports = { displayQcms };
