import React from 'react';
import { Link } from 'react-router-dom';
import Index from '../Pages/Index';


export const NavBar = () => {
    return (
        <nav>
            <Link to="/" class="index-link">Index</Link>
            <Link to="/home" class="home-link">Home</Link>
        </nav>
    )
}