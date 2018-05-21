import React, {Component} from 'react';
import './Previous.css';

export default class Previous extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editting: false,
            seriesName: props.seriesName
        }
        this.handleChange = this.handleChange.bind(this);
        this.edit = this.edit.bind(this);
    }
    
    handleChange(e) {
        this.setState({ seriesName: e.target.value });
    }
    
    edit(e) {
        let { seriesName } = this.state;
        let { id, editMessage } = this.props;
            if( e.key === "Enter" && seriesName.length !== 0 ) {
                editMessage( id, seriesName );
                this.setState({ editting: false });
        }
    }

    render() {
        let {editting} = this.state;
        let {id, seriesName, teamSelection, winner, removeGame} = this.props;
        return (
            <section className="PreviousParent">
                <section className="PreviousContent">
                    <h2 className="name"
                    >Name: <h3>{seriesName}</h3></h2>
                    <h2 className="series"
                    >Series: <h3>{teamSelection}</h3></h2>
                    <h2 className="winner"
                    >Winner: <h3>{winner}</h3> </h2>
                </section>
                    <h2 className='adjust'>
                        {
                            editting
                            ?
                            <input className='editInput'value={ this.state.seriesName} onChange={ this.handleChange } onKeyPress={ this.edit }/>
                            :
                            // <button className='edit'
                            //     onClick={() => this.setState({editting: !this.state.editting, seriesName})}>Edit</button>
                            <p>
                                <button className='edit'
                                        onClick={() => this.setState({editting: !this.state.editting, seriesName})}>Edit</button>
                                <button className='delete'
                                        onClick={() => removeGame(id)}>Delete</button>
                            </p>
                        }
                    </h2>
            </section>
        )
    }

}