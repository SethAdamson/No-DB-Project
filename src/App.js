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
      rockets: [],
      dubs: [],
      cavs: [],
      celts: []
    }
  }


  componentDidMount(){
    axios.get(URL)
    // axios.get("https://nba-players.herokuapp.com/players-stats-teams/cle").then( res => {
    //   this.setState({
    //     cavs: res.data
    //   });
    // });
    axios.get("https://nba-players.herokuapp.com/players-stats-teams/bos").then( res => {
      this.setState({
        celts: res.data
      });
    });
    axios.get("https://nba-players.herokuapp.com/players-stats-teams/gsw").then( res => {
      this.setState({
        dubs: res.data
      });
    });
    axios.get("https://nba-players.herokuapp.com/players-stats-teams/hou").then( res => {
      this.setState({
        rockets: res.data
      });
    });
  }



  render() {
    let {rockets, dubs, cavs, celts} = this.state;
    return (
      <div className="AppParent">
        <Header />
        <Series rockets={rockets} dubs={dubs} cavs={cavs} celts={celts} />
        <Results />
      </div>
    );
  }
}

export default App;
