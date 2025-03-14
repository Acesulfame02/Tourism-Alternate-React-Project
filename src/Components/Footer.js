import '../Style_Sheets/FooterStyle.css';

const Footer = () =>{
    return(
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>Finesse</h1>
                    <p>Travel and Stay with us, See the Zambia in beauty</p>
                </div>
                <div>
                    <a href='/'>
                        <i className='fa-brands fa-facebook-square'></i>
                    </a>
                    <a href='/'>
                        <i className='fa-brands fa-instagram-square'></i>
                    </a>
                    <a href='/'>
                        <i className='fa-brands fa-youtube-square'></i>
                    </a>
                    <a href='/'>
                        <i className='fa-brands fa-twitter-square'></i>
                    </a>
                </div>
            </div>
            
            <div className='bottom'>
                <div>
                    <h4>Project</h4>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href='/'>Github</a>
                    <a href='/'>Issues</a>
                    <a href='/'>Projects</a>
                    <a href='/'>Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href='/'>Support</a>
                    <a href='/'>TroubleShooting</a>
                    <a href='/'>Contact us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href='/'>Terms of service</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>License</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;