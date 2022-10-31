import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }

    body {
    display: flex;
    justify-content: center;
    // color: #ff6060;
    max-width: 1240px;
    min-width: 375px;
    align-items: center;
    margin: 0 !important;
      @media screen and (min-width: 991px) {
        margin: 0 100px 0;
      }
    }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
