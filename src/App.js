import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header'
import Series from './components/Series/Series'
import Results from './components/Results/Results'

class App extends Component {
  constructor() {
    super();

    this.state = {
      teams: [],
      rockets: [],
      dubs: [],
      cavs: [],
      celts: [],
      seriesList: []
    }
  }


  componentDidMount(){
    // axios.get('https://api.mysportsfeeds.com/v1.2/pull/nba/2018-playoff/cumulative_player_stats.json', {headers: {"Authorization": "Basic " + btoa(`SCA:longhorns`)}})
    // .then(res => {
    //   console.log(res);
    //   })

    // axios.get("/api/nba").then(res => {
    //   console.log(res);
    //   this.setState({
    //     teams: res.data
    //   })
    // })

    // axios.get("https://nba-players.herokuapp.com/players-stats-teams/cle").then( res => {
    //   this.setState({
    //     cavs: res.data
    //   });
    // });

  //   axios.get("https://nba-players.herokuapp.com/players-stats-teams/bos").then( res => {
  //     this.setState({
  //       celts: res.data
  //     });
  //   }),

  //   axios.get("https://nba-players.herokuapp.com/players-stats-teams/gsw").then( res => {
  //     this.setState({
  //       dubs: res.data
  //     });
  //   }),

  //   axios.get("https://nba-players.herokuapp.com/players-stats-teams/hou").then( res => {
  //     this.setState({
  //       rockets: res.data
  //     });
  //   })
  }
  



  render() {
    let {rockets, dubs, cavs, celts, teams} = this.state;
    console.log(teams);
    // for(let i=0; i<teams.length; i++) {
    //   if(teams.)
    // }
    return (
      <div className="AppParent">
        <Header />
        <Series  />
        <Results rockets={rockets} dubs={dubs} cavs={cavs} celts={celts} />
      </div>
    );
  }
}

export default App;
