import { Component } from 'react';
import '../Style_Sheets/DestinationStyles.css';

class DestinationData extends Component{
    render(){
        return(
            <div className = {this.props.cName}>
                <div className='des-text'>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className='images'>
                    <img alt='JourneyPhoto' src={this.props.img1} />
                    <img alt='JourneyPhoto' src={this.props.img2} />
                </div>
            </div>
        );
    }
}

export default DestinationData;