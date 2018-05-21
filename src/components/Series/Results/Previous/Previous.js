import React, {Component} from 'react';
import './Previous.css';

export default class Previous extends Component {
    render() {
        let {id, seriesName, teamSelection, winner} = this.props;
        return (
            <section className="PreviousParent">
                <section className="PreviousContent">
                    <h2 className="name"
                    >Name: {seriesName}</h2>
                    <h2 className="series"
                    >Series: {teamSelection}</h2>
                    <h2 className="winner"
                    >Winner: {winner}</h2>
                    <h2 className='adjust'>
                        <button className='edit'>Edit</button>
                        <button className='delete'>Delete</button>
                    </h2>
                    
                </section>
            </section>
        )
    }

}