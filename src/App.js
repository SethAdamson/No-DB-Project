import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header'
import Series from './components/Series/Series'

class App extends Component {
  constructor() {
    super();

    this.state = {
      rockets: 0,
      dubs: 0,
      cavs: 0,
      celts: 0
    }
  }


  componentDidMount(){
    // axios.get('https://api.mysportsfeeds.com/v1.2/pull/nba/2018-playoff/cumulative_player_stats.json', {headers: {"Authorization": "Basic " + btoa(`SCA:longhorns`)}})
    // .then(res => {
    //   console.log(res);
    //   })

    // axios.get("/api/nba").then(res => {
    //   console.log(res.data);
    //   this.setState({
    //     celts: +res.data[0].teamentry[0].stats.PtsPerGame['#text'],
    //     cavs: +res.data[0].teamentry[1].stats.PtsPerGame['#text'],
    //     dubs: +res.data[1].teamentry[0].stats.PtsPerGame['#text'],
    //     rockets: +res.data[1].teamentry[1].stats.PtsPerGame['#text']
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
  
random (from, to) {
  return Math.floor(Math.random() * (to - from) + from);
}

  render() {
    let {rockets, dubs, cavs, celts} = this.state;
    console.log(this.state);
    return (
      <div className="AppParent">
        <Header />
        <Series rockets={rockets} dubs={dubs} cavs={cavs} celts={celts} randomFn={this.random} />
      </div>
    );
  }
}


export default App;
