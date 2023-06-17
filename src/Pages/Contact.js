import Footer from "../Components/Footer";
import Interim from "../Components/Interim";
import NavBar from "../Components/NavBar";

function Contact (){
    const imageSource = require('../Images/kalambo_falls.jpg');
    return(
        <>
            <NavBar />
            <Interim
                cName = 'interim-mid'
                interimImage = {imageSource}
                title = 'Contact'
            />
            <Footer />
        </>
    )
}

export default Contact;