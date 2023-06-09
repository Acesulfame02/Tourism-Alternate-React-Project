import '../Style_Sheets/NavBarStyle.css';
import {Component} from 'react';
import {MenuItems} from '../Components/MenuItems';

class NavBar extends Component{
    render(){
        return(
            <nav className='navbarItems'>
                <h1 className='navbar-logo'>Finesse</h1>
                <ul className='navbar-menu'>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default NavBar;
