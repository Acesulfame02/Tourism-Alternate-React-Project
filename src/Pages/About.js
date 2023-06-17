import Footer from "../Components/Footer";
import Interim from "../Components/Interim";
import NavBar from "../Components/NavBar";

function About (){
    const imageSource = require('../Images/img.jpg');
    return(
        <>
            <NavBar />
            <Interim
                cName = 'interim-mid'
                interimImage = {imageSource}
                title = 'About'
            />
            <Footer />
        </>
    );
}

export default About;