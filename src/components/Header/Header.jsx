import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './Header.css'
import { useState } from 'react';

import Logo from '../../assets/images/s-logo-40px.png'

export default function Header() {

    const [navOpen, setNavOpen] = useState(false)

    function triggerNav() {
        setNavOpen( prev => !prev)
    }

    return (
        <header>
            <div className="header-logo"><img src={Logo} alt="" /></div>
            <div 
            className={`nav-trigger fa ${navOpen ? "fa-xmark" : "fa-bars"}`}
            onClick={triggerNav}
            ></div>
            <nav className={`${navOpen ? "active" : "hidden"}`}>
                <Link to="/home">Start</Link>
                <Link to="/service">Leistungen</Link>
                <Link to="/referenzen">Referenzen</Link>
                <Link to="/about">Über Mich</Link>
                <Link to="/kontakt">Kontakt</Link>
            </nav>
        </header>
    )
}