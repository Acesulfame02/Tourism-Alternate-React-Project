import Interim from '../Components/Interim';
import NavBar from '../Components/NavBar';

function Home (){
    return(
        <>
            <NavBar />
            <Interim
                cName = 'interim'
            />
        </>
    );
}
export default Home;