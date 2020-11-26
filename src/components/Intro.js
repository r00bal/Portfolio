import React from 'react'
import styled from 'styled-components'
import { mediaAbove } from '../utils/css-helpers'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  margin: 20px 0;
  ${mediaAbove.smallScreen`
  font-size: 2rem;
 
`}

  ${mediaAbove.mediumScreen`
  font-size: 3rem;
  margin: 50px 0 0 20px;
`}
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0;
  max-width: 800px;
  margin: 50px 0 0 0;
  text-align: left;
  transition: all 0.2s;
  ${mediaAbove.smallScreen`
  font-size: 4rem;
  max-width: 100%;
`}
  ${mediaAbove.mediumScreen`
  font-size: 8rem;
  max-width: 100%;
`}
`

const Special = styled.span`
  font-size: 3rem;
  ${({ color }) => (color ? `color: ${color};` : null)}
  ${({ shadow }) => (shadow ? `text-shadow: 3px 3px ${shadow};` : null)}
  transition: all 0.2s;
  &:hover {
    ${({ color, shadow }) => (color && shadow ? `text-shadow: 3px 3px ${color};` : null)}
    ${({ shadow, color }) => (shadow && color ? `color: ${shadow};` : null)}
  }
  ${mediaAbove.smallScreen`
   ${({ shadow }) => (shadow ? `text-shadow: 5px 5px ${shadow};` : null)}
    font-size: 6rem;
     &:hover {
    ${({ color, shadow }) => (color && shadow ? `text-shadow: 5px 5px ${color};` : null)}
   
  `}
  ${mediaAbove.mediumScreen`
   ${({ shadow }) => (shadow ? `text-shadow: 7px 7px ${shadow};` : null)}
    font-size: 10rem;
     &:hover {
    ${({ color, shadow }) => (color && shadow ? `text-shadow: 7px 7px ${color};` : null)}
   
  `}
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
