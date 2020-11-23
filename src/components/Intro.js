import React from 'react'
import styled from 'styled-components'
import { flexProps } from '../utils/CssHelpers'

const Container = styled.div`
  display: flex;
  max-width: 1000px;
  ${flexProps}
  margin-top:20%;
`

const Text = styled.p`
  font-size: 3rem;
  font-weight: 200;
  margin: 50px 0 0 20px;
`

const Title = styled.h1`
  font-size: 7rem;
  font-weight: 700;
  letter-spacing: 0;
  margin: 50px 0 0 0;
  text-align: center;
`

const Special = styled.span`
  ${({ color }) => (color ? `color: ${color};` : null)}
  ${({ shadow }) => (shadow ? `text-shadow: 7px 7px ${shadow};` : null)}
`

export default function Intro({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Intro.Special = function IntroSpecial({ children, ...restProps }) {
  return <Special {...restProps}>{children}</Special>
}

Intro.Text = function IntroText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Intro.Title = function IntroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
