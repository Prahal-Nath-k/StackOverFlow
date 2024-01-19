import React from 'react';
import './../styles/header.css';

const AppHeader = () => {

    return (
        <header className="app-header">
            <div className="app-name">
                <h1>Stack Overflow Clone</h1>
            </div>
            <div>
                <button className="login-button">Login</button>
                <button className="signup-button">Sign up</button>
            </div>
        </header>
    );
};

export default AppHeader;