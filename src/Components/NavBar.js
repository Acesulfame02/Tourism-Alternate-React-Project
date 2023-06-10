import '../Style_Sheets/NavBarStyle.css';
import {Component} from 'react';
import {MenuItems} from '../Components/MenuItems';

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
                                <a className={item.cName} href={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </a>
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
