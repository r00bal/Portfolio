import React from 'react'
import styled from 'styled-components'
import { SqueezeSpring } from '../animations'
import { Nav, Header } from '../components'
import { flexProps, mediaAbove, maxWidth } from '../utils/css-helpers'
import { GlobalStyle } from '../utils/global-styles'
import '../utils/font-awesome'

const Main = styled.main`
  height: calc(100% - calc(100px + 16px + 16px));
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
const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header>
      <Header.Wrapper>
        <Header.Logo>
          <span>P</span>
          <span>A</span>
        </Header.Logo>

        <Nav>
          <Nav.List>
            <Nav.Item>
              <Nav.Link activeClassName="active" to="/">
                <Nav.Text>Home</Nav.Text>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link activeClassName="active" to="/projects">
                <Nav.Text>Projects</Nav.Text>
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
