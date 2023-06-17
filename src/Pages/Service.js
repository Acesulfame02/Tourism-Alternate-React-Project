import Footer from "../Components/Footer";
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
            <Footer />
        </>
    )
}

export default Service;