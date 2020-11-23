import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 :root {
    --main-background-color: #FDF0E5;
    --rest-background-color: #F2FCF9;
    --green-color: #00FFC0;
    --blue-color: #6A61F0;
    --sky-color: #54B8FA;
    --yellow-color: #EAFF00;
    --red-color: #FF0054;
}

  body {
    margin: 0;
    padding: 0;
    font-weight: normal;
    background-color: var(--main-background-color);
    font-family: 'Source Code Pro';
    box-sizing: border-box;
    list-style: none;
  }
  html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}

*, *:before, *:after {
  box-sizing: inherit;
}

h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}
`
