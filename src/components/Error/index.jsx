import styled from 'styled-components'
import { ErrorLink } from '../../utils/style/Slinks'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
  margin:0!important;
  padding: 0!important;
`
const Big404 = styled.h1`
  font-weight: 700;
  font-size: 288px;
  color: ${colors.primary};
  margin:0!important;
  padding-top: 169px !important;
    @media screen and (max-width: 768px) {
        font-size: 96px;
        padding-top: 195px;
    }
`
const ErrorMessage = styled.h2`
  font-weight: 500;
  font-size: 36px;
  color: ${colors.primary};
  padding-top: 66px;
  margin:0!important;
    @media screen and (max-width: 768px) {
        font-size: 18px;
        padding-top: 11px;
    }
`

function Error() {
  return (
    <ErrorWrapper>
      <Big404>404</Big404>
      <ErrorMessage>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorMessage>
      <ErrorLink to="/" $isErrorLink>
          Retourner sur la page d'accueil 
      </ErrorLink>
        
    </ErrorWrapper>
  )
}

export default Error