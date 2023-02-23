import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Index from '../Pages/Index';


export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className="index-link">Index</NavLink></li>
                <li><NavLink to="/home" className="home-link">Home</NavLink></li>
            </ul>
        </nav>
    )
}