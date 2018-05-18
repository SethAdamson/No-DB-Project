const axios = require('axios');
const config = require('../config');

let stats = [];
let URL = "https://api.mysportsfeeds.com/v1.2/pull/nba/2018-playoff/playoff_team_standings.json?team=bos,cle,hou,gsw";

module.exports = {
        getNBAData: (req, res) => {
            console.log("Hello")
            axios.get(URL, {headers: {"Authorization": "Basic " + config.id}})
            .then( data => {
                stats = data.data.playoffteamstandings.conference;
                res.status(200).send(stats)
            })
        }   
}