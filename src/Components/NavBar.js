import '../Style_Sheets/NavBarStyle.css';
import {Component} from 'react';
import {MenuItems} from '../Components/MenuItems';
import { Link } from 'react-router-dom';

class NavBar extends Component{
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className='navbarItems'>
                <h1 className='navbar-logo'>Finesse</h1>
                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'navbar-menu active' : 'navbar-menu'}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <button>Login</button>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
