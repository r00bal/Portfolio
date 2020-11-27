import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav, Header } from '../components'
import { flexProps, mediaAbove, maxWidth } from '../utils/css-helpers'
import { GlobalStyle } from '../utils/global-styles'
import '../utils/font-awesome'

const Main = styled.main`
  height: calc(100% - calc(80px + 16px + 16px));
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
  padding: 2rem;
`}
  ${mediaAbove.smallScreen`
  padding: 3rem;
`}
`
const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header>
      <Header.Wrapper>
        <Header.Title>Piotr's Portfolio</Header.Title>
        <Nav>
          <Nav.List>
            <Nav.Item>
              <Nav.Link activeClassName="active" to="/">
                <Nav.Text>Home</Nav.Text>
                <FontAwesomeIcon size="2x" icon="home" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link activeClassName="active" to="/about">
                <Nav.Text>About me</Nav.Text>
                <FontAwesomeIcon size="2x" icon="user" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link activeClassName="active" to="/projects">
                <Nav.Text>Projects</Nav.Text>
                <FontAwesomeIcon size="2x" icon="folder" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link activeClassName="active" to="/resume">
                <Nav.Text>Resume</Nav.Text>
                <FontAwesomeIcon size="2x" icon="file" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link activeClassName="active" to="/contact">
                <Nav.Text>Contact</Nav.Text>
                <FontAwesomeIcon size="2x" icon="envelope" />
              </Nav.Link>
            </Nav.Item>
          </Nav.List>
        </Nav>
      </Header.Wrapper>
    </Header>
    <Main>{children}</Main>
  </>
)

export default Layout
