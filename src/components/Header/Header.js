import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <section className="HeaderParent">
                <section className="HeaderContent">
                    <span className='title'>NBA Playoffs 2018</span>
                    <span id="sub">Perfect Predictions</span>
                    {/* <img src="./trophy.jpg" alt="Trophy" /> */}
                    {/* <hr /> */}
                </section>
            </section>
        )
    }

}