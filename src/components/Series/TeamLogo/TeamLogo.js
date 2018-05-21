import React, {Component} from 'react';
import './TeamLogo.css';
import '../images/Boston.png';
import '../images/Cavs.png';
import '../images/Finals.png';
import '../images/GSW.png';
import '../images/Hou.png';

export default class TeamLogo extends Component {

showTeam(val){
    if(val==="East"){
        return (
            <div className='teams'> 
                <img className='logo' src={require("../images/Boston.png")} alt="BOS" />
                <h1>VS</h1>
                <img className='logo' src={require("../images/Cavs.png")} alt="CLE" />
            </div>)
    } else if (val==="West"){
        return (
            <div className='teams'>
                <img className='logo' src={require("../images/GSW.png")} alt="GSW" />
                <h1>VS</h1>
                <img className='hou' src={require("../images/Hou.png")} alt="HOU" />
            </div>)
    } else {
        return(
        <img className='finals' src={require("../images/Finals.png")} alt="Finals" />)
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