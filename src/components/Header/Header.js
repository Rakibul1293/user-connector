import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <a className="navbar-brand" href="#">UserConnector</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;