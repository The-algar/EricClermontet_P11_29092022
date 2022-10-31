import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Slinks'
import KasaLogo from '../../assets/home-logo.svg'

const HomeLogo = styled.img`
  height: 47px;
  @media screen and (min-width: 991px) {
        height: 68px;
    }
`
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-width: 325px;
  padding-top: 20px;
  margin: 0 20px 0;
  @media screen and (min-width: 991px) {
    max-width: 1240px;
    margin: 0 100px 0;
    }
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={KasaLogo} />
      </Link>
      <div>
        <StyledLink to="/" exact>Accueil</StyledLink>
        <StyledLink to="/About">A Propos</StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
