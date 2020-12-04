import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { Footer, Header, Nav } from '../components'
import panda from '../assets/download.png'

import { maxWidth, mediaAbove } from '../utils/css-helpers'
import '../utils/font-awesome'
import { GlobalStyle } from '../utils/global-styles'

const Main = styled.main`
  min-height: calc(100% - 300px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;

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
              {/* <Nav.Link activeClassName="active" to="/">
                <Nav.Text>Home</Nav.Text>
              </Nav.Link> */}
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
    <Main>{children}</Main>
    {location.pathname !== '/' ? (
      <Footer>
        <Footer.Text>frontendpit@gmail.com</Footer.Text>
        <Footer.Text>
          © {new Date().getFullYear()}, Website by {siteAuthor}
        </Footer.Text>
        <Footer.Box>
          <Footer.IconLink href="#" color="var(--white-color)" hoverColor="var(--green-color)">
            <FontAwesomeIcon size="2x" icon={['fab', 'github']} title="github account for Peter" />
          </Footer.IconLink>
          <Footer.IconLink href="#" color="var(--white-color)" hoverColor="var(--green-color)">
            <FontAwesomeIcon size="2x" icon={['fab', 'codepen']} title="codepen account for Peter" />
          </Footer.IconLink>
          <Footer.IconLink href="#" color="var(--white-color)" hoverColor="var(--green-color)">
            <FontAwesomeIcon size="2x" icon={['fab', 'linkedin']} title="linkedin account for Peter" />
          </Footer.IconLink>
          <Footer.IconLink href="#" color="var(--white-color)" hoverColor="var(--green-color)">
            <FontAwesomeIcon size="2x" icon="paper-plane" />
          </Footer.IconLink>
        </Footer.Box>
      </Footer>
    ) : null}
  </>
)

export default Layout
