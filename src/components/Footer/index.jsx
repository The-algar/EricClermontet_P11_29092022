import PropTypes from 'prop-types'
import styled from 'styled-components'
import FooterLogo from '../../assets/footerLogo.svg';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 209px;
    min-width: 375px;
    background-color: black;
    color: white;
    /* margin-top: 20px; */
    margin : 0;
    @media screen and (min-width: 991px) {
      max-width: 1440px;
      margin : 0;
      padding : 0!important;
      font-size: 1.55em;
    }
`
const Logo = styled.img `
    padding-top: 62px;
    width: 122px;
        @media screen and (min-width: 991px) {
          padding-top: 66px;
        }
`

const FooterCopyright = styled.p `
    font-size: 12px;
    padding-bottom: 62px;
        @media screen and (min-width: 991px) {
          font-size: 24px;
          font-weight: 500;
          padding-bottom: 29px;
`

function Footer({ copyright, picture }) {
    return (
        <FooterContainer>
            <Logo src={picture} alt="logo Kasa light" />
            <FooterCopyright {...copyright}>© 2020 Kasa. All rights reserved</FooterCopyright>
        </FooterContainer>
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