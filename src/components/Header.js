import React from 'react'
import styled from 'styled-components'
import { flexProps } from '../utils/css-helpers'

const Container = styled.header`
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 4;
  //background-color: var(--green-color);
  background-color: var(--white-color);
  display: flex;
  ${flexProps}
  height:60px;
  //border-bottom: 1px solid black;
`

const HeaderBox = styled.div`
  display: flex;
  ${flexProps}
`

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Box = function Box({ children, ...restProps }) {
  return <HeaderBox {...restProps}>{children}</HeaderBox>
}

Header.Title = function Title({ children, ...restProps }) {
  return <HeaderTitle {...restProps}>{children}</HeaderTitle>
}
