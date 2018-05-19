import React, {Component} from 'react';
import './Series.css'
import TeamLogo from './TeamLogo/TeamLogo'

export default class Series extends Component {
    constructor(){
        super();

        this.state = {
            seriesName: '',
            teamSelection: '',
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

    render() {
        let {seriesName, teamSelection} = this.state
        console.log(seriesName);
        console.log(teamSelection);
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
                    <button className='seriesSubmit'>Let's Go!</button>
                </section>
                <TeamLogo teamSelection={teamSelection} />
            </section>
        )
    }

}