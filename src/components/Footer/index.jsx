import PropTypes from 'prop-types'
import FooterLogo from '../../assets/footerLogo.svg';
import './Footer.css'

function Footer({ copyright, picture }) {
    return (
        <footer className="footerContainer">
            <img src={picture} alt="logo Kasa light" />
            <p className="footerCopyright" {...copyright}>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Footer.defaultProps = {
  copyright: '',
  picture: FooterLogo,
}

export default Footer;