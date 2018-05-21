import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header'
import Series from './components/Series/Series'

class App extends Component {
  constructor() {
    super();

    this.state = {
      teams: [],
      rockets: [],
      dubs: [],
      cavs: [],
      celts: []
    }
  }


  componentDidMount(){
    // axios.get('https://api.mysportsfeeds.com/v1.2/pull/nba/2018-playoff/cumulative_player_stats.json', {headers: {"Authorization": "Basic " + btoa(`SCA:longhorns`)}})
    // .then(res => {
    //   console.log(res);
    //   })

    axios.get("/api/nba").then(res => {
      console.log(res);
      this.setState({
        teams: res.data
      })
    })

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
  
random (from, to) {
  return Math.floor(Math.random() * (to - from) + from);
}

teamSort (arr) {
    this.setState({
      celts: arr[0].teamentry[0],
      cavs: arr[0].teamentry[1],
      rockets: arr[1].teamentry[0],
      dubs: arr[1].teamentry[1]
    })
  }

  render() {
    let {rockets, dubs, cavs, celts, teams} = this.state;
    // this.teamSort(teams);
    console.log(teams[0][teamentry]);
    return (
      <div className="AppParent">
        <Header />
        <Series rockets={rockets} dubs={dubs} cavs={cavs} celts={celts} randomFn={this.random} />
      </div>
    );
  }
}


export default App;
