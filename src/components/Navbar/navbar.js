import React from "react";
import './navbar.css';
import logo from '../../Assets/bigro.png'
import contactImg from '../../Assets/ttt.png'
import { Link } from 'react-scroll'
import menu from "../../Assets/icons8-menu-64.png"
import { useState } from "react";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false); 
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>  
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">About</Link>     
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">Portfolio </Link>     
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">Clients</Link>        
            </div>
            <button className="desktopBtn" onClick={() => {
                document.getElementById("contact").scrollIntoView({behavior: "smooth"});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg"/> Contact me </button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>  
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>About</Link>     
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Portfolio </Link>     
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>      
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>   
            </div>

        </nav>
    )
}

export default Navbar
