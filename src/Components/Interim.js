import '../Style_Sheets/Interim.css';

function Interim (props){
    return(
        <>
            <div className={props.cName}>
                <img alt='InterimImage' src='http://localhost:3000/Images/img.jpg' />
                <div className='interim-text'>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href='/'>
                        Travel Plan
                    </a>
                </div>
            </div>
        </>
    )
}

export default Interim;