import React from 'react'
import styled from 'styled-components'
import { mediaAbove, maxWidth } from '../utils/css-helpers'

const Container = styled.header`
  position: relative;
  top: 0;
  z-index: 4;
  // border-bottom: 1px solid black;
  // background-color: var(--green-color);
  // background-color: var(--white-color);
  // background-color: var(--main14-background-color);
`

const Wrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;
  ${maxWidth};
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  ${mediaAbove.mediumScreen`
 justify-content: space-between;
`}
  ${mediaAbove.largeScreen`
 padding-left: 3rem;
 padding-right: 3rem;
`}
`

const HeaderTitle = styled.h1`
  display: none;

  ${mediaAbove.mediumScreen`
  display: inline-flex;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 300;
`}
`

const HeaderLogo = styled.div`
  display: block;
  border: 2px solid black;
  font-size: 2.5rem;
  padding: 5px;
  font-weight: 500;
  &:hover {
    background-color: var(--main-background);
  }
  span:first-child {
    color: var(--green-color);
    text-shadow: 3px 2px 0 var(--red-color);
  }
  span:last-child {
    color: var(--yellow-color);
    text-shadow: 3px 2px 0 var(--blue-color);
  }
`

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Header.Title = function Title({ children, ...restProps }) {
  return <HeaderTitle {...restProps}>{children}</HeaderTitle>
}

Header.Logo = function Logo({ children, ...restProps }) {
  return <HeaderLogo {...restProps}>{children}</HeaderLogo>
}
