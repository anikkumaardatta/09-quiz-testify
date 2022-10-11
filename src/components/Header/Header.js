import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg_theme">
                <div className="container-fluid container">
                    <Link to='/' className="navbar-brand logo_brand display_flex ">
                        <img src={logo} alt="Logo" width="60" height="60" className='d-inline-block align-text-top me-2'/>
                        Testify
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav menu_list">
                            <Link to='/home' className="nav-link">Home</Link>
                            <Link to='/topics' className="nav-link">Topics</Link>
                            <Link to='/quizes' className="nav-link">Quizes</Link>
                            <Link to='/blogs' className="nav-link">Blogs</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;