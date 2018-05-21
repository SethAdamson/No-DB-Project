import React, {Component} from 'react';
import './Results.css';
import Previous from './Previous/Previous';
import '../images/Boston.png';
import '../images/Cavs.png';
import '../images/Finals.png';
import '../images/GSW.png';
import '../images/Hou.png';
import axios from 'axios';

export default class Results extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    displayWinner(val) {
        let {seriesList} = this.props;
        if(val[seriesList.length-1]) {
            if(val[seriesList.length-1].winner==='Cavs'){
                return (<div className='logoSection'>
                            <img className='winner' src={require("../images/Cavs.png")} alt="CLE" />
                        </div>)
            } else if (val[seriesList.length-1].winner==="Celtics"){
                return (<div className='logoSection'>
                            <img className='winner' src={require("../images/Boston.png")} alt="BOS" />
                        </div>)
            } else if (val[seriesList.length-1].winner==='Warriors'){
                return (<div className='logoSection'>
                            {/* <img className='winner' src={axios.get('https://nba-players.herokuapp.com/players/curry/stephen').then(res => {return res.data})} alt="GSW" /> */}
                            <img className='winner' src={require("../images/GSW.png")} alt="GSW" />
                        </div>)
            } else if (val[seriesList.length-1].winner==='Rockets'){
                return (<div className='logoSection'>
                            <img className='winner' src={require("../images/Hou.png")} alt="HOU" />
                        </div>)
            }
        }
    }

    render() {
        let {seriesList, clearResults, removeGame, editMessage} =this.props
        return (
            <section className="ResultsParent">
                <section className="ResultsContent">
                    <h1>Results</h1>
                    <button className='clear'
                    onClick={() => clearResults()}>Clear Results</button>
                    {this.displayWinner(seriesList)}
                    {/* -------------------------------- */}
                    
                </section>
                    <div className='previous'>
                    {
                    seriesList.map(elem => (
                        <Previous id={elem.id}
                                    key={elem.id}
                                    seriesName={elem.seriesName}
                                    teamSelection={elem.teamSelection}
                                    winner={elem.winner}
                                    removeGame={removeGame}
                                    editMessage={editMessage}/>
                    ))}
                    </div> 
            </section>
        )
    }

}