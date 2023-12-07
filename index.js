const express = require('express');

const { welcomemessage, welcomemessagefunction, testEjsView } = require('./controllers/welcome');

const { displayQcms } = require('./controllers/qcm');

const app = express();

app.set('view engine', 'ejs');

const port = 3000;


app.get('/qcms', displayQcms);

app.get ('/test', testEjsView);

app.get('/', welcomemessage);

app.get('/welcome', welcomemessagefunction);

app.get('/qcms/new', displayFromQcm);
app.listen(port, () => {
    console.log(`Ecoute sur http://localhost: ${port}`);
});
