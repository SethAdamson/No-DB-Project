import React, {Component} from 'react';
import './TeamLogo.css';
import './Boston.png';
import './Cavs.png';
import './Finals.png';
import './GSW.png';
import './Hou.png';

export default class TeamLogo extends Component {

showTeam(val){
    if(val==="east"){
        return (
            <div className='teams'> 
                <img className='logo' src={require("./Boston.png")} alt="BOS" />
                <h1>VS</h1>
                <img className='logo' src={require("./Cavs.png")} alt="CLE" />
            </div>)
    } else if (val==="west"){
        return (
            <div className='teams'>
                <img className='logo' src={require("./GSW.png")} alt="GSW" />
                <h1>VS</h1>
                <img className='hou' src={require("./Hou.png")} alt="HOU" />
            </div>)
    } else {
        return(
        <img className='finals' src={require("./Finals.png")} alt="Finals" />)
    }
}
    
    render() {
        return (
            <section className="LogoParent">
                <section className="LogoContent">
                {this.showTeam(this.props.teamSelection)}
                </section>
            </section>
        )
    }

}