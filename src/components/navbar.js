import logo from '../assets/logo.png' 
import '../styles/navbar.css'
import React from 'react'
import {Link} from 'react-router-dom'

class TopNavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.expandMenu = this.expandMenu.bind(this)
    }

    expandMenu = () => {
        var x = document.getElementById("menu");
        x.style.display =="flex" ? x.style.display = "none" : x.style.display = "flex"
    }

    render(){
        return (
            <nav className='nav-bar'>
                <span className="menu-span">
                    <Link to='/products' className='font'>Home</Link>
                    <a className='font'>Settings</a>
                    <a className='font'>Contact Us</a>
                    <Link to='/login' className='font'>Login</Link>
                </span>
                <a class="icon" onClick={this.expandMenu}><i class="fa fa-bars"></i></a>
                <span>
                    <input className='input font btn' placeholder='Search'/>
                    <button className='btn font'>Search</button> 
                </span>
                <span className="menu" id="menu">
                    <p><Link to='/products' className='font'>Home</Link></p>
                    <p><Link to='/settings' className='font'>Settings</Link></p>
                    <p><Link to='/contact' className='font'>Contact Us</Link></p>
                    <p><Link to='/login' className='font'>Login</Link></p>
                </span>
            </nav>
        )
    }
}

export {TopNavBar}