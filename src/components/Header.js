import React from 'react'
import styled from 'styled-components'
import { flexProps, mediaAbove } from '../utils/css-helpers'

const Container = styled.header`
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 4;
  //background-color: var(--green-color);
  background-color: var(--white-color);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  ${mediaAbove.mediumScreen`
 justify-content: space-between;
`}//border-bottom: 1px solid black;
`

const HeaderTitle = styled.h1`
  display: none;
  ${mediaAbove.mediumScreen`
  display: block;
  font-size: 1.5rem;
  font-weight: 300;
`}
`

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Title = function Title({ children, ...restProps }) {
  return <HeaderTitle {...restProps}>{children}</HeaderTitle>
}
