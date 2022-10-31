import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Slinks'
import KasaLogo from '../../assets/home-logo.svg'

const HomeLogo = styled.img`
  height: 47px;
  @media screen and (min-width: 992px) {
        height: 68px;
    }
`
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0;
  @media min-width: 992px {
        padding: 40px 100px 0;
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
