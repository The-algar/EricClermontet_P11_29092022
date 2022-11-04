// import styled from 'styled-components'
// import { ErrorLink } from '../../utils/style/Slinks'
// import colors from '../../utils/style/colors'
import { Link } from "react-router-dom";
import './Error.css';
// const ErrorWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: ${colors.backgroundLight};
//   min-width: 395px;
//   align-items: center;
//   padding: 0!important;
//   margin: 0 10px 0;
//   @media screen and (min-width: 991px) {
//     max-width: 1240px;
//     margin: 0 100px 0;
//   }
// `
// const Big404 = styled.h1`
//   font-weight: 700;
//   font-size: 288px;
//   color: ${colors.primary};
//   margin:0!important;
//   padding-top: 169px !important;
//     @media screen and (max-width: 768px) {
//         font-size: 96px;
//         padding-top: 195px;
//     }
// `
// const ErrorMessage = styled.h2`
//   font-weight: 500;
//   font-size: 36px;
//   color: ${colors.primary};
//   padding-top: 66px;
//   margin:0!important;
//     @media screen and (max-width: 768px) {
//         font-size: 18px;
//         padding-top: 11px;
//     }
// `

function Error() {
  return (
    <div className="errorWrapper">
      <h1 className="big404">404</h1>
      <div className="errorMessage">
        Il semblerait que la page que vous cherchez n’existe pas
      </div>
      <Link className="errorLink"  to="/">Retourner sur la page d'accueil</Link>   
    </div>
  )
}
export default Error