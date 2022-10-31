import './Footer.css';
import footerLogo from '../../assets/footerLogo.svg';

function Footer() {
    return (
        <footer>
            <img src={footerLogo} alt="logo Kasa light" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;