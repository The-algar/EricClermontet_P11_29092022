import styled from 'styled-components'
import { ErrorLink } from '../../utils/style/Slinks'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
  padding: 0!important;
  margin: 0 10px 0;
    @media screen and (min-width: 991px) {
      margin: 0 100px 0;
    }
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
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 18px;
  color: ${colors.primary};
  padding-top: 11px;
    @media screen and (min-width: 991px) {
        font-size: 36px;
        padding-top: 66px;
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