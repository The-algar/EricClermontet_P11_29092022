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
  margin:0!important;
  &.active { 
    text-decoration: underline;
  }
`
export const ErrorLink = styled(Link)`
    color: #FF6060;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    padding-top: 182px;
    &.a {
        font-size: 18px;
    }
        &:hover {
            text-decoration: underline;
        }
    @media max-width: 768px {
        font-size: 14px;
        padding-top: 133px;
    }
`