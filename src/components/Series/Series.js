import React, {Component} from 'react';
import './Series.css'
import TeamLogo from './TeamLogo/TeamLogo'
import Results from './Results/Results'

export default class Series extends Component {
    constructor(){
        super();

        this.state = {
            seriesName: '',
            teamSelection: '',
            winner: ''
        }
    }

updateVal(val) {
    this.setState({
        seriesName: val
    })
}

selectGame(val) {
    this.setState({
        teamSelection: val
    })
}

createSeries(teams) {
    
}

    render() {
        let {seriesName, teamSelection, winner} = this.state
        let {rockets,dubs,cavs,celts} = this.props
        console.log(seriesName);
        console.log(teamSelection);
        console.log(winner);
        return (
            <section className="SeriesParent">
                <section className="SeriesContent">
                    <input className='seriesName'
                            placeholder="Playoff Series Name"
                            onChange={(e) => this.updateVal(e.target.value)}/>
                    <select className='seriesSelection'
                            onChange={(e) => this.selectGame(e.target.value)}
                            value=''>
                        <option id='select' value='' disabled hidden>--Pick your Game--</option>
                        <option value='west'>Golden State vs. Houston</option>
                        <option value='east'>Cleveland vs. Boston</option>
                        <option value='finals'>NBA Finals</option>
                    </select> 
                    <button className='seriesSubmit'
                            onClick={() => this.createSeries(teamSelection)} >Let's Go!</button>
                </section>
                <TeamLogo teamSelection={teamSelection} />
                <hr />
                <Results rockets={rockets} 
                        dubs={dubs}
                        cavs={cavs} 
                        celts={celts} 
                        seriesName={seriesName}
                        teamSelection={teamSelection}
                        winner={winner} />
            </section>
        )
    }

}