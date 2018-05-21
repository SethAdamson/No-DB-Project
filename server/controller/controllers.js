const axios = require('axios');
const config = require('../config');

let stats = [];
let results = [];
let id = [];
let photo = '';
let URL = "https://api.mysportsfeeds.com/v1.2/pull/nba/2018-playoff/playoff_team_standings.json?team=bos,cle,hou,gsw";

module.exports = {
        getNBAData: (req, res) => {
            console.log("NBA Data");
            axios.get(URL, {headers: {"Authorization": "Basic " + config.id}})
            .then( data => {
                stats = data.data.playoffteamstandings.conference;
                res.status(200).send(stats)
            })
        },
        
        getRes: (req, res) => {
            console.log("Results");
            return res.status(200).send(results);
        },

        createRes: (req, res) => {
            console.log("Add");
            let {gameName, series, winner} = req.results;
            results.push({id, gameName, series, winner});
            id++;
            res.status(200).send(results);
        },

        updateRes: (req, res) => {
            console.log("Update");
            let {gameName} = req.results;
            let updateID = req.results.id
            for( let i=0; i < results.length; i++) {
                if(results[i].id === updateID) {
                    results[i].gameName = gameName;
                    return res.status(200).send(results);
                }
            }
        },

        deleteRes: (req, res) => {
            console.log("Delete");
            let deleteID = req.results.id;
            for(let i=0; i<results.length; i++) {
                if(results[i].id === deleteID) {
                    results.splice(i, 1);
                    return res.status(200).send(results)
                }
            }
        },

        getPlayerPhoto: (req, res) => {
            console.log("Photos");
            let playerName = req.photo;
            axios.get(`https://nba-players.herokuapp.com/players/${playerName}`)
            .then(data => {
                photo = res;
                res.status(200).send(photo);
            })
        }
}