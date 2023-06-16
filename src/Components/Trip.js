import '../Style_Sheets/TripStyles.css';
import TripData from './TripData';

function Trip(){
    return(
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>Our Subcribers for this Month.</p>
            <div className='tripCard'>
                <TripData 
                    img = {require('../Images/img2.jpg')}
                    heading = 'Enjoyment Park'
                    text = 'Together'
                />
                <TripData 
                    img = {require('../Images/img3.jpg')}
                    heading = 'Local Park'
                    text = 'Together'
                />
                <TripData 
                    img = {require('../Images/img4.jpg')}
                    heading = 'Frost Park'
                    text = 'Together'
                />
            </div>
        </div>
    );
}

export default Trip;