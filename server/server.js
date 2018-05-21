const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3030;
const ctrl = require('./controller/controllers')

app.use(bodyParser.json());

app.get('/api/nba', ctrl.getNBAData);
app.get('/api/nba/results', ctrl.getRes);
app.post('/api/nba/results', ctrl.createRes);
app.put('/api/nba/results/:id', ctrl.updateRes);
app.delete('/api/nba/results/:id', ctrl.deleteRes);
app.get('/api/nba/:photo', ctrl.getPlayerPhoto);

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})