import React from 'react';
import LogoFooter from "../assets/images/logo-footer.png"

const Footer = () => {
    // Ce composant renvoie un simple pied de page avec un logo et un message
    return (
        <footer>
            <img className="header-logo" src={LogoFooter} alt="Logo Kasa" />
            <div className="footer-all-right">
            © 2020 Kasa. All rights reserved
            </div>
        </footer>
    );
};

export default Footer;