import { Link, NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import colors from './colors'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

export const StyledLink = styled(NavLink)`
  padding: 10px 15px;
  color: #FF6060;
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  margin:0 !important;
  &.active { 
    text-decoration: underline;
  }
    @media screen and (max-width: 991px) {
    font-size: 14px;
    padding: 133px 0 0 10px;
    // padding-top: 133px;
    }
`
export const ErrorLink = styled(Link)`
color: #FF6060;
text-decoration: none;
font-size: 14px;
font-weight: 500;
padding-top: 133px;
margin-bottom: 235px;
  @media screen and (min-width: 991px) {
    font-size: 18px;
    padding-top: 182px;
    margin-bottom: 159px;
    }
&.a {
  font-size: 14px;
      @media screen and (min-width: 991px) {
      font-size: 18px;
      }
  }
&:hover {
  text-decoration: underline;
        }
`