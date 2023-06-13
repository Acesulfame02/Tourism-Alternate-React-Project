import '../Style_Sheets/Interim.css';

function Interim (props){
    return(
        <>
            <div className={props.cName}>
                <img alt='InterimImage' src={props.interimImage} />
                <div className='interim-text'>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>
                        {props.btnText}
                    </a>
                </div>
            </div>
        </>
    )
}

export default Interim;