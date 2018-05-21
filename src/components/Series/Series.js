import React, {Component} from 'react';
import './Series.css'
import TeamLogo from './TeamLogo/TeamLogo'
import Results from './Results/Results'
import axios from 'axios';

export default class Series extends Component {
    constructor(){
        super();

        this.state = {
            seriesName: '',
            teamSelection: '',
            winner: '',
            seriesList: []
        }

        this.findWinner = this.findWinner.bind(this);
        this.clearResults = this.clearResults.bind(this);
        this.removeGame = this.removeGame.bind(this);
        this.editMessage = this.editMessage.bind(this);
    }

updateVal(val) {
    this.setState({
        seriesName: val
    })
}

selectGame(val, cb) {
    this.setState({
        teamSelection: val
    });
    cb(val);
}

clearResults () {
    this.setState({
        seriesList: []
    })
}

findWinner(val) {
    if(val==='East') {
        if((this.props.celts + this.props.randomFn(-15, 15)) > (this.props.cavs + this.props.randomFn(-15, 15))) {
            this.setState({
                winner: 'Celtics'
            })
        } else {
            this.setState({
                winner: 'Cavs'
            })
        } 
    } else if(val==='West'){
        if((this.props.dubs + this.props.randomFn(-15, 15)) > (this.props.rockets + this.props.randomFn(-15, 15))) {
            this.setState({
                    winner: 'Warriors'
            })
        } else {
            this.setState({
                    winner: 'Rockets'
            })
        }
    } else if(val==='Finals') {
        if((this.props.dubs + this.props.randomFn(-15, 15)) > 
            (this.props.rockets + this.props.randomFn(-15, 15)) &&
            (this.props.celts + this.props.randomFn(-15, 15)) &&
            (this.props.cavs + this.props.randomFn(-15, 15))) {
                this.setState({
                    winner: 'Warriors'
            })
            } else if ((this.props.rockets + this.props.randomFn(-15, 15)) > 
            (this.props.dubs + this.props.randomFn(-15, 15)) &&
            (this.props.celts + this.props.randomFn(-15, 15)) &&
            (this.props.cavs + this.props.randomFn(-15, 15))) {
                this.setState({
                    winner: 'Rockets'
            })
            } else if ((this.props.celts + this.props.randomFn(-15, 15)) > 
            (this.props.dubs + this.props.randomFn(-15, 15)) &&
            (this.props.rockets + this.props.randomFn(-15, 15)) &&
            (this.props.cavs + this.props.randomFn(-15, 15))) {
                this.setState({
                    winner: 'Celtics'
            })
            } else if ((this.props.cavs + this.props.randomFn(-15, 15)) > 
            (this.props.dubs + this.props.randomFn(-15, 15)) &&
            (this.props.rockets + this.props.randomFn(-15, 15)) &&
            (this.props.celts + this.props.randomFn(-15, 15))) {
                this.setState({
                    winner: 'Cavs'
            })
        }
    }
}

createSeries() {
    let {seriesName, teamSelection, winner} = this.state;
    if(seriesName && teamSelection && winner) {
        axios.post('/api/nba/results', {seriesName, teamSelection, winner}).then(res => {
            console.log(res.data)
            this.setState({seriesList: res.data})
        });
        this.setState({
            // seriesName: '',
            teamSelection: '',
            winner: ''
        })
    }
}

removeGame(id) {
    axios.delete(`/api/nba/results/${id}`).then(res => {
        this.setState({seriesList: res.data})
    })
}

editMessage( id, seriesName) {
    axios.put( `/api/nba/results/${id}`, {seriesName} ).then( res => {
      this.setState({ seriesList: res.data });
    });
  }

    render() {
        let {seriesName, teamSelection, winner, seriesList} = this.state
        let {rockets,dubs,cavs,celts} = this.props
        console.log(seriesName);
        console.log(teamSelection);
        console.log(winner);
        // console.log(seriesList);
        return (
            <section className="SeriesParent">
                <section className="SeriesContent">
                    <input className='seriesName'
                            placeholder="Playoff Series Name"
                            onChange={(e) => this.updateVal(e.target.value)}
                            />
                    <select className='seriesSelection'
                            onChange={(e) => this.selectGame(e.target.value, this.findWinner)}
                            value=''>
                        <option id='select' value='' disabled hidden>--Pick your Game--</option>
                        <option value='West'>Golden State vs. Houston</option>
                        <option value='East'>Cleveland vs. Boston</option>
                        <option value='Finals'>NBA Finals</option>
                    </select> 
                    <button className='seriesSubmit'
                            onClick={() => this.createSeries()} >Let's Go!</button>
                </section>
                <TeamLogo teamSelection={teamSelection} />
                <hr />
                <Results rockets={rockets} 
                        dubs={dubs}
                        cavs={cavs} 
                        celts={celts} 
                        seriesList={seriesList}
                        clearResults={this.clearResults}
                        removeGame={this.removeGame}
                        editMessage={this.editMessage} />
            </section>
        )
    }

}