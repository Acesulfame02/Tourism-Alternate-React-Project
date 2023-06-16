import Destination from '../Components/Destination';
import Interim from '../Components/Interim';
import NavBar from '../Components/NavBar';
import Trip from '../Components/Trip';

function Home (){
    const imageSource = require('../Images/thumb_victoria2.jpg');
    return(
        <>
            <NavBar />
            <Interim
                cName = 'interim-home'
                interimImage = {imageSource}
                title = 'Home'
                text = 'This is the Finnest Travel Site in the Country'
                btnText = 'Travel Plan'
                url = '/'
                btnClass = 'link-interim'
            />
            <Destination />
            <Trip />
        </>
    );
}
export default Home;