import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }
        /* classes globales */
    .hide {
    display: none;
    }
    // body {
    //   min-width: 395px;
    //   box-sizing: border-box;
    //   margin: 0 10px 0;
    //     @media screen and (min-width: 991px) {
    //       max-width: 1440px;
    //       margin: 0 100px 0 !important;
    //   }
    // }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
