import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(NavLink)`
  padding: 10px 15px;
  color: #FF6060;
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  &.active { 
    text-decoration: underline;
  }
`