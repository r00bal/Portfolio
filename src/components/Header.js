import React from 'react'
import styled from 'styled-components'
import { flexProps } from '../utils/CssHelpers'

const Container = styled.header`
  display: flex;
  ${flexProps}
`

const Text = styled.p``

const Title = styled.h1``

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
