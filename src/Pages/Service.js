import Interim from "../Components/Interim";
import NavBar from "../Components/NavBar";

function Service (){
    const imageSource = require('../Images/victoria_1.jpg');
    return(
        <>
            <NavBar />
            <Interim
                cName = 'interim-mid'
                interimImage = {imageSource}
                title = 'Service'
            />
        </>
    )
}

export default Service;