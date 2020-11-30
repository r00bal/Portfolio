import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 :root {
  
  --main4-background-color: #D9E4FC;
  
  --main2-background-color: #FDF0E5;
  --main3-background-color: #F2DFCE;
  --main5-background-color: #E3D8CF;
  --main6-background-color: #C9C0B7;
  --main7-background-color: #8F98B0;
  --main8-background-color: #DFE5E7;
  --main9-background-color: #DFE5E7;
  --main10-background-color: #D7D3D8;
  --main11-background-color: #E6E6E6;
  --main12-background-color: #8F98B0;
  --main12-background-color: #F5A18E;
  --main13-background-color: #FBF5D8;
  --main14-background-color:#E5D2B9;
  --main-background-color: #F2EAE4;
  --main9-background-color: #E4EDF2;
    --black-color: #000000;
    --white-color: #ffffff;
    --green-color: #00FFC0;
    --blue-color: #6A61F0;
    --sky-color: #54B8FA;
    --yellow-color: #EAFF00;
    --red-color: #FF0054;

    /* --black-color: #000000;
    --white-color: #ffffff;
    --green-color: #3EE6A3;
    --blue-color: #6A61F0;
    --sky-color: #54B8FA;
    --yellow-color: #FAEA8B;
    --red-color: #FF0054; */
}
* {
  box-sizing:border-box;
}

    html, body, #___gatsby, #gatsby-focus-wrapper {
    
  width:100%;
  height:auto;
    margin: 0;
    padding: 0;
}

  body {
    font-size: 16px;
    font-weight: normal;
    /* background-color: var(--main14-background-color); */
    font-family: 'Roboto';
    box-sizing: border-box;
    list-style: none;
    font-size:16px;
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
