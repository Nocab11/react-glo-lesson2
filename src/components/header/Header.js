import React from 'react';
const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className="header">
                    <a href="google.com">
                        <div className="header-logo"></div>
                    </a>
                    <a href="tel:888" className="header-phone">tel:888</a>
                    <div className="header-phonelink"><a href="tel:7(962)556-1234">+7(962)556-1234</a></div>
                </div>
            </div>
        </header>
    );
}

export default Header;