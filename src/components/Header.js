import React from 'react'
import styled from 'styled-components'
import { mediaAbove, maxWidth } from '../utils/css-helpers'

const Container = styled.header`
  position: relative;
  top: 0;
  z-index: 4;
  //background-color: var(--blue-color);
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
  height: 150px;
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

const Logo = styled.div`
  display: block;
  width: 50px;
`

const Image = styled.img``

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Header.Title = function Title({ children, ...restProps }) {
  return <HeaderTitle {...restProps}>{children}</HeaderTitle>
}

Header.Image = function HeaderImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>
}
