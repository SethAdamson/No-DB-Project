const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3030;
const ctrl = require('./controller/controllers')

app.use(bodyParser.json());

app.get('/api/nba', ctrl.getNBAData);


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})