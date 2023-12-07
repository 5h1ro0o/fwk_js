
const welcomemessage = (req, res ) => {
    res.send('Bienvenutti a tutti e a tutte en terra corsa ');
};

const welcomemessagefunction = function(req, res ) {
    res.send('che face ?');
}
const testEjsView = (req, res) => {
    res.render('welcome');
}

module.exports = {welcomemessage, welcomemessagefunction, testEjsView};