import React from 'react'
import styled from 'styled-components'
import { mediaAbove, maxWidth } from '../utils/css-helpers'

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 4;
  border-bottom: 1px solid black;
  //background-color: var(--green-color);
  background-color: var(--white-color);
`

const Wrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;
  ${maxWidth};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  ${mediaAbove.mediumScreen`
 justify-content: space-between;
`}
`

const HeaderTitle = styled.h1`
  display: none;

  ${mediaAbove.mediumScreen`
  display: inline-flex;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 300;
`}
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
