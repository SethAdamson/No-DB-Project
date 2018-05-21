import React, {Component} from 'react';
import './Results.css';
import Previous from './Previous/Previous';

export default class Results extends Component {
    constructor() {
        super();
        this.state = {
            winner: ''
        }
    }

    render() {
        return (
            <section className="ResultsParent">
                <section className="ResultsContent">
                    <h1>Results</h1>
                    <main></main>

                    
                </section>
                <Previous />
            </section>
        )
    }

}