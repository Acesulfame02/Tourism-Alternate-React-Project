import { Component } from 'react';
import '../Style_Sheets/TripStyles.css';

class TripData extends Component{
    render(){
        return(
            <div className='t-card'>
                <div className='t-image'>
                    <img alt='SimpleImage' src={this.props.img} />
                </div>
                <h4>{this.props.heading}</h4>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default TripData;