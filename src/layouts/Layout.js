import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { ButtonLink, Footer, Header, Nav } from '../components'

import { maxWidth, mediaAbove } from '../utils/css-helpers'
import '../utils/font-awesome'
import { GlobalStyle } from '../utils/global-styles'
import SocialIcons from './SocialIcons'

const Main = styled.main`
  min-height: calc(100% - 350px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
  box-sizing: border-box;

  ${maxWidth}
  margin: 0 auto;
  padding: 1rem;
  ${mediaAbove.mediumScreen`
  padding: 1rem 2rem 1rem 2rem;
`}
  ${mediaAbove.smallScreen`
  padding: 1rem 3rem 1rem 3rem;
`}
`
const Layout = ({ children, siteAuthor = 'Panda', location }) => (
  <>
    <GlobalStyle />
    <Header>
      <Header.Wrapper>
        <Nav>
          <Nav.List>
            <Nav.Item>
              <Nav.Link activeClassName="active" to="/">
                <Nav.Text>Start</Nav.Text>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link activeClassName="active" to="/about">
                <Nav.Text>About</Nav.Text>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link activeClassName="active" to="/projects">
                <Nav.Text>Work</Nav.Text>
              </Nav.Link>
            </Nav.Item>
          </Nav.List>
        </Nav>
      </Header.Wrapper>
    </Header>
    <Main IndexPage={location.pathname !== '/'}>{children}</Main>
    {location.pathname !== '/' ? (
      <Footer>
        <Footer.Wrapper>
          <Footer.Subtitle>Interested in doing a project together ?</Footer.Subtitle>
          <Footer.Box>
            <Footer.Button>Contact Me</Footer.Button>
            <SocialIcons color="var(--black-color)" />
          </Footer.Box>
        </Footer.Wrapper>
        <Footer.Text>Made by Panda</Footer.Text>
      </Footer>
    ) : null}
  </>
)

export default Layout
